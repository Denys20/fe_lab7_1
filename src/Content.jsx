import React from "react";

export class Content extends React.Component{
    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }
    getRandomColor(){
        return '#' + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16);
    }
    setRandomColor(element){
        element.target.style.background = this.getRandomColor();
        element.target.style.color = this.getRandomColor();
    }
    render() {
        return <>
            <p>Хоббі:</p>
            <ul>
                <li>Плавання</li>
                <li>Риболовля</li>
                <li>Вишивання</li>
            </ul>

            <p>Улюблені фільми:</p>

            <ol>
                <li>"Аватар", 2009</li>
                <li onClick={this.setRandomColor}>"Найкра́щий стріле́ць", 1986</li>
                <li onClick={this.setRandomColor}>"Гаррі Поттер"</li>
            </ol>

            <p>
                Київ – столиця України та одне з найстаріших міст Європи, засноване щонайменше 1500 років тому. Сучасне
                європейське місто здатне
                здивувати будь-кого – від любителів природної краси, архітектури та визначних пам'яток до тих, хто
                віддає перевагу більш насиченому
                та активному відпочинку.
            </p>
        </>
    }
}