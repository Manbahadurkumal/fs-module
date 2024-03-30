// const fs = require("fs")
// const listBooks = require("./data");
// const filename = "./books.json"
// const fileOpenHandler = (err, fd) =>{
//     if (err){
//         console.log("Error Opening file...")
//     }else{
//         const str = JSON.stringify(listBooks)
//         fs.write(fd, str, (error, noBytes)=>{
//             if(error){
//                 console.log("Error while writting in file")
//             }else{
//                 console.log(noBytes + "bytes written")
//             }
//         })
//         fs.close(fd)
//     }
// }
// fs.open(filename, "w", fileOpenHandler)

const fs = require("fs")   //import form node js to use fileSystem
const listBooks = require("./data")  // import from data.js
const filename = "./books.json"
const str =JSON.stringify(listBooks)   //to conver into string
fs.writeFileSync(filename, str);        // to write a file
let readContent = fs.readFileSync(filename, {       // to read a file
    encoding:"utf8"                     //to change buffer intostring
});
readContent = JSON.parse(readContent)   // to conver string into array data
// console.log(readContent)
 let path = "./uploads/file/test";
//  console.log(fs.existsSync(path))
if(!fs.existsSync(path)){
    fs.mkdirSync(path, {
        recursive: true
    })
}
console.log(fs.existsSync(path))
// fs.unlinkSync(filename)
