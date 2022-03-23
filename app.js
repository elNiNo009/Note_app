
const validator=require('validator')
const chalk=require('chalk')
const yargs=require('yargs')

const fname =require('./util.js')
const notes= require('./notes.js')


const fs=require('fs')

yargs.version('1.1.0')

//const sum=add(4,-2)
//fs.copyFileSync

// fs.writeFileSync('notes.txt','Hello sarthak!')

// fs.appendFileSync('notes.txt'," ++  I am done with the task")

console.log(chalk.red.bold("sarthak"))

//console.log(process.argv)
yargs.command({
    command:'add',
    describe:'add the notes',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note content',
            demandOption:true,
            type:'string'
        }

    },
    handler: function(argv)
    {
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command:'list',
    describe:'lsit the notes',
    handler: function()
    {
        console.log('lsiting notes')
    }
})
yargs.command({
    command:'read',
    describe:'read the notes',
    handler: function()
    {
        console.log('reading notes')
    }
})
yargs.parse()

 // console.log(yargs.argv)

/*console.log(fname)
console.log(sum)

const msg=require('./notes.js')
const mess=msg()
console.log(mess)
*/

//console.log(validator.isEmail('sarthak.chauhan@gmail.com'))