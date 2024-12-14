import { Button, Col, Input, Row, Space, Typography } from "antd"
import { useEffect, useRef, useState } from 'react'
import './App.css'
import NSF_Keyboard from "./components/keyboard"
import { initDB, findCharacter, IDBCangjie, IDBColumnNmae } from "./models/indexDB"

function App() {
  const [input, setInput] = useState<string>("")
  const [zh, setZh] = useState<IDBCangjie[]>([])
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

    findCharacter(input.toLocaleLowerCase()).then((d) => {
      setZh(d)
    }).catch()

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
          <Typography.Paragraph keyboard
            ellipsis={{ rows: 1, }}
            copyable={{ tooltips: false }}
            style={
              {
                textAlign: "center",
                width: "350px",
                fontSize: "35px",
                marginBottom: "-5px"
              }
            }
          >
            {input.length <= 0 ? "please enter" : input}
          </Typography.Paragraph>
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
        {/* <Col span={24} >
          <Typography.Text
            style={undefined}
          // ellipsis={{tooltip:''  }}
          >
            {zh.map((z) => {
              return z[IDBColumnNmae.Character]
            }).join(",")}
          </Typography.Text>
        </Col> */}
      </Row>
    </div>
  )
}

export default App
