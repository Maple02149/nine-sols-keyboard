import * as fs from "fs"
import { cwd } from "process"
import { } from "../public/cangjieJSON.json"

function getCangjieJSON() {
    const filePath = `${__dirname + "/cangjietxt.txt"}`
    const data = fs.readFileSync(filePath, { encoding: 'utf8' })
    const mapData = data.split("\n").map((row) => {
        const [
            character,
            _,
            __,
            ___,
            ____,
            _____,
            ______,
            _______,
            ________,
            _________,
            __________,
            code,
        ] = row.split(" ")

        // ° NA 0 0 0 0 0 0 0 0 1 yyycg yyycg NA 0
        return {
            character,
            code,
        }
    })
    fs.writeFile("cangjieJSON.json", JSON.stringify(mapData, null, 4), () => { console.log("success") })
}

getCangjieJSON()