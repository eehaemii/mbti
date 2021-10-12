import React from 'react'
import { Title, Button } from '../styles/myComponents'
import { questioncontent } from '../utilities/questioncontents'
import { withTheme } from 'styled-components'

const stepper = {
  display: 'flex', 
  justifyContent: 'space-around',
  alignItems: 'center',
  marginBottom: '50px',
  borderRadius: 10,
  backgroundColor: 'rgba(61,170,219,0.45)'
}
const currentQuestion = {
    width: '100%', height: 20,
    borderRadius: 10,
    backgroundColor: '#3daadb',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center'
}
const otherQuestion = {
    width: '100%', height: 20, 
}

const Question = (props) => {
    
    const current = questioncontent[props.count].number
    const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    return <div>
        <div style={stepper}>
            {steps.map((step, index) => {
                return step == current ? 
                <div style={currentQuestion}></div> : 
                <div style={otherQuestion}></div>
            })}
        </div>
        <Title>
            <h3>{questioncontent[props.count].number}</h3>
            <h2>{questioncontent[props.count].question}</h2>
        </Title>
        <Button 
            onClick={() => props.selectAnswer(1, questioncontent[props.count].type)}>
            {questioncontent[props.count].answer1}
        </Button>
        <Button 
            onClick={() => props.selectAnswer(2, questioncontent[props.count].type)}>
            {questioncontent[props.count].answer2}
        </Button>
    </div>
}

export default Question