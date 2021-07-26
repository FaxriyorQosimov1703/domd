import React from 'react'
import Button from '../button/Button';
import {IconContext} from 'react-icons/lib'
import './Navbar.css'


function Navbar({click}) {
    return (
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="Navbar">

            <div className="navbar-container">

                <div className="navbar-logo">
                    <img src="../../../img/domd.png" alt=""/>
                </div>

                <div className="navbar-logo-right-text">
                    <h6>Строительство деревянных домов</h6>
                    <h5>за <span>45 </span> дней</h5>
                </div>

                <div className="navbar-sms">
                    <h5>Нажмите, чтобы начать общение</h5>
                    <div className="navbar-sms-btn">
                        <div className="sms-btn viber-btn">
                            <img src="../../../img/phone.png" alt=""/>
                            <h6>Viber</h6>
                        </div>
                        <div className="sms-btn telegram-btn">
                            <img src="../../../img/telegram.png" alt=""/>
                            <h6>telegram</h6>
                        </div>
                    </div>
                </div>

                <div className="navbar-call">
                    <div className="navbar-call-number">
                        <img src="../../../img/telephone.png" alt=""/>
                        <h6>+38 (098) 271-50-35</h6>
                    </div>
                    <div className="navbar-call-btn">
                        <Button buttonStyle="btn-orange">ПЕРЕЗВОНИТЬ МНЕ</Button>
                    </div>
                </div>
            </div>
        </div>
    </IconContext.Provider>
    )
}

export default Navbar
