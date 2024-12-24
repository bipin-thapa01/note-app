import './App.css'

function Nav(){
  const backMainOne = ()=>{
    document.querySelector('.main1').style.display = 'block';
    document.querySelector('.main2').style.display = 'none';
    document.querySelector('.arrow-left').style.display = 'none';
  }

  return(
    <>
      <nav>
      <div className='nav-control'>
        <i onClick={backMainOne} className='arrow-left fa-solid fa-arrow-left'></i>
        <a href="#">Mero Note</a>
      </div>
      <div className='nav-button-holder'>
        <button className="nav-button">
          <i className="fa-solid fa-ellipsis"></i> 
        </button>
        <div className="nav-button-option">
          Login features are to be added soon  
        </div> 
      </div>
      </nav>
    </>
  );
}
export default Nav;