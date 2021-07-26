import React, {useState} from 'react'
import {FaTimes, FaBars, FaArrowCircleLeft} from 'react-icons/fa'
import './Details.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import FotoGalareya from './components/fotoGalareya/FotoGalareya';
import StartBuilding from './components/StartBuilding/StartBuilding';
import Reklama from './components/Reklama/Reklama';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Button from './components/button/Button';
import {IconContext} from 'react-icons/lib'
import {houses} from './Houses'
import Modal from './components/modal/Modal';
import House from './components/house/House';
import StartToday from './components/startToday/StartToday';
import Customers from './components/customers/Customers';

function Details() {
  const [click, setClick] = useState(false);
  const [houseId, setHouseId] = useState('')

 

  const handleClick = () => setClick(prev=>!prev)
  return (
    <IconContext.Provider value={{color: '#fff'}}>
    
    <div className="App">
      <Modal houseId={houseId} setHouseId={setHouseId} />
      <nav className={click ? 'nav nav-menu' : 'nav-menu-active'}>
        <div className="nav-menu-header">
          <div className="menu-close" onClick={() => setClick(false)}><FaTimes className="FaTimes" /></div>
          <div className="nav-menu-logo"><img src="../../../img/domdblack.jpg" alt=""/></div>
        </div>
        <div className="menu-call">
              <div className="menu-call-number d-flex">
                  <img src="../../../img/telephone.png" alt=""/>
                  <h5>+38 (098) 271-50-35</h5>
              </div>
              <div className="navbar-call-btn">
                  <Button buttonStyle="btn-orange">ПЕРЕЗВОНИТЬ МНЕ</Button>
              </div>
          </div>
        <div className="nav-item">
          <h5 onClick={()=>setClick(false)} >Виды строительства</h5>
          <h5 onClick={()=>setClick(false)} className="child">- Каркасные дома </h5>
          <h5 onClick={()=>setClick(false)} className="child">- Дома из клеёного бруса </h5>
          <h5 onClick={()=>setClick(false)} className="child">- Фахверковые дома </h5>
          <h5 onClick={()=>setClick(false)} className="child">- Дома из брёвен  </h5>
          <h5 onClick={()=>setClick(false)} className="child">- Беседки  </h5>
          <h5 onClick={()=>setClick(false)} className="child">- Фахверковые дома </h5>
          <h5 onClick={()=>setClick(false)} className="child">- Ремонт и отделка</h5>
          <h5 onClick={()=>setClick(false)}>Наши работы  </h5>
          <h5 onClick={()=>setClick(false)}>Отзывы клиентов</h5>
          <h5 onClick={()=>setClick(false)}>Партнеры</h5>
          <h5 onClick={()=>setClick(false)}> Контакты</h5>
        </div>
      </nav>
        <div className="navbar">
            <div onClick={handleClick} className="menu-icon">
                {click ? <FaTimes className="FaTimes" /> : <FaBars className="fabars" />}
            </div>
            <div className="container">
              <Navbar click={click} />
            </div>
        </div>

     
      <div className="Home">
        <Home  />
      </div>
      <div className="container">
        <House setHouseId={setHouseId} />
        <StartToday />
        <Customers />
      </div>
        <FotoGalareya />
        <StartBuilding />
        <Reklama />
        <Contact />
        <Footer />
    </div>
    </IconContext.Provider>

  );
}

export default Details;
