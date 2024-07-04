import React from 'react'
import styled from "styled-components"
import { Button } from '../styled/Button'

const Startgame = ({toggle}) => {
  return (
   <Container>
    <div>
        <img src="/images/dice.png" alt="" srcset="" />
    </div>
    <div className='content'>
        <h1>Dice game</h1>
        <Button onClick={toggle}>Play now</Button>
    </div>
   </Container>
  )
}

export default Startgame

const Container=styled.div`
display: flex;
max-width: 1182px;
margin: 0 auto;
align-items: center;

.content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
      margin: 0%;
    }
  }
`

