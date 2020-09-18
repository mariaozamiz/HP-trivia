import React from 'react';

function AnswersList(props) {
    return (
        <>
            <button>{props.triviaCards[0].correctAnswer}</button>
            <button>{props.triviaCards[0].incorrectAnswers[0]}</button>
            <button>{props.triviaCards[0].incorrectAnswers[1]}</button>
            <button>{props.triviaCards[0].incorrectAnswers[2]}</button>
        </>
    );
}

export default AnswersList;
