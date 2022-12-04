# Node.js basics

## Technical requirements

- Any external tools and libraries are prohibited
- Use 18 LTS version of Node.js
- Don't change signature of pre-written functions (e.g. don't rename them, don't make them synchronous, etc.)
- Prefer asynchronous API whenever possible

## Node.js basics

### File system

---

### fs/create
`create.js` - implement function that creates new file `fresh.txt` with content `I am fresh and young` inside of the files folder (if file already exists `Error` with message `FS operation failed` must be thrown)

#### How to check

To check `fs/create`, you need to execute
```
npm run fs:create
```
If you run again, you will get an error

### fs/copy
`copy.js` - implement function that copies folder `files` files with all its content into folder `files_copy` at the same level (if files folder doesn't exists or `files_copy` has already been created `Error` with message `FS operation failed` must be thrown)

#### How to check

To check `fs/copy`, you need to execute
```
npm run fs:copy
```
If you run again, you will get an error

### fs/rename
`rename.js` - implement function that renames file `wrongFilename.txt` to `properFilename` with extension `.md` (if there's no file `wrongFilename.txt` or `properFilename.md` already exists `Error` with message `FS operation failed` must be thrown)

#### How to check

To check `fs/rename`, you need to execute
```
npm run fs:rename
```
If you run again, you will get an error

### fs/delete

`delete.js` - implement function that deletes file `fileToRemove.txt` (if there's no file `fileToRemove.txt` `Error` with message `FS operation failed` must be thrown)

#### How to check

To check `fs/delete`, you need to execute
```
npm run fs:delete
```
If you run again, you will get an error

### fs/list

`list.js` - implement function that prints all array of filenames from `files` folder into console (if `files` folder doesn't exists `Error` with message `FS operation failed` must be thrown)

#### How to check

To check `fs/list`, you need to execute
```
npm run fs:list
```

### fs/read

`read.js` - implement function that prints content of the `fileToRead.txt` into console (if there's no file `fileToRead.txt` `Error` with message `FS operation failed` must be thrown)

#### How to check

To check `fs/read`, you need to execute
```
npm run fs:read
```

### Command line interface

---

### cli/env
`env.js` - implement function that parses environment variables with prefix `RSS_` and prints them to the console in the format `RSS_name1=value1; RSS_name2=value2`

#### How to check

To check `cli/env`, you need to execute
```
npm run cli:env
```

### cli/args
`args.js` - implement function that parses command line arguments (given in format `--propName value --prop2Name value2`, you don't need to validate it) and prints them to the console in the format `propName is value, prop2Name is value2`

#### How to check

To check `cli/args`, you need to execute
```
npm run cli:args
```


### Modules

---

### modules

`cjsToEsm.cjs` - rewrite it to it's equivalent in ECMAScript notation (and rename it to `esm.mjs`)

#### How to check

To check `modules`, you need to execute
```
npm run modules
```

### Hash

---

### hash

`calcHash.js` - implement function that calculates `SHA256` hash for file `fileToCalculateHashFor.txt` and logs it into console as `hex`

#### How to check

To check `hash`, you need to execute
```
npm run hash
```

### Streams

---

### streams/read

`read.js` - implement function that reads file `fileToRead.txt` content using Readable Stream and prints it's content into `process.stdout`

#### How to check

To check `streams/read`, you need to execute
```
npm run streams:read
```

### streams/write

`write.js` - implement function that writes `process.stdin` data into file `fileToWrite.txt` content using Writable Stream

#### How to check

To check `streams/write`, you need to execute

```
npm run streams:write
```

Write text to console. Check this text in file `files/fileToWrite.txt`.

### streams/transform

`transform.js` - implement function that reads data from `process.stdin`, reverses text using Transform Stream and then writes it into `process.stdout`

#### How to check

To check `streams/transform`, you need to execute

```
npm run streams:transform
```
Write text to console. You can read reverses text

### Zlib

---

### zlib/compress

`compress.js` - implement function that compresses file `fileToCompress.txt` to `archive.gz` using zlib and Streams API

#### How to check

To check `zlib/compress`, you need to execute

```
npm run zlib:compress
```
Check if the archive `archive.gz` exists

### zlib/decompress

`decompress.js` - implement function that decompresses `archive.gz` back to the `fileToCompress.txt` with same content as before compression using zlib and Streams API

#### How to check

To check `zlib/decompress`, you need created `archive.gz` (You can run `npm run zlib:compress`)  and execute

```
npm run zlib:decompress
```
Check if the file `fileToCompress.txt` exists

### Worker Threads

---

### wt

`worker.js` - extend given function to work with data received from main thread and implement function which sends result of the computation to the main thread

`main.js` - implement function that creates number of worker threads (equal to the number of host machine logical CPU cores) from file `worker.js` and able to send data to those threads and to receive result of the computation from them. You should send incremental number starting from `10` to each worker. For example: on host machine with 4 cores you should create 4 workers and send 10 to first worker, 11 to second worker, 12 to third worker, 13 to fourth worker. After all workers will finish, function should log array of results into console. The results are array of objects with 2 properties:
`status` - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
`data` - value from worker in case of success or null in case of error in worker
#### How to check

To check `wt`, you need to execute

```
npm run wt
```

### Child Processes

---

### cp

`cp.js` - implement function `spawnChildProcess` that receives array of arguments args and creates child process from file `script.js`, passing these args to it. This function should create IPC-channel between stdin and stdout of master process and child process:
- child process `stdin` should receive input from master process `stdin`
- child process `stdout` should send data to master process `stdout`

#### How to check

To check `cp` to execute

```
npm run cp
```
