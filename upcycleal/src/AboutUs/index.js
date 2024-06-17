import './index.css'
function About (){
  return(
    <div className='about'>
<h1>ABOUT US</h1>

<div className="mission">
<div>
    <h2>Mission</h2>
    <p>The mission of our upcycling app is to promote <br/>Sustainable living by reducing clothing waste and <br/>
    encouraging users to participate in the production <br/> of upcycled products.</p>
</div>
  <img src="/Img/peoplerycling.png" alt=""/>
  </div>

  <div className="background">
    <img src="/Img/backgorund.png" alt=""/>
    <div>
      <h2>Background</h2>
      <p>Our app is designed to address the growing issue <br/>of fashion waste and the negative stigma <br/>
      associated with recycled products. By providing a <br/> 
      platform for users to upcycle clothing waste into<br/>functional products.</p>

    </div>
  </div>

  <div className="approach">
    <div>
      <h2>Our Approach</h2>
      <p>Our approach is centered around creating an <br/>
      intuitive and user-friendly interface that <br/>
      educates users about the benefits of upycling <br/> and provides 
      them with the tools to participate <br/>in the process.</p>

    </div>
    <img src="/Img/upcycling.png" alt=""/>
  </div>




 
</div>
  )

}
export default About;