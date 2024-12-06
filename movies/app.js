$(document).ready(function() {
    const movieList = [];

    // Function to render movies in the DOM
    function renderMovies() {
        const tbody = $('table.movie-list tbody')
        //console.log(tbody)
        tbody.empty() // Clear existing rows 

        movieList.forEach((movie, index) => {
            const row = `
            <tr>
                <td>${movie.title}</td>
                <td>${movie.rating}</td>
                <td><button class = 'btn-Remove' data-index="${index}">Remove</button></td>
            </tr>
        `;
        tbody.append(row)
        })
    }

    // Add movie to the list and DOM
    $('#movie-form').on('submit', function(e) {
        e.preventDefault();

        const title = $('#title').val().trim();
        //console.log(title)
        const rating = $('#rating').val()
        //console.log(rating)

        //Validation
        if(title.length < 2) {
            alert('Title must be at least 2 characters long!');
            return;
        }

        // Add movie to list and re-render
        movieList.push({title, rating});
        //console.log(movieList)
        renderMovies();

        // Clear inputs
        $('#title').val('');
        $('#rating').val('')
    })

    //Remove a movie 
    $('table').on('click', '.btn-Remove', function() {
        const index = $(this).data('index');
        movieList.splice(index, 1) // Remove from array
        renderMovies(); // Re-render the list
    })

    // Sorting functionality
    $('#sort-title').on('click', function() {
        movieList.sort((a, b) => a.title.localeCompare(b.title));
        renderMovies();
            
    })
    $('#sort-rating').on('click', function() {
        movieList.sort((a, b) => a.rating - b.rating);
        renderMovies();
    })

})
