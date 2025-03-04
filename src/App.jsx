import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div className="main">

      <div className="header">
      <h1>Vegetables</h1>
      <div className="left" >
        <div className="img2"> 
          <img src="/fb.png" alt="fb" style={{ width: 24, height: 24 }} />
        </div> 
        <div className="img2"> 
          <img src="/ig.png" alt="ig" style={{ width: 24, height: 24 }} />
        </div> 
      <a >|</a>
      <button className="button">LOGIN</button>
      <button className="button">JOIN</button>
      </div>
      </div>
      <div className="header">
      <ul>
          <li><h2 href="">Home</h2></li>
          <li><h2 href="">About Us</h2></li>
          <li><h2 href="">Vegetables</h2></li>
          <li><h2 href="">Online</h2></li>
          <li><h2 href="">Contact</h2></li>
        </ul>
      </div>  

        <br/>
        <div className="row ">
        <img src="/img_main_pumpkin.png" alt="pumpkin"></img>
        </div>
        
        
        <br></br>
        <div className="row ">
          <div className="col">
            <h2 className="primary" >Vegetables</h2>
            <div className="img3">
            <img src="/img_vegetables_carrot.png" alt="carrot" style={{width:165,height:140}}/>
            <img src="/img_vegetables_corn.png" alt="corn" style={{width:165,height:140}}/>
            <img src="/img_vegetables_pepper.png" alt="pepper" style={{width:165,height:140}}/>
            </div>
          </div>
          <div className="col">
            <h2 className="primary" >Contact</h2>
            <div className="content"> 
              <h4>For any questions or suggestions about Vegetables, Vegetables Club or your online order you can contact Vegetables Customer Service by phone, email or post and we’ll be happy to help.
              <hr/>
              E-mail : Vegetables@aaabbccc.com <br/>PHONE : +886-123-456-789</h4>
            </div>
          </div>
        </div>
      <br/><br/><br/><br/><br/><br/><br/>
      </div>

      <footer className="footer">
              <h4>Copyrights 2017 Vegetables cise / Design by Vegetables</h4>
      </footer> 

    </div>
  )
}

export default App
