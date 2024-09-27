//importing module from hello.js
const sayHello= require('./hello')
const {myfisrtModule,sayHello1}=require('./myModule')
const os =require('os')
const path = require('path')
//global variables
 //__dirname,__filename
 console.log(__dirname)
console.log(__filename)

//create my own global variable

global.myVariable ="hello world"
console.log(myVariable)


// modules in node js
//calling another module 
sayHello('anmol')
myfisrtModule()
sayHello1()

//two types of modules
//built in module
//os module
const systemUptime=os.uptime()
const userInfo = os.userInfo()
const otherInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(systemUptime);
console.log(userInfo);
console.log(otherInfo);



// Assigning a path to the myPath variable
const myPath = 'C:/Users/electrovese_int/Desktop/practice/app.js/'

const pathInfo = {
    fileName: path.basename(myPath),
    folderName: path.dirname(myPath),
    fileExtension: path.extname(myPath),
    absoluteOrNot: path.isAbsolute(myPath),
    detailInfo: path.parse(myPath),
}

// Let's See The Results:
console.log(pathInfo);

//external module