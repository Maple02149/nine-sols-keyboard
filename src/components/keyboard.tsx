import { MutableRefObject, useState } from "react"
import Keyboard from "react-simple-keyboard"
import "react-simple-keyboard/build/css/index.css"


interface IProps {
    onChange: (input: string) => void
    keyboardRef: MutableRefObject<any>
}
enum ILayoutName {
    shift = "shift",
    default = "default"
}
enum IBtnStatus {
    shift = "shift",
    default = "default",
    capslock = "capslock"
}
function NSF_Keyboard(porps: IProps) {
    const [layoutName, setLayoutName] = useState<ILayoutName>(ILayoutName.default)
    const [btnStatus, setBtnStatus] = useState<IBtnStatus>(IBtnStatus.default)

    const onKeyPress = (button: string) => {
        switch (button) {
            case "{shiftleft}":
            case "{shiftright}":
            case "{shift}":
                if (btnStatus === IBtnStatus.shift) {
                    setLayoutName(ILayoutName.default)
                    setBtnStatus(IBtnStatus.default)
                } else {
                    setLayoutName(ILayoutName.shift)
                    setBtnStatus(IBtnStatus.shift)
                }

                break
            case "{capslock}":
                btnStatus === IBtnStatus.capslock ? setBtnStatus(IBtnStatus.default) : setBtnStatus(IBtnStatus.capslock)
                if (btnStatus === IBtnStatus.capslock) {
                    setLayoutName(ILayoutName.shift)
                } else {
                    setLayoutName(ILayoutName.default)
                }
                break
            default:
                if (btnStatus === IBtnStatus.shift) {
                    setLayoutName(ILayoutName.default)
                }
                break
        }
    }



    return (
        <>
            <Keyboard
                keyboardRef={r => (porps.keyboardRef.current = r)}
                layoutName={layoutName}
                theme={"simple-keyboard hg-theme-default hg-layout-default"}
                onChange={porps.onChange}
                onKeyPress={onKeyPress}
                physicalKeyboardHighlight={true}
                syncInstanceInputs={true}
                mergeDisplay={true}
                // debug={true} 
                layout={
                    {
                        default: [
                            "{space} 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
                            "q w e r t y u i o p [ ] \\",
                            "{capslock} a s d f g h j k l ; '",
                            "{shiftleft} z x c v b n m , . /",
                        ],
                        shift: [
                            "~ ! @ # $ % ^ & * ( ) _ + {backspace}",
                            "Q W E R T Y U I O P { } |",
                            '{capslock} A S D F G H J K L : "',
                            "{shiftleft} Z X C V B N M < > ?",
                        ]
                    }
                }
                display={
                    {
                        "{space}": "　",
                        "{escape}": "⎋",
                        "{backspace}": "⌫",
                        "{enter}": "↵",
                        "{capslock}": "⇪",
                        "{shiftleft}": "shi⇧",
                        "{shiftright}": "shi⇧",
                        "{controlleft}": "ctrl ⌃",
                        "{controlright}": "ctrl ⌃",
                        "{altleft}": "alt ⌥",
                        "{altright}": "alt ⌥",
                        "{metaleft}": "cmd ⌘",
                        "{metaright}": "cmd ⌘"
                    }
                }
            />
        </>
    )
};
export default NSF_Keyboard
