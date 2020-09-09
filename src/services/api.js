const getDataFromApi = () => {
    fetch('./data/trivia.json')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.error('Ha habido un error ' + err));
};

export default getDataFromApi;
