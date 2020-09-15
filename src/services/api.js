const getDataFromApi = () => {
    return fetch(
        'https://opentdb.com/api.php?amount=10&category=20&type=multiple'
    )
        .then((response) => response.json())
        .then((data) => {
            return data.results.map((result) => {
                return {
                    question: result.question,
                    correctAnswer: result.correct_answer,
                    incorrectAnswers: result.incorrect_answers,
                };
            });
        })
        .catch((err) => console.error('Ha habido un error ' + err));
};

export default getDataFromApi;
