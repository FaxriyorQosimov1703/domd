import React,{useState} from 'react'

import './customers.css'


function Customers() {

    const [data, setData] = useState([
        {id: 1, title: 'Не поднимаем стоимость', img: '../../../img/wallet1.png', body: 'Фиксируем стоимость работ в договоре'},
        {id: 2, title: 'Поэтапная оплата', img: '../../../img/wallet2.png', body: 'Оплата каждого вида работ разбита на 2 части(50% аванс 50% по завершению)'},
        {id: 3, title: 'Соблюдаем сроки', img: '../../../img/wallet3.png', body: 'Несем ответственность за соблюдение сроков.'},
        {id: 4, title: 'Экологичность', img: '../../../img/wallet4.png', body: 'Дом строится из натуральных материалов'},
        {id: 5, title: 'Самостоятельно', img: '../../../img/wallet5.png', body: 'Закупаем и доставляем на объект, качественные материалы и расходники'},
        {id: 6, title: 'Проводим уборку', img: '../../../img/wallet6.png', body: 'В процессе работ и вывозим мусор после завершения работ.'},
    ])

    return (
        <div className="customers">
            <h1>Заботимся о Вашем <b>спокойствии</b></h1>
            <div className="customers-card">
                {
                    data.map(item=>
                        <div className="customers-box">
                            <div className="customers-box-img">
                                <img src={item.img} alt=""/>
                            </div>
                            <div className="customers-box-content">
                                <h5>{item.title}</h5>
                                <p>{item.body}</p>
                            </div>
                        </div>  
                    )
                }
            </div>
        </div>
    )
}

export default Customers
