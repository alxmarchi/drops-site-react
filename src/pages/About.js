import React from 'react';
import { Container } from 'react-bootstrap';
import CarouselBoxAbout from '../components/CarouselBoxAbout'

const About =() =>{
    return (
        <> 
        <h1 className="m-4">Информация о компании</h1>
    <CarouselBoxAbout></CarouselBoxAbout>
<Container>
    
    <p>Sydler Remedies Pvt. Ltd. — Группа компаний Sydler — это ведущий производитель и экспортёр#nbsp; высококачественных и надежных лекарственных форм, фитопрепаратов, БАДов и пищевых добавок#nbsp;, а также нутрицевтиков, которые удовлетворяют взыскательные требования рынка по всему миру.</p>
    <h3 className="m-4">Сертификаты</h3>
    <h3 className="m-4">Контакты</h3>
</Container>
</>
    )
}

export default About