import {access, readFile} from 'node:fs/promises'
import crypto from 'node:crypto'

import path from 'node:path'

const ERROR_MESSAGE_FOR_FS = 'FS operation failed'
const FILE_PATH = 'src/hash/files/fileToCalculateHashFor.txt'
const HASH_ENCODING = 'sha256'
const HEX = 'hex'


const calculateHash = async () => {
    const pathToFile = path.resolve(FILE_PATH)

    try {
        await access(pathToFile)
    } catch (error) {
        console.error(ERROR_MESSAGE_FOR_FS)
        return
    }
    try {
        const file = await readFile(pathToFile)
        const hashSum = crypto.createHash(HASH_ENCODING);
        hashSum.update(file);
        const hex = hashSum.digest(HEX);
        console.log(hex);
    } catch (error) {
        console.error(error)
    }
};

await calculateHash();