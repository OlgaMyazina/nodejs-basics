import { spawn } from 'node:child_process'
import {stdin, stdout, execPath} from 'node:process'
import {resolve} from 'node:path'

const PATH_TO_FILE = 'src/cp/files/script.js'

const spawnChildProcess = async (...args) => {
    console.log({args})
    const pathToScript = resolve(PATH_TO_FILE)
    const childProcess = spawn(execPath, [pathToScript, ...args]);
    stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(stdout);

};

await spawnChildProcess('elem1', 'elem2');

