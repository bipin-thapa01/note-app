import React, {useState} from 'react';

function Note(){
  let [note, setNote] = useState([]);

  let addNotePopUp = () =>{
    document.querySelector('.add-note').style.display = 'flex';
    document.querySelector('.main2').style.filter = 'blur(5px)';
  }

  let cancelNote = () =>{
    document.querySelector('.add-note').style.display = 'none';
  }

  let addNote = () =>{
    document.querySelector('.add-note').style.display = 'none';
    document.querySelector('.main2').style.filter = 'blur(0px)';
    let noteTitle = document.querySelector('.note-title').value;
    let noteContent = document.querySelector('.note-content').value;
    let contentObj = {
      title: noteTitle,
      content: noteContent
    };
    setNote(n => [...n, contentObj]);
  }

  let noteList = note.map((e) =>{
    return(
      <div>
        <div>Tile: {e.title}</div>
        <div>Content: {e.content}</div>
      </div>
    );
  })

   return (
    <>
      <div className='add-note'>
        <input className='note-title' type="text" placeholder="Enter the title..."/>
        <textarea className='note-content' placeholder="Enter your note.."></textarea>
        <div className='add-note-buttons'>
          <button onClick={addNote} className='add'>Add</button>
          <button onClick={cancelNote}  className='cancel'>Cancel</button>
        </div>
      </div>
      <div className='main-body'>
        <div className='main1'>
          <button onClick={addNotePopUp}>Add Note</button>
        </div>
        <div className='main2'>
          {noteList}
        </div>
      </div>
    </>
   );
}
export default Note;