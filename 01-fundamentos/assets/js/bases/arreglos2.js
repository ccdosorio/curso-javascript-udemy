let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log('Largo: ', juegos.length);

let ultimo = juegos[juegos.length - 1];

console.log(ultimo);

juegos.forEach((item, ind) => {
    console.log({ ind, item });
});

let nuevaLongitud = juegos.push('Mario Party'); // agrega al final

console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift('Tears Of The Kingdom'); // agrega al inicio

console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop(); // Borra el ultimo

console.log({ juegoBorrado, juegos });

console.log(juegos);

let pos = 1;

let juegosBorrados = juegos.splice(pos, 2); // Borra segun la posicion desde 1, borrar 2

console.log({ juegosBorrados, juegos });

let metroidIndex = juegos.indexOf('Metroid'); // Buscar y encontrar su indice (CaseSenNsitivE)

console.log(metroidIndex); // 1 y -1 si no lo encontro
console.log('DATA; ', data);

const axios = require('axios');

function getArticleName(article) {
    if (article.title) {
        return article.title;
    } else if (article.story_title) {
        return article.story_title;
    } else {
        return null;
    }
}

const getArticleName = (article) => {
    if (article.title) {
        return article.title;
    } else if (article.story_title) {
        return article.story_title;
    } else {
        return null;
    }
};


async function topArticles(limit) {
    const baseUrl = "https://jsonmock.hackerrank.com/api/articles?page=";
    let pageNumber = 1;
    let articleNames = [];

    // Get the initial page of articles
    const response = await axios.get(baseUrl + pageNumber);
    const data = response.data;
    const totalPages = data.total_pages;

    // Iterate through each page of articles
    while (pageNumber <= totalPages) {
        // Iterate through each article in the current page
        for (const article of data.data) {
            const articleName = getArticleName(article);
            if (articleName) {
                articleNames.push(articleName);
            }
        }

        pageNumber++;
        // Get the next page of articles
        const nextPageResponse = await axios.get(baseUrl + pageNumber);
        data.data = nextPageResponse.data.data;
    }

    // Sort the article names in descending order by comment count, then alphabetically
    articleNames.sort((a, b) => {
        if (a.num_comments !== b.num_comments) {
            return b.num_comments - a.num_comments;
        } else {
            return b.localeCompare(a);
        }
    });

    // Return a sublist of the top limit article names
    return articleNames.slice(0, limit);
}

// CORRECTO

const axios = require('axios');

async function topArticles(limit) {
    const apiUrl = "https://jsonmock.hackerrank.com/api/articles";
    let currentPage = 1;
    let totalPages = 1;
    let articles = [];

    while (currentPage <= totalPages) {
        const response = await axios.get(`${apiUrl}?page=${currentPage}`);
        const data = response.data;

        totalPages = data.total_pages;

        data.data.forEach(article => {
            const title = article.title || article.story_title;
            const comments = article.num_comments || 0;

            if (title) {
                articles.push({ title, comments });
            }
        });

        data.data.forEach(({ title, story_title, num_comments }) => {
            const comments = num_comments ?? 0;

            if (title || story_title) {
                articles.push({ title: title || story_title, comments });
            }
        });


        currentPage++;
    }

    articles.sort((a, b) => {
        if (b.comments !== a.comments) {
            return b.comments - a.comments;
        } else {
            return a.title.localeCompare(b.title);
        }
    });

    const topArticles = articles.slice(0, limit).map(article => article.title);
    return topArticles;
}
