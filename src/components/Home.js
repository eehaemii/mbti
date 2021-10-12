import React from 'react'
import { Title, Button } from '../styles/myComponents'

const Home = (props) => {
    return <div style={{width: '100%',textAlign:'center'}}>
        <Title>
            <h1 style={{color:'#3daadb'}}>나의 직장 유형으로 본 MBTI는?</h1>
        </Title>
        <Button className="btn__start" onClick={props.goToGame}>시작하기</Button>
        <p>MADE BY eehaemi</p>
    </div>
}

export default Home