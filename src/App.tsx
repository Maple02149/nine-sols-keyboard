import { Button, Flex, Input, Space, Typography } from "antd"
import { useEffect, useRef, useState } from 'react'
import './App.css'
import NSF_Keyboard from "./components/keyboard"
import { decodeCangjie } from "./models"

function App() {
  const [input, setInput] = useState<string>("")
  const [zh, setZh] = useState<string | undefined>(undefined)
  const keyboard = useRef<any>(null)

  useEffect(() => {

    const f = decodeCangjie.encode(input)
    if (f) { setZh(input) }

  }, [input])

  return (
    <>


      <Flex
        gap="3vh"
        wrap={"wrap"}
        justify={"space-around"}
        align={"center"}
        vertical={true}
      >
        <Typography   
          style={
            {
              display:"none",
              fontSize: "35px"
            }
          }
        >
          {zh}
        </Typography>
        <Typography.Text keyboard
          copyable={{ tooltips: false }}
          style={
            {
              color:"white",
              fontSize: "35px"
            }
          }
        >
          {input.length <= 0 ? "plaze enter" : input}
        </Typography.Text>

        <Space
          direction="horizontal"
        >
          <Input.TextArea
            placeholder=""
            //autoSize={{ minRows: 1 }} 
            value={input}
            autoSize
          ></Input.TextArea>
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


        < NSF_Keyboard
          onChange={setInput}
          keyboardRef={keyboard}
        />

      </Flex >


    </>
  )
}

export default App
