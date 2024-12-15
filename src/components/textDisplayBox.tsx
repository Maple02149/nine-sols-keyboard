import { Splitter } from "antd"
import Typography from "antd/es/typography"
import { IDBCangjie, IDBColumnNmae } from "../models/indexDB"

interface IProps {
    isDBReady: boolean
    input: string
    input_zh: IDBCangjie[]
}
function TextDisplayBox(props: IProps) {

    const {
        isDBReady,
        input_zh,
        input
    } = props

    return (
        <>
            <Splitter style={{
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                overflow: "hidden",
                height: "30px"
            }}>
                <Splitter.Panel style={{
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "row-reverse"
                }} >
                    <Typography.Paragraph keyboard
                        ellipsis={{ rows: 1, }}
                        copyable={{ tooltips: false }}
                        style={
                            {
                                textAlign: "right",
                                width: "350px",
                                fontSize: "20px",
                                marginBottom: "-5px"
                            }
                        }
                    >
                        {
                            input_zh.length <= 0 ? "🔎🔄" : input_zh.map((i) => { return i[IDBColumnNmae.Character] }).join(",")
                        }
                    </Typography.Paragraph>

                </Splitter.Panel>
                <Splitter.Panel style={{
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "row"
                }} >
                    <Typography.Paragraph keyboard
                        ellipsis={{ rows: 1, }}
                        copyable={{ tooltips: false }}
                        style={
                            {
                                textAlign: "left",
                                width: "350px",
                                fontSize: "20px",
                                marginBottom: "-5px"
                            }
                        }
                    >
                        {input.length <= 0 ? "⌨️" : input}
                    </Typography.Paragraph>

                </Splitter.Panel>
            </Splitter>


        </>
    )
}



export default TextDisplayBox
