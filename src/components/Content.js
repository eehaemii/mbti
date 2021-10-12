import React from 'react'
import {Div} from '../styles/myComponents'

const Content = (props) => {
    // const [ myCharacter, setCharacter ] = useState({})
    const { 
        header, 
        contents1, 
        contents2,
        contents3,
        contents4,
        contents5,
        contents6,
        contents7,
        contents8,
        contents9,
        contents10,
        contents11,
        contents12,
        contents13,
        contents14,
        workType,
        bestType,
        worstType,
        mbtiType
    } = props;

    return(
        <Div>
            <h1 className="title">{header}</h1>
            <div className="cont__box">
                <div className="cont__box--item bn-bottom"><p>{contents1}</p></div>
                <div className="cont__box--item bn-bottom bn-left"><p>{contents2}</p></div>
                <div className="cont__box--item bn-bottom bn-left"><p>{contents3}</p></div>
                <div className="cont__box--item bn-bottom bn-left"><p>{contents4}</p></div>
                <div className="cont__box--item bn-bottom bn-left"><p>{contents5}</p></div>
                <div className="cont__box--item bn-bottom"><p>{contents6}</p></div>
                <div className="cont__box--item bn-bottom bn-left"><p>{contents7}</p></div>
                <div className="cont__box--item bn-bottom bn-left" style={{backgroundColor:"#daf3ffcc"}}>
                    <p className="cont__box--typeTxt">{mbtiType}</p>
                </div>
                <div className="cont__box--item bn-bottom bn-left"><p>{contents8}</p></div>
                <div className="cont__box--item bn-bottom bn-left"><p>{contents9}</p></div>
                <div className="cont__box--item"><p>{contents10}</p></div>
                <div className="cont__box--item bn-left"><p>{contents11}</p></div>
                <div className="cont__box--item bn-left"><p>{contents12}</p></div>
                <div className="cont__box--item bn-left"><p>{contents13}</p></div>
                <div className="cont__box--item bn-left"><p>{contents14}</p></div>
            </div>
            <div className="type__box">
                <div>
                    <h2 style={{fontSize:"22px"}}>나와 맞는 직업 유형은?</h2>
                    <p className="type__box--item">{workType}</p>
                </div>
                <div className="type__box--flex">
                    <div>
                        <h2 style={{fontSize:"22px"}}>나와 맞는 타입은?</h2>
                        <p className="type__box--item">{bestType}</p>
                    </div>
                    <div>
                        <h2 style={{fontSize:"22px"}}>나와 맞지 않는 타입은?</h2>
                        <p className="type__box--item">{worstType}</p>
                    </div>
                </div>
            </div>
        </Div>
    );
}

export default Content