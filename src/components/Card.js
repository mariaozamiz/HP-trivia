import React from 'react';
import AnswersList from './AnswersList.js';

function Card(props) {
    console.log(props);
    return (
        <main className="main">
            <h2
                className="main__question"
                dangerouslySetInnerHTML={{
                    __html: props.triviaCards[0].question,
                }}
            />
            <AnswersList triviaCards={props.triviaCards} />
        </main>
    );
}

export default Card;
