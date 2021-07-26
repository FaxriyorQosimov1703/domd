import React from 'react'
import './footer.css'
import UpArrow from './UpArrow'
function Footer() {
    return (
        <div className="footer">


            <div className="container">
                <div className="footer-card">
                    <div className="footer-box"><img src="../../../img/domd.png" alt=""/></div>
                    <div className="footer-box">
                        <h4>Виды строительства</h4>
                        <h6>- Каркасные дома </h6>
                        <h6>- Дома из клеёного бруса </h6>
                        <h6>- Фахверковые дома </h6>
                        <h6> - Дома из брёвен </h6>
                        <h6>- Беседки </h6>
                        <h6> - Ремонт и отделка</h6>
        
                    </div>
                    <div className="footer-box">
                        <h4>Наши работы
                            Отзывы клиентов
                            Партнеры</h4>
                    </div>
                    <div className="footer-box footer-box-end">
                        <h4>Контакты</h4>
                        <div className="contact-box-item">
                                <img src="../../../img/map.png" alt=""/>
                                <p>Украина, г. Одесса ул. Комитетская, 24Б </p>
                            </div>

                            <div className="contact-box-item">
                                <img src="../../../img/message.png" alt=""/>
                                <p>Эл.почта: odessadomd@gmail.com </p>
                            </div>

    

                            <div className="contact-box-item">
                                <img src="../../../img/telephone.png" alt=""/>
                                <p>+38 (098) 271-50-35</p>
                            </div>
                            <div className="footer-box-item">
                                <img src="../../../img/facebook.png" alt=""/>
                                <img src="../../../img/instagramm.svg" alt=""/>
                                <img src="../../../img/004-youtube.svg" alt=""/>
                                <p>Свежие видео  у нас на канале</p>
                            </div>
                    </div>
                </div>

            </div>
            <UpArrow />
        </div>
    )
}

export default Footer
