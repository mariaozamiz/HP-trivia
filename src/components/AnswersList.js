import React from 'react';

function AnswersList(props) {
    return (
        <div className="main__answers">
            <button className="button__answer">
                {props.triviaCards[0].correctAnswer}
            </button>
            <button className="button__answer">
                {props.triviaCards[0].incorrectAnswers[0]}
            </button>
            <button className="button__answer">
                {props.triviaCards[0].incorrectAnswers[1]}
            </button>
            <button className="button__answer">
                {props.triviaCards[0].incorrectAnswers[2]}
            </button>
        </div>
    );
}

export default AnswersList;
