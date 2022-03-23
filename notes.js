const fs=require('fs')
const chalk=require('chalk')

const getNotes =function()
{
    return "Your Notes...."
}

const addNote=function(title,body) // add data to file
{
    const notes=loadNotes()    //load existing file
    const duplicates=notes.filter(function(note)
    {
        return note.title === title
    }
    )
    if(duplicates.length===0)
    {
    notes.push(                 //add data to file
        {
            title: title,
            body: body
        }
       
    )
    saveNotes(notes)   //save the modified file
    console.log(chalk.green("new note added"))
    }
    else
    {
        console.log(chalk.red("duplcate title"))
    }

   
}
const saveNotes=function(notes) //write final updated data to json file
{
    const finalData=JSON.stringify(notes)
    fs.writeFileSync('notes.json',finalData)
}


const loadNotes=function()  //read fron json file
{
    try
    {
       
     // console.log("check")
     
      const noteBuffer=fs.readFileSync('notes.json')
      const noteJSON=noteBuffer.toString()
      //console.log(noteBuffer)
      return JSON.parse(noteJSON)
    }
    catch(e) //if no file exist create new array (converted to json file)
    {
       // console.log("no file exist")
       
        return []
    }
}

module.exports={
    addNote: addNote, 
    getNotes: getNotes

}