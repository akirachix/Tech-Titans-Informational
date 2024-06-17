import './index.css'

function Homepage(){
    return(
      <div>
        <div className="nav-container">
          <div className="nav-logo">
            <img src="Image/blue.png" alt="Logo"/>
          </div>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Roadmap</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contacts</a></li>
        </div>
        <div className="cta">
        <p className='ctawords'> “Join the UpCycleIt and turn Used clothes <br></br>  into
 treasure with our gamified app.”
 <button>Join Now</button>
</p>

  <img className='img2' src='Image/landing.png' alt=''/>
  {/* <button>Join Now</button> */}

  </div>
      </div>
      


    


    )

}

export default Homepage;