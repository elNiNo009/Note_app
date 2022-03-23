const fs=require('fs')
const chalk=require('chalk')

const getNotes = ()=>
{
    return "Your Notes...."
}

const addNote=(title,body)=>              // add data to file
{
    const notes=loadNotes()    //load existing file
    /*
    const ages = [32, 33, 16, 40];
    const result = ages.filter(checkAdult);
     function checkAdult(age)
       {
          return age >= 18;
       }
    */
    //const duplicates=notes.filter((note)=>note.title === title )

    const duplicate=notes.find((note)=>note.title === title )
    if(!duplicate)
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

const removeNote=(title)=>              //remove data from file
{
    const notes=loadNotes()

    const notesfiltered=notes.filter((note)=>note.title!==title)

   if(notesfiltered.length !== notes.length)
   {
    console.log(chalk.green.inverse("note removed"))
    saveNotes(notesfiltered)
   }

   else
   {
       console.log(chalk.red.inverse("title not avalaible"))
   }

    console.log(chalk.yellow(title))

}

const listNotes=()=>                 //list the data
{
    const notes=loadNotes()

    console.log(chalk.white.bold.inverse("Your Notes"))
    notes.forEach(element => {
        console.log(element.title)
    });
}

const readNote=(title)=>
{
   const notes=loadNotes()
   const notefind=notes.find((note)=>note.title===title)
  
   if(notefind)
   {
    console.log(chalk.green.italic.bold(notefind.title))
    console.log(chalk.blue(notefind.body))
   }
   else
   {
       console.log(chalk.red.bold("title not found"))
   }
}

const saveNotes= (notes) =>        //write final updated data to json file
{
    const finalData=JSON.stringify(notes)
    fs.writeFileSync('notes.json',finalData)
}

const loadNotes=()=>             //read fron json file
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
    getNotes: getNotes,
    listNotes:listNotes,
    removeNote: removeNote,
    readNote:readNote
    
}