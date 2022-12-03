import {access, cp, mkdir} from 'node:fs/promises'

import path from 'node:path'

const ERROR_ENOENT = 'ENOENT'
const ERROR_MESSAGE_FOR_FS = 'FS operation failed'
const FOLDER_SRC_PATH = 'src/fs/files/'
const FOLDER_DEST_PATH = 'src/fs/files_copy/'

const copy = async () => {
    const pathToSrcFolder = path.resolve(FOLDER_SRC_PATH)
    const pathToDestFolder = path.resolve(FOLDER_DEST_PATH)

    let isFolderDestFound = false
    let isFolderSrcFound = false

    try {
        await access(pathToSrcFolder)
        isFolderSrcFound = true
    } catch (error) {
        console.error(ERROR_MESSAGE_FOR_FS)
        return
    }
    try {
        await access(pathToDestFolder)
        throw new Error(ERROR_MESSAGE_FOR_FS)
    } catch (error) {
        isFolderDestFound = error.code !== ERROR_ENOENT
        if (isFolderDestFound) {
            console.error(error.message)
            return
        }
    }
    try {
        if (isFolderSrcFound && !isFolderDestFound) {
            await mkdir(pathToDestFolder)
            await cp(pathToSrcFolder, pathToDestFolder, {recursive: true})
        }

    } catch (error) {
        console.log(error.message)
    }
};

copy();