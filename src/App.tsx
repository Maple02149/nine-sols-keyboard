import {
  GithubFilled
} from '@ant-design/icons'
import { Button, Col, FloatButton, Input, Row, Space } from "antd"
import { useEffect, useRef, useState } from 'react'
import './App.css'
import NSF_Keyboard from "./components/keyboard"
import TextDisplayBox from "./components/textDisplayBox"
import { findCharacter, IDBCangjie, initDB } from "./models/indexDB"
import { errorLog } from "./helper"
function App() {
  const InpubBoxKeyWord = "InpubBoxKeyWord"
  const [input, setInput] = useState<string>(localStorage.getItem(InpubBoxKeyWord)??"")
  const [zhArr, setZhArr] = useState<IDBCangjie[][]>([])
  const [isDBReady, setIsDBReady] = useState<boolean>(false)
  const keyboard = useRef<any>(null)
  const [scale, setScale] = useState(1)
 
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth
      const height = window.innerHeight

      if (width >= 600 && height >= 600) {
        setScale(2)
      } else if (width >= 375 && height >= 375) {
        setScale(1)
      }
    }
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  useEffect(() => {
    (async () => {
      const status = await initDB()
      setIsDBReady(status)
    })()
  }, [])
  useEffect(() => {
    localStorage.setItem(InpubBoxKeyWord, input)
    const inputArr = input.toLocaleLowerCase().split(" ")
    const promiseArr = inputArr.map((input) => { return findCharacter(input) })
    Promise.all(promiseArr)
      .then((results) => {
        setZhArr(results)
      })
      .catch((err) => {
        errorLog(App.name, err)
        setZhArr([])
      })


  }, [input])
  return (
    <div style={
      {
        transformOrigin: "top center",
        transform: `scale(${scale})`
      }
    }>
      <Row className={"app-row"} gutter={[8, 12]}>
        <Col span={24} >
          <TextDisplayBox
            input={input}
            input_zhArr={zhArr}
            isDBReady={isDBReady}
          ></TextDisplayBox>
        </Col>
        <Col span={24} >
          <Space
            direction="horizontal"
          >
            <Input
              placeholder=""
              value={input}
            ></Input>
            <Button style={{ width: 80 }} onClick={() => {
              if (keyboard?.current?.input?.default) {
                keyboard.current.input.default = ""
              }
              setInput('')
              setZhArr([])
            }}>
              clear
            </Button>
            <br></br>
          </Space>
        </Col>
        <Col span={24} >
          <div  >
            < NSF_Keyboard
              onChange={setInput}
              keyboardRef={keyboard}
            />
          </div>
        </Col>
        <Col span={24}>
          <a style={{ marginBottom: "10px" }} href="https://github.com/Maple02149/nine-sols-keyboard" target="_blank" rel="github">
            <GithubFilled />
          </a>
        </Col>
      </Row>


    </div >
  )
}

export default App
