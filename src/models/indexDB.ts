
import { promises } from "dns"
import { cl, errorLog } from "../helper"



export enum IDBColumnNmae {
    ID = "id",
    Character = "character",
    Code = "code",
}
export interface IDBCangjie {
    [IDBColumnNmae.ID]: number,
    [IDBColumnNmae.Character]: string,
    [IDBColumnNmae.Code]: string
}
const tableName = "cangjie"
let db: IDBDatabase | undefined = undefined
let version = 1

const initDB = (): Promise<boolean> => {
    return new Promise((resolve) => {
        const openDB = window.indexedDB.open("cangjieData", version)

        openDB.onupgradeneeded = function () {
            cl("DB.name", "Upgrading...")
            db = openDB.result

            const initTable = new Promise((resolve) => {
                try {
                    const hasTable = db.objectStoreNames.contains(tableName)
                    if (!hasTable) {
                        const table = db.createObjectStore(tableName, { keyPath: IDBColumnNmae.ID, autoIncrement: true })
                        table.createIndex(IDBColumnNmae.Code, IDBColumnNmae.Code, { unique: false })
                        table.createIndex(IDBColumnNmae.Character, IDBColumnNmae.Character, { unique: false })
                    }
                    resolve(true)
                } catch (err) {
                    resolve(false)
                }
            })

            const initData = fetch(import.meta.env.BASE_URL + "cangjieJSON.json")
                .then(res => res.json())
                .then(data => {
                    const transaction = db.transaction([tableName], 'readwrite')
                    const store = transaction.objectStore(tableName)

                    for (let d of data) {
                        store.put({ character: d.character, code: d.code })
                    }

                    return new Promise((resolve) => {
                        transaction.oncomplete = () => {
                            resolve(true)
                        }

                        transaction.onerror = (err) => {
                            errorLog("initData", err)
                            resolve(false)
                        }
                    })
                })

            initTable.then(() => {
                return initData
            }).then(() => {
                resolve(true)
            }).catch((err) => {
                errorLog("initDB", err)
                resolve(false)
            })
        }

        openDB.onsuccess = function (e: any) {
            db = openDB.result
            version = db.version ?? 0
            cl("DB.name", "DB open Success!", { version: version })
            resolve(true)
        }

        openDB.onerror = function (e: any) {
            db = undefined
            alert("not allow to use IndexedDB")
            errorLog("initDB", e)
            resolve(false)
        }
    })
}
const findCharacter: (code: string) => Promise<IDBCangjie[]> = (code: string) => {
    return new Promise((resolve) => {
        const trx = db.transaction(tableName, "readonly")
        const find = trx.objectStore(tableName).index(IDBColumnNmae.Code).getAll(code)
        find.onsuccess = (e: any) => {
            resolve(e.target.result ?? [])
        }
        find.onerror = (err) => {
            errorLog(findCharacter.name, err)
        }

    })
}
export {   findCharacter, initDB }
