import React, {useState} from 'react';

function Note(){
  let [note, setNote] = useState([]);

  let addNotePopUp = () =>{
    document.querySelector('.add-note').style.display = 'flex';
    document.querySelector('.main2').style.filter = 'blur(5px)';
  }

  let cancelNote = () =>{
    document.querySelector('.add-note').style.display = 'none';
    document.querySelector('.main2').style.filter = 'blur(0px)';
    document.querySelector('.note-title').value = '';
    document.querySelector('.note-content').value = '';
  }

  function formatTime(time){
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let date = time.getDate();
    date = date < 10 ? '0'+ date : date;
    return (year + '/' + month + '/' + date);
  }

  let addNote = () =>{
    document.querySelector('.add-note').style.display = 'none';
    document.querySelector('.main2').style.filter = 'blur(0px)';
    let noteTitle = document.querySelector('.note-title').value;
    let noteContent = document.querySelector('.note-content').value;
    let noteAddTime = new Date;
    noteAddTime = formatTime(noteAddTime);
    let contentObj = {
      title: noteTitle,
      content: noteContent,
      time: noteAddTime,
    };
    setNote(n => [...n, contentObj]);
    document.querySelector('.note-title').value = '';
    document.querySelector('.note-content').value = '';
  }

  let noteList = note.map((e,i) =>{
    return(
      <div className='card' key={i}>
        <div>Tile: {e.title}</div>
        <div>Content: {e.content}</div>
        <div>Time : {e.time}</div>
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
          <div className='cards'>
            {noteList}
          </div>
        </div>
      </div>
    </>
   );
}
export default Note;