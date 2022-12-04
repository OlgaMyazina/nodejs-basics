import {createWriteStream} from 'node:fs'
import {exit, stdin} from 'node:process';

const FILE_PATH = 'src/streams/files/fileToWrite.txt'

const write = async () => {
    const file = createWriteStream(FILE_PATH, {encoding: 'utf-8', autoClose: true});

    stdin.on('data', (data) => {
        file.write(data.toString())
        exit(1)
        file.close()
        file.end()
    })
};

await write();