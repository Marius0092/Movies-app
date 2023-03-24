// apiKey = '673b1056234a1b1d9f7a44dc75464aa3'
const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=673b1056234a1b1d9f7a44dc75464aa3&language=en-US&page=1';
const imgPath = 'https://image.tmdb.org/t/p/w1280/';

const main = document.querySelector('main');

// get popular movies
async function getMovies() {
    const resp = await fetch(apiUrl);
    const respData = await resp.json();

    console.log(respData);

    respData.results.forEach(movie => {

        const { poster_path, title, overview } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img
                src = "${imgPath + poster_path}"
                alt = "${title}"
            />
            <div class="movie-info">
                <h3>${title}</h3>
            </div>
            <div class ="overview">
                <p><span>Overview:</span> ${overview}</p>
                <p><span>Inizio:</span> ${getRandomDate()}</p>
                <p><span>Sala:</span> ${getRandomNumber()}</p>
            </div>
        `;

        main.appendChild(movieEl);
    });

    return respData;
}

getMovies();

// get a random number between 1 and 12
function getRandomNumber() {
    const max = 12;
    const min = 1;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}

// get a random date between today and April 19th
function getRandomDate() {
    const maxDate = new Date('April 19, 2023 23:00:00');
    const minDate = Date.now();
    const timestamp = Math.floor(Math.random() * (maxDate - minDate + 1) + minDate);
    return new Date(timestamp).toLocaleString([], { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}