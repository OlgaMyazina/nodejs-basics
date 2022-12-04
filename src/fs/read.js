import {access, readFile} from 'node:fs/promises'

import path from 'node:path'

const ERROR_MESSAGE_FOR_FS = 'FS operation failed'
const FILE_PATH = 'src/fs/files/fileToRead.txt'
const FILE_ENCODING = 'UTF-8'

const read = async () => {
    const pathToFile = path.resolve(FILE_PATH)

    try {
        await access(pathToFile)
    } catch (error) {
        console.error(ERROR_MESSAGE_FOR_FS)
        return
    }
    try {
        const file = await readFile(pathToFile, {encoding: FILE_ENCODING})
        console.log(file)
    } catch (error) {
        console.error(error)
    }
};

await read();