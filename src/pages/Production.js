import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import orange_card from "../assets/images/orange_card.png"
import mint_card from "../assets/images/mint_card.png"

const Production =() =>{
    return (
<div>
    <h1>Продукция</h1>
    <CardDeck>
    <Card style={{ width: '10rem', border: 0 }}>
  <Card.Img variant="top" src={orange_card} />
  <Card.Body>
    <Button variant="primary">Подробнее</Button>
  </Card.Body>
</Card>
<Card style={{ width: '10rem', border: 0 }}>
  <Card.Img variant="top" src={orange_card} />
  <Card.Body>
    <Button variant="primary">Подробнее</Button>
  </Card.Body>
</Card>
<Card style={{ width: '10rem', border: 0 }}>
  <Card.Img variant="top" src={orange_card} />
  <Card.Body>
    <Button variant="primary">Подробнее</Button>
  </Card.Body>
</Card>
<Card style={{ width: '10rem', border: 0 }}>
  <Card.Img variant="top" src={orange_card} />
  <Card.Body>
    <Button variant="primary">Подробнее</Button>
  </Card.Body>
</Card>
</CardDeck>
</div>
    )
}

export default Production