import {access, readdir} from 'node:fs/promises'

import path from 'node:path'

const ERROR_MESSAGE_FOR_FS = 'FS operation failed'
const FOLDER_PATH = 'src/fs/files'

const list = async () => {
    const pathToFolder = path.resolve(FOLDER_PATH)

    try {
        await access(pathToFolder)
    } catch (error) {
        console.error(ERROR_MESSAGE_FOR_FS)
        return
    }
    const files = await readdir(pathToFolder)
    console.log(files)
};

await list();