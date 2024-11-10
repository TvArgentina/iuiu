// Variable para controlar el número de elementos a cargar en cada acción
let page = 1;  // Empezamos desde la página 1
// Variable para controlar el número de página o conjunto de elementos que se cargarán
let  = 1;  // Comienza en la página 1

// Función para cargar más contenido (simulada con datos estáticos)
function loadMoreMovies() {
    // Datos de ejemplo (en una aplicación real, usarías una API para obtener estos datos)
    const movies = [
        {
            title: "Pelicula 1",
            image: "/images/1.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            title: "Pelicula 2",
            image: "/images/2.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            title: "Pelicula 3",
            image: "/images/4.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            title: "Pelicula 4",
            image: "/images/18.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ];

    // Obtener el contenedor de películas
    const movieContainer = document.getElementById("movie-container");

    // Agregar nuevas películas al contenedor
    for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        const movieElement = document.createElement("div");
        movieElement.classList.add("box-1");
        movieElement.innerHTML = `
            <div class="content">
                <img src="${movie.image}" alt="${movie.title}">
                <a href="#" class="btn-2">Ver ahora</a>
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
            </div>
        `;
        movieContainer.appendChild(movieElement);
    }

    // Incrementar la página para la próxima carga
    page++;
}

// Inicialmente cargar algunas películas cuando la página se carga
loadMoreMovies();

// Asociar la acción de clic al botón de "Cargar más"
document.getElementById("load-more-1").addEventListener("click", loadMoreMovies);