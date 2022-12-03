import {access, rename as renameFunction} from 'node:fs/promises'

import path from 'node:path'

const ERROR_ENOENT = 'ENOENT'
const ERROR_MESSAGE_FOR_FS = 'FS operation failed'
const FILE_OLD_PATH = 'src/fs/files/wrongFilename.txt'
const FILE_NEW_PATH = 'src/fs/files/properFilename.md'

const rename = async () => {
    let isFileOldFound = false
    let isFileNewFound = false

    const pathToOldFile = path.resolve(FILE_OLD_PATH)
    const pathToNewFile = path.resolve(FILE_NEW_PATH)

    try {
        await access(pathToOldFile)
        isFileOldFound = true
    } catch (error) {
        console.error(ERROR_MESSAGE_FOR_FS)
        return
    }
    try {
        await access(pathToNewFile)
        throw new Error(ERROR_MESSAGE_FOR_FS)
    } catch (error) {
        isFileNewFound = error.code !== ERROR_ENOENT
        if (isFileNewFound) {
            console.error(error.message)
            return
        }
    }
    try {
        if (isFileOldFound && !isFileNewFound) {
            await renameFunction(pathToOldFile, pathToNewFile)
        }
    } catch (error) {
        console.log(error)
    }

};

await rename();