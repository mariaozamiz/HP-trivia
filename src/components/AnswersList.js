import React from 'react';

function AnswersList(props) {
    return (
        <div className="main__answers">
            <button className="button__answer">
                {props.triviaCard.correctAnswer}
            </button>
            <button className="button__answer">
                {props.triviaCard.incorrectAnswers[0]}
            </button>
            <button className="button__answer">
                {props.triviaCard.incorrectAnswers[1]}
            </button>
            <button className="button__answer">
                {props.triviaCard.incorrectAnswers[2]}
            </button>
        </div>
    );
}

export default AnswersList;
