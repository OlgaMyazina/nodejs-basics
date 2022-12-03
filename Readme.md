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

To check `task 6`, you need to execute
```
npm run fs:read
```