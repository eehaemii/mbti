import React from 'react'

const stepper = {
  height: '50vh',
  display: 'flex', 
  justifyContent: 'space-around',
  alignItems: 'center'
}
const currentQuestion = {
  width: 30, height: 30,
  borderRadius: 15, backgroundColor: 'white',
  display: 'flex', 
  justifyContent: 'center',
  alignItems: 'center'
}
const otherQuestion = {
  width: 10, height: 10, 
  borderRadius: 5, backgroundColor: 'white'
}

// 현재풀고있는문제번호
const current = 3  // 3번이라 치고

const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const Idea = () => {
  return <div style={stepper}>
    {steps.map((step, index) => {
      return step == current ? 
      <div style={currentQuestion}>{step}</div> : 
      <div style={otherQuestion}></div>
    })}
  </div>
}

export default Idea
