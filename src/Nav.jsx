import './App.css'

function Nav(){
  return(
    <>
      <nav>
      <a href="#">Mero Note</a>
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