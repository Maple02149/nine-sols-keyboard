import { MutableRefObject, useState } from "react"
import Keyboard from "react-simple-keyboard"
import "react-simple-keyboard/build/css/index.css"


interface IProps {
    onChange: (input: string) => void
    keyboardRef: MutableRefObject<any>
}
function NSF_Keyboard(porps: IProps) {
    const [layoutName, setLayoutName] = useState("default")

    const onKeyPress = (button: string) => {
        if (button === "{capslock}" || button === "{shiftleft}"|| button === "{shiftright}") {
            setLayoutName(layoutName === "default" ? "shift" : "default")
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
                            "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
                            "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
                            "{tab} q w e r t y u i o p [ ] \\",
                            "{capslock} a s d f g h j k l ; ' {enter}",
                            "{shiftleft} z x c v b n m , . / {shiftright}",
                            "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}"
                        ],
                        shift: [
                            "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
                            "~ ! @ # $ % ^ & * ( ) _ + {backspace}",
                            "{tab} Q W E R T Y U I O P { } |",
                            '{capslock} A S D F G H J K L : " {enter}',
                            "{shiftleft} Z X C V B N M < > ? {shiftright}",
                            "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}"
                        ]
                    }
                }
                display={
                    {
                        "{escape}": "esc ⎋",
                        "{tab}": "tab ⇥",
                        "{backspace}": "backspace ⌫",
                        "{enter}": "enter ↵",
                        "{capslock}": "caps lock ⇪",
                        "{shiftleft}": "shift ⇧",
                        "{shiftright}": "shift ⇧",
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
