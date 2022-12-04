import {createReadStream, createWriteStream} from 'node:fs'
import {pipeline} from 'node:stream'
import {promisify} from 'node:util'
import {createGzip} from 'node:zlib'

const FILE_INPUT_PATH = 'src/zip/files/fileToCompress.txt'
const FILE_OUTPUT_PATH = 'src/zip/files/archive.gz'

const pipe = promisify(pipeline);

async function gzip(input, output) {
    const gzip = createGzip();
    const source = createReadStream(input);
    const destination = createWriteStream(output);
    await pipe(source, gzip, destination);
}

const compress = async () => {
    gzip(FILE_INPUT_PATH, FILE_OUTPUT_PATH)
        .catch((err) => {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        });
};

await compress();