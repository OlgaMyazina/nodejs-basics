import {Worker} from 'node:worker_threads'
import path from "node:path";
import {cpus} from 'os'

const PATH_TO_WORKER = 'src/wt/worker.js'
const START_NUMBER = 10
const STATUS_WORKER = {
    RESOLVED: 'resolved', ERROR: 'error'
}

function runService(workerData) {
    return new Promise((resolve, reject) => {
        const pathToWorker = path.resolve(PATH_TO_WORKER)

        const worker = new Worker(pathToWorker, {workerData});
        worker.on('message', (msg) => resolve({status: STATUS_WORKER.RESOLVED, data: msg}));
        worker.on('error', () => reject({status: STATUS_WORKER.ERROR, data: null}));
        worker.on('exit', (code) => {
            if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
        })
    })
}


const performCalculations = async () => {

    const countCPU = cpus()?.length || 0
    const resultArray = []
    for (let i = START_NUMBER; i < countCPU + START_NUMBER; i++) {
        const result = await runService(i)
        resultArray.push(result)
    }
    console.log(resultArray)
};

await performCalculations();