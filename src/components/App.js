import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import Card from './Card';

function App() {
    const [triviaCards, setTriviaCards] = useState([]);

    useEffect(() => {
        getDataFromApi().then((data) => {
            setTriviaCards(data);
        });
    }, []);

    return triviaCards.length > 0 ? (
        <>
            <Card triviaCards={triviaCards} />
        </>
    ) : (
        <h2>Loading</h2>
    );
}

export default App;
