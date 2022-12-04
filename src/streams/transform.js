import {stdin, stdout} from 'node:process'

const transform = async () => {
    stdin.on("data", data => {
        const reversedData = data.toString().split('').reverse().join('')
        stdout.write(reversedData + "\n")
    })
};

await transform();