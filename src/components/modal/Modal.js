import React,{useState, useEffect} from 'react'
import { houses1 } from '../../Houses'
import {IconContext} from 'react-icons/lib'
import { FaArrowCircleRight, FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa';


import './modal.css'
import Button from '../button/Button'
function Modal({houseId, setHouseId}) {
  const [data, setData] = useState(houses1);
  const [index, setIndex] = useState(0)

  useEffect(()=>{
      const lastIndex = data.length -1;
      if(index < 0){
          setIndex(lastIndex)
      }
      if(index > lastIndex){
          setIndex(0)
      }
  },[data, index])

  useEffect(()=>{
      let slider = setInterval(()=>{
          setIndex(index + 1)
      }, 3000);
      return ()=> clearInterval(slider)
  })
  // const [active, setActive] = useState('none')
    return (
    <IconContext.Provider value={{color: '#fff'}}>

        <div className="modal" style={{display: `${houseId?'block':'none'}`}}>
        <div className="modal-parent">
          <div className="modal-card">
            <div className="times" onClick={()=>setHouseId('')}>x</div>
            <div className="container">
              <h1>Укажите <b>площадь</b> и <b>материал стен</b> Вашего дома</h1>
              <div className="modal-title">
                <h2>Площадь вашего дома:</h2>
                <div className="modal-checkbox">
                  <div className="modal-checkbox-item">
                    <input className="checkbox" type="checkbox" name="input" id="id1"/>
                    <label htmlFor="id1">50-100м2</label>
                  </div>
                  <div className="modal-checkbox-item">
                    <input className="checkbox" type="checkbox" name="" id="id2"/>
                    <label htmlFor="id2">50-100м2</label>
                  </div>
                  <div className="modal-checkbox-item">
                    <input className="checkbox" type="checkbox" name="" id="id3"/>
                    <label htmlFor="id3">50-100м2</label>
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <div className="modal-house-card">
                  {
                    data.map((item, itemIndex) => {
                      let position = 'nextSlide';
                      if(itemIndex === index) {
                          position = 'activeSlide';
                      }
                      if(itemIndex === index -1 || (index === 0 && itemIndex === data.length - 1)) {
                          position = 'lastSlide'
                      }

                      return (
                        <div className={`${houseId == item.id ? 'modal-house-box-active modal-house-box' : 'modal-house-box'} ${position}`}>
                        <div className={`${houseId == item.id ? 'union-active' : 'union'}`}>
                          <img src="../../../img/Union.png" alt=""/>
                        </div>
                        <img src={item.src} alt={item.alt}/>
                        <h6>{item.title}</h6>
                      </div>
                      )
                    })
                  }

                </div>
              </div>
              <div className="house-btn">
                    <div  onClick={() => setIndex(index - 1)}>
                        <FaChevronCircleLeft className="prev modal-prev"/>

                    </div>
                    <div  onClick={() => setIndex(index + 1)}>
                        <FaChevronCircleRight className="next modal-next" />

                    </div>
                </div>
              <div className="modal-footer">
                <div className="modal-footer-header">
                  <div className="modal-footer-header-item">
                    <input type="checkbox" name="" id="nok"/>
                    <label for="nok">Под ключ</label>
                  </div>
                  <div className="modal-footer-header-item">
                    <input type="checkbox" name="" id="olma"/>
                    <label for="olma">Коробка</label>
                  </div>
                </div>
                <div className="modal-footer-body">
                  <input placeholder="Ваш телефон" type="text"/>
                  <Button buttonStyle="btn-orange">Получить расчет</Button>
                </div>
                <div className="modal-footer-footer">
                  <input type="checkbox" name="" id="footer"/>
                  <label for="footer">Вы соглашаетесь с условиями <b>обработки персональных данных</b></label>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </IconContext.Provider>

    )
}

export default Modal
