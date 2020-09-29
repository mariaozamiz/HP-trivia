import React from 'react';
import Answer from './Answer.js';

function AnswersList(props) {
    let incorrectAnswers = props.triviaCard.incorrectAnswers;
    let correctAnswer = props.triviaCard.correctAnswer;

    return (
        <div className="main__answers">
            <Answer
                incorrectAnswers={incorrectAnswers}
                correctAnswer={correctAnswer}
            />
        </div>
    );
}

export default AnswersList;

// const charactersInfo = props.characters
// .sort((a, b) => (a.name > b.name ? 1 : -1))
// .map((character) => {
//     return (
//         <li key={character.id} className="character-card">
//             <CharacterCard
//                 id={character.id}
//                 imageUrl={character.imageUrl}
//                 name={character.name}
//                 species={character.species}
//             />
//         </li>
//     );
// });
// return <ul className="character-list">{charactersInfo}</ul>;
