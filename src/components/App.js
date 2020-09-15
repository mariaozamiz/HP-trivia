import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';

function App() {
    const [triviaCards, setTriviaCards] = useState([]);

    console.log(triviaCards);

    useEffect(() => {
        getDataFromApi().then((data) => {
            setTriviaCards(data);
        });
    }, []);

    return triviaCards.length > 0 ? (
        <>
            <h2>{triviaCards[0].question}</h2>
            <button>{triviaCards[0].correctAnswer}</button>
            <button>{triviaCards[0].incorrectAnswers[0]}</button>
            <button>{triviaCards[0].incorrectAnswers[1]}</button>
            <button>{triviaCards[0].incorrectAnswers[2]}</button>
        </>
    ) : (
        <p>Loading</p>
    );
}

export default App;
