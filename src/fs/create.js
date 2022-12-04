import {access, appendFile} from 'node:fs/promises'
import path from 'node:path'

const ERROR_ENOENT = 'ENOENT'
const ERROR_MESSAGE_FOR_FS = 'FS operation failed'
const FILE_PATH = 'src/fs/files/fresh.txt'

const create = async () => {
    const pathToFile = path.resolve(FILE_PATH)
    let isFileFound = false

    try {
        await access(pathToFile);
        throw new Error(ERROR_MESSAGE_FOR_FS)
    } catch (error) {
        isFileFound = error.code !== ERROR_ENOENT
        if (isFileFound) {
            console.error(error.message)
        }
    }
    if (!isFileFound) {
        appendFile(pathToFile, 'I am fresh and young')
    }
};

await create();