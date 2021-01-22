import React from 'react';
import Carousel from "react-bootstrap/Carousel"
import orange from "../assets/images/orange.jpg"
import yellow from "../assets/images/yellow.jpg"
import red from "../assets/images/red.jpg"

export default function CarouselBox() {
    return (
        <Carousel>
           <Carousel.Item>
                <img
                className="d-block w-100 h-20"
                src={orange}
                alt="Нетангин фито со вкусом апельсина"
                />
                <Carousel.Caption>
                    <h2>НЕТАНГИН ФИТО*</h2>
                    <p>Пастилки для горла</p>
                </Carousel.Caption>
            </Carousel.Item> 
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={yellow}
                alt="Нетангин фито со вкусом имбиря и лимона"
                />
                <Carousel.Caption>
                    <h2>НЕТАНГИН ФИТО*</h2>
                    <p>Пастилки для горла</p>
                </Carousel.Caption>
            </Carousel.Item> 
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={red}
                alt="Нетангин фито со вкусом клубники"
                />
                <Carousel.Caption>
                    <h2>НЕТАНГИН ФИТО*</h2>
                    <p>Пастилки для горла</p>
                </Carousel.Caption>
            </Carousel.Item> 
        </Carousel>

    )
}