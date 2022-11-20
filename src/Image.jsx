import React, {useState} from "react";

function Image(){
    const [image, setWidth] = useState(500);
    const [display, setDisplay] = useState({display: "inline-block"});

    const addImage = () => {
        if(display['display'] === 'inline-block'){
            alert('Не можна додати зображення, воно вже додане');
        }
        else{
            setWidth(500);
            setDisplay({display: "inline-block"});
        }
    };
    const increaseImage = () => {
        if(image < 750){
            setWidth(image + 50);
        }
        else if(display['display'] === 'inline-block'){
            alert('Максимальний розмір зображення')
        }
    }
    const reduceImage = () => {
        if(image > 100){
            setWidth(image - 50);
        }
        else if(display['display'] === 'inline-block'){
            alert('Мінімальний розмір зображення')
        }
    }
    const deleteImage = () => {
        setDisplay({display: 'none'});
    }
    
    return (
        <>
            <a href="https://kyivcity.gov.ua/"><img src="./Kyiv.png" alt="Київ" width={image} style={display}/></a>

            <div className="image_change">
                <button onClick={addImage}>Додати</button>
                <button onClick={increaseImage}>Збільшити</button>
                <button onClick={reduceImage}>Зменшити</button>
                <button onClick={deleteImage}>Видалити</button>
            </div>
        </>
    );
}

export default Image;