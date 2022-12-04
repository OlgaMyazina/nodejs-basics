const PREFIX = '--'

const parseArgs = () => {
    let argvFormatted = ''

    process.argv.forEach((value, index) => {
        const separator = index === 2 ? '' : ', '
        if (index > 1) {
            if (value.startsWith(PREFIX)) {
                argvFormatted += `${separator}${value}`
            } else {
                argvFormatted += ` is ${value}`
            }
        }
    });
    console.log(argvFormatted)
    return argvFormatted
};

parseArgs();