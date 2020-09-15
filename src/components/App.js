import React, { useEffect, useState } from 'react';
import Question from './QuestionCard';
import getDataFromApi from '../services/api';
import Answers from './Answers';

function App() {
    const startTrivia = (async) => {};

    const [cards, setCards] = useState([]);

    useEffect(() => {
        getDataFromApi().then((data) => {
            setCards(data);
        });
    }, []);

    return (
        <>
            <h1>REACT Quiz</h1>
            <button className="start" onClik={startTrivia}>
                Empezar
            </button>
            <Question />
            <Answers />
        </>
    );
}

export default App;
