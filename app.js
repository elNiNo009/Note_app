
const validator=require('validator')
const chalk=require('chalk')
const yargs=require('yargs')

//const fname =require('./util.js')

const notes= require('./notes.js')


const fs=require('fs')

yargs.version('1.1.0')

//const sum=add(4,-2)
//fs.copyFileSync
// fs.writeFileSync('notes.txt','Hello sarthak!')
// fs.appendFileSync('notes.txt'," ++  I am done with the task")

console.log(chalk.yellow.bold("Hello Sarthak"))

//console.log(process.argv)

yargs.command({                             //add
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
    handler(argv)
    {
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({                            //list
    command:'list',
    describe:'lsit the notes',
    handler()
    {
        notes.listNotes()
    }
})
yargs.command({                              //remove
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv)
    {
        console.log("inside remove")
        notes.removeNote(argv.title)
    }
})
yargs.command({                             //read
    command:'read',
    describe:'read the notes',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv)
    {
        notes.readNote(argv.title)
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