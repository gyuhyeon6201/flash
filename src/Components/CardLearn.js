import { useState } from "react";


const CardLearn = ({cardData, onExit}) => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [show, setShow] = useState(false);
    const handleNest = ()=>{
        if(currentIdx+1 < cardData.length){
            setCurrentIdx(currentIdx+1);
        }else{
            //학습 끝
            console.log("학습 종료");
            onExit(true);
        }
    }
    return (
        <div className="learn-mode">
            <h2>플래시카드 학습</h2>
            <p>질문 : {cardData[currentIdx].question}</p>
            {
                show && <p>답변 : {cardData[currentIdx].answer}</p>
            }
            <button onClick={()=>{setShow(!show)}}>
                {show ? "답변닫기" : "답변보기"}
            </button>
            <button onClick={handleNest}>다음카드</button>
            <button onClick={()=>{onExit(true)}}>학습종료</button>
        </div>
    );
};

export default CardLearn;