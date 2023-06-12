function balancedSum(arr) {
    // Write your code here

    // Sumar todos los elementos del arreglo con el reduce
    const sumArr = arr.reduce((acc, num) => acc + num, 0);

    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        // Calcular la suma de los elementos a la derecha
        const rightSum = sumArr - leftSum - arr[i];

        if (leftSum === rightSum) return i // Indice pivote

        // Ir sumando los elementos a la izquierda
        leftSum += arr[i];
    }

    return -1;  // No se encontró ningún pivote
}

function inventoryList() {
    // write your code here
    const todoList = [];

    return {
        // Agregar el elemento a la lista si no esta incluido en el array  
        add(name) {
            !todoList.includes(name) ? todoList.push(name) : null;
        },

        remove(name) {
            // Buscar el index y eliminarlo si existe
            const index = todoList.indexOf(name);
            // Borrar desde la posicion index, un elemento
            index !== -1 ? todoList.splice(index, 1) : null;
        },

        // El metodo slice devuelve un nuevo array (copia) para no modificar el original
        getList() {
            return todoList.slice();
        }

    }


}

// API

async function topArticles(limit) {
    const apiUrl = 'https://jsonmock.hackerrank.com/api/articles';
    let currentPage = 1; // Pagina inicial
    let totalPages = 1;
    let articles = [];

    // Iterar todas las paginas
    while (currentPage <= totalPages) {

        // Realizar la peticion GET
        const resp = await axios.get(`${apiUrl}?page=${currentPage}`);
        const data = resp.data;

        // Modificar el total de paginas
        totalPages = data.total_pages;

        // Desestructurar solo las propiedades que me serviran
        data.data.forEach(({ title, story_title, num_comments }) => {

            // Como puede venir null, lo establecemos como 0
            const comments = num_comments ?? 0;

            // Segun las condiciones, validar si viene el title o story_title. Ambos pueden ser null
            if (title || story_title) {
                articles.push({ title: title || story_title, comments });
            }
        });

        currentPage++;
    }

    /**
     * 1. Ordenamos el array en base al numero de comentarios y si son iguales, en base al titulo
     * 2. Comparamos los comentarios de a y b, y se ordenan en base a la resta. Mayor num_comments al inicio
     * 3. Comparar los titulos con localeCompare, y se ordenan alfabeticamente por el titulo
     */
    articles.sort((a, b) => {
        if (b.comments !== a.comments) {
            return b.comments - a.comments;
        } else {
            return a.title.localeCompare(b.title);
        }
    });

    // Retornar una copia del arreglo que contiene los titulos en base al limite enviado
    return articles.slice(0, limit).map(article => article.title);

}