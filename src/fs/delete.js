import {access, rm} from 'node:fs/promises'

import path from 'node:path'

const ERROR_MESSAGE_FOR_FS = 'FS operation failed'
const FILE_PATH = 'src/fs/files/fileToRemove.txt'

const remove = async () => {
    const pathToFile = path.resolve(FILE_PATH)

    try {
        await access(pathToFile)
    } catch (error) {
        console.error(ERROR_MESSAGE_FOR_FS)
        return
    }
    try {
        await rm(pathToFile)
    } catch (error) {
        console.error(error)
    }
};

await remove();