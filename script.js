const button = document.getElementById('newquote');

button.addEventListener('click', event => {
    fetchSimpsonQuote();
});

function fetchSimpsonQuote() {
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
        .then(function(response) {
            return response.data[0];
        })
        .then(function(simpson) {
            const simpsonHtml = `
        <h2>${simpson.character}</h2>
        <p><strong>${simpson.quote}</strong></p>
        <img src="${simpson.image}" />
        `;
            document.getElementById('simpson-quote').innerHTML = simpsonHtml;
        });
}
fetchSimpsonQuote();