import React, { useState } from 'react'
import Question from './Question'
import Result from './Result'

const Game = (props) => {

    // 답변 끝낸 문항 수
    const [count,setCount] = useState(0)
    // 각 유형에 대한 점수들 (1번 답변은 +, 2번 답변은 -)
    const [ e, setE] = useState(0)
    const [ s, setS ] = useState(0)
    const [ t, setT ] = useState(0)
    const [ j, setJ ] = useState(0)

    // 카운트 증가 + 점수 합산 함수
    const selectAnswer = (btnNum, type) => {
        if(btnNum == 1) {
            if(type == 'e'){ setE(e + 1)}
            if(type == 's'){ setS(s + 1)}
            if(type == 't'){ setT(t + 1)}
            if(type == 'j'){ setJ(j + 1)}
        }else{
            if(type == 'e'){ setE(e - 1)}
            if(type == 's'){ setS(s - 1)}
            if(type == 't'){ setT(t - 1)}
            if(type == 'j'){ setJ(j - 1)}
        }
        setCount(count + 1)
    }

    return <div style={{width: '100%',textAlign:'center'}}>
        { count === 12 ? <Result goToHome={props.goToHome} points={{e,s,t,j}} /> : 
        <Question count={count} selectAnswer={selectAnswer}/>}
    </div>
}

export default Game