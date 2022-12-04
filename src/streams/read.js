import {createReadStream} from 'node:fs'
import {stdout} from 'node:process';

const FILE_PATH = 'src/streams/files/fileToRead.txt'

const read = async () => {
    const readableStream = createReadStream(FILE_PATH, 'utf-8');

    readableStream.on('error', function (error) {
        console.error(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        stdout.write(chunk)
    })
};

await read();