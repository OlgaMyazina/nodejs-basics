import {createReadStream, createWriteStream} from "node:fs";
import {createGunzip} from 'node:zlib'

const FILE_INPUT_PATH = 'src/zip/files/archive.gz'
const FILE_OUTPUT_PATH = 'src/zip/files/fileToCompress.txt'


async function unzipFile(input, output) {
    const source = createReadStream(input);
    const destination = createWriteStream(output);
    const unzip = createGunzip();
    await source.pipe(unzip).pipe(destination);
}

const decompress = async () => {

    unzipFile(FILE_INPUT_PATH, FILE_OUTPUT_PATH)
        .catch((err) => {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        });
};

await decompress();