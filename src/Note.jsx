import React, {useState} from 'react';

function Note(){
  let [note, setNote] = useState([]);
  let [view, setView] = useState(
    <h1 className='empty-container'>
      Click on the notes to display here!
    </h1>
  );
  let title = '';
  let content = '';

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
    let d = true;
    let noteTitle = document.querySelector('.note-title').value;
    let noteContent = document.querySelector('.note-content').value;
    if(noteContent === ''){
      alert('Content cannot be empty!');
      return;
    }
    if(noteTitle === ''){
      noteTitle = 'Title not Defined!';
      d = false;
    }
    document.querySelector('.add-note').style.display = 'none';
    document.querySelector('.main2').style.filter = 'blur(0px)';
    let noteAddTime = new Date;
    noteAddTime = formatTime(noteAddTime);
    let contentObj = {
      title: noteTitle,
      content: noteContent,
      time: noteAddTime,
      titleDefined: d,
    };
    setNote(n => [...n, contentObj]);
    document.querySelector('.note-title').value = '';
    document.querySelector('.note-content').value = '';
  }

  let editNote = () =>{
    document.querySelector(`.edit-button`).style.display = 'none';
    document.querySelector(`.save-button`).style.display = 'block';
    document.querySelector(`.title-text`).readOnly = false;
    document.querySelector(`.content-text`).readOnly = false;
  }

  let saveNote = (index) =>{
    let newNote = [...note];
    newNote[index].title = document.querySelector('.title-text').value;
    newNote[index].content = document.querySelector('.content-text').value;
    if(newNote[index].title === ''){
      newNote[index].title = 'Title not Defined!';
      newNote[index].titleDefined = false;
    }
    else{
      newNote[index].titleDefined = true;
    }
    if(newNote[index].content === ''){
      alert('Content cannot be empty!');
      return;
    }
    setNote(newNote);
    document.querySelector(`.edit-button`).style.display = 'block';
    document.querySelector(`.save-button`).style.display = 'none';
    document.querySelector(`.title-text`).readOnly = true;
    document.querySelector(`.content-text`).readOnly = true;
  }

  let deleteNote = (index) =>{
    let newNote = note.filter((_,i)=> i!==index);
    setNote(newNote);
    setView(<h1 className='empty-container'>
      Click on the notes to display here!
    </h1>);
  }

  let changeTitle = (e,index) =>{
    title = e.target.value;
    console.log(title);
    viewCard(index);
  }

  let changeContent = (e,index) =>{
    content = e.target.value;
    viewCard(index);
  }


  let editTime = 0;
  let viewCard = (index) =>{
    if(editTime === 0){
      title = note[index].title;
      content = note[index].content;
      editTime = 1;
    }
    setView(<div className='main2-card'>
      <div className='main2-card-title'>
        <span>
          Title:
        </span>
        <input type="text" onChange={(e) => changeTitle(e,index)} value={title} className='title-text' readOnly/>
      </div>
      <div className='main2-card-content'>
        <span>
          Content:
        </span>
        <textarea onChange={(e) => changeContent(e,index)} className='content-text' value={content} readOnly></textarea>
      </div>
      <div className="view-buttons-container">
        <button onClick={editNote} className='edit-button'>Edit</button>
        <button onClick={()=> saveNote(index)} className='save-button'>Save</button>
        <button onClick={()=> deleteNote(index)} className='delete-button'>Delete</button>
      </div>
    </div>);
  }

  let noteList;
  if(note.length>0){
    noteList = note.map((e,i) =>{
      return(
        <div key={i} onClick={() => viewCard(i)} className={`card card${i}`}>
          <div className={`title title${i}`}><span>TITLE: </span><p className={e.titleDefined? 'title-white' : 'title-red'}>{e.title}</p></div>
          <div className={`content content${i}`}><span>Content: </span> <p>  {e.content}
            </p></div>
          <div className={`time time${i}`}>Date : {e.time}</div>
        </div>
      );
    })
  }
  else{
    noteList = <h1 className='empty-note'>Enter notes to display here...</h1>;
  }

   return (
    <>
      <div className='add-note'>
        <div className='note-title-holder'>
          <label htmlFor="note-title">Title:</label>
          <input className='note-title' id='note-title' type="text" placeholder="Enter the title..."/>
        </div>
        <textarea className='note-content' placeholder="Enter your note.."></textarea>
        <div className='add-note-buttons'>
          <button onClick={addNote} className='add'>Add</button>
          <button onClick={cancelNote}  className='cancel'>Cancel</button>
        </div>
      </div>
      <div className='main-body'>
        <div className='main1'>
          <button onClick={addNotePopUp}>Add Note</button>
          <div className='cards'>
            <div className='cards-title'>
              Notes:
            </div>
            <div className='cards-holder'>
              {noteList}
            </div>
          </div>
        </div>
        <div className='main2'>
          {view}
        </div>
      </div>
    </>
   );
}
export default Note;