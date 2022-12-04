# Node.js basics

## Technical requirements

- Any external tools and libraries are prohibited
- Use 18 LTS version of Node.js
- Don't change signature of pre-written functions (e.g. don't rename them, don't make them synchronous, etc.)
- Prefer asynchronous API whenever possible

## Node.js basics

### File system

---

### task 1
`create.js` - implement function that creates new file `fresh.txt` with content `I am fresh and young` inside of the files folder (if file already exists `Error` with message `FS operation failed` must be thrown)

#### How to check

To check `task 1`, you need to execute
```
npm run fs:create
```
If you run again, you will get an error

### task 2
`copy.js` - implement function that copies folder `files` files with all its content into folder `files_copy` at the same level (if files folder doesn't exists or `files_copy` has already been created `Error` with message `FS operation failed` must be thrown)

#### How to check

To check `task 2`, you need to execute
```
npm run fs:copy
```
If you run again, you will get an error

### task 3
`rename.js` - implement function that renames file `wrongFilename.txt` to `properFilename` with extension `.md` (if there's no file `wrongFilename.txt` or `properFilename.md` already exists `Error` with message `FS operation failed` must be thrown)

#### How to check

To check `task 3`, you need to execute
```
npm run fs:rename
```
If you run again, you will get an error

### task 4

`delete.js` - implement function that deletes file `fileToRemove.txt` (if there's no file `fileToRemove.txt` `Error` with message `FS operation failed` must be thrown)

#### How to check

To check `task 4`, you need to execute
```
npm run fs:delete
```
If you run again, you will get an error

### task 5

`list.js` - implement function that prints all array of filenames from `files` folder into console (if `files` folder doesn't exists `Error` with message `FS operation failed` must be thrown)

#### How to check

To check `task 5`, you need to execute
```
npm run fs:list
```

### task 6

`read.js` - implement function that prints content of the `fileToRead.txt` into console (if there's no file `fileToRead.txt` `Error` with message `FS operation failed` must be thrown)

#### How to check

To check `task 6`, you need to execute
```
npm run fs:read
```

### Command line interface

---

### task 7
`env.js` - implement function that parses environment variables with prefix `RSS_` and prints them to the console in the format `RSS_name1=value1; RSS_name2=value2`

#### How to check

To check `task 7`, you need to execute
```
npm run cli:env
```

### task 8
`args.js` - implement function that parses command line arguments (given in format `--propName value --prop2Name value2`, you don't need to validate it) and prints them to the console in the format `propName is value, prop2Name is value2`

#### How to check

To check `task 8`, you need to execute
```
npm run cli:args
```


### Modules

---

### task 9

`cjsToEsm.cjs` - rewrite it to it's equivalent in ECMAScript notation (and rename it to `esm.mjs`)

#### How to check

To check `task 9`, you need to execute
```
npm run modules
```

### Hash

---

### task 10

`calcHash.js` - implement function that calculates `SHA256` hash for file `fileToCalculateHashFor.txt` and logs it into console as `hex`

#### How to check

To check `task 10`, you need to execute
```
npm run hash
```

### Streams

---

### task 11

`read.js` - implement function that reads file `fileToRead.txt` content using Readable Stream and prints it's content into `process.stdout`

#### How to check

To check `task 11`, you need to execute
```
npm run streams:read
```

### task 12

`write.js` - implement function that writes `process.stdin` data into file `fileToWrite.txt` content using Writable Stream

#### How to check

To check `task 12`, you need to execute

```
npm run streams:write
```

Write text to console. Check this text in file `files/fileToWrite.txt`.

### task 13

`transform.js` - implement function that reads data from `process.stdin`, reverses text using Transform Stream and then writes it into `process.stdout`

#### How to check

To check `task 13`, you need to execute

```
npm run streams:transform
```
Write text to console. You can read reverses text