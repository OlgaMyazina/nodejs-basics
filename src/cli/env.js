const PREFIX = 'RSS_'

const parseEnv = () => {
    const rssSetConstants = []
    Object.entries(process.env).forEach(([key,value])=>{
        if (key.startsWith(PREFIX)) {
            rssSetConstants.push(`${key}=${value}`)
        }
    })

    console.log(rssSetConstants.join('; '))
};

parseEnv();