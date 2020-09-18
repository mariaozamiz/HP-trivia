import React from 'react';
import AnswersList from './AnswersList.js';

function Card(props) {
    console.log(props);
    return (
        <>
            <h2
                dangerouslySetInnerHTML={{
                    __html: props.triviaCards[0].question,
                }}
            />
            <AnswersList triviaCards={props.triviaCards} />
        </>
    );
}

export default Card;
