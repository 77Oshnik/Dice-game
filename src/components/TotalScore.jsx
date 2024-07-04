import React from 'react'
import styled from 'styled-components'

const TotalScore = ({score}) => {
  return (
    <Totalscore>
    <h1>{score}</h1>
    <p>Total Score</p>
  </Totalscore>
  )
}

export default TotalScore

const Totalscore=styled.div`
  min-width: 135px;
  min-height: 151px;
  

  h1{
    font-size: 100px;
    font-weight: 500;
    line-height: 100px;
  }
  p{
    font-size: 24px;
    font-weight: 500;
  }
`