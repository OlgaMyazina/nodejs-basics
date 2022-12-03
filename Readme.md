# Node.js basics

## Technical requirements

- Any external tools and libraries are prohibited
- Use 18 LTS version of Node.js
- Don't change signature of pre-written functions (e.g. don't rename them, don't make them synchronous, etc.)
- Prefer asynchronous API whenever possible

## lesson 1

### task 1
`create.js` - implement function that creates new file fresh.txt with content `I am fresh and young` inside of the files folder (if file already exists Error with message FS operation failed must be thrown)

#### How to check

To check task 1, you need to execute
```
npm run fs:create
```
If you run again, you will get an error

