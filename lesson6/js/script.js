function letsDance( url, bookUrl, bookId, authorUrl, authorId, similarBookUrl, similarBookId ) {
  var book = document.getElementById('book'),
      author = document.getElementById('author'),
      similarBook = document.getElementById('similar'),
      error = 'Error. Please refresh your browser';

  book.textContent = 'Please wait. Book is loading';
  author.textContent = 'Please wait. Author details are loading';
  similarBook.textContent = 'Please wait. Similar books are loading';

  function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
  }

  fetch(url + bookUrl + bookId)
    .then(status)
    .then(function(data) { //get book title
      bookElem.textContent = data.name;
      return fetch(url + authorUrl + authorId);
    })
    .then(function(data) {
      authorElem.textContent = data.name;

      var similarBooksLoaded = 0;
      var similarBooksAmount = data.books.lenght;

      return Promise.all(
        data.books.map(function(similarBookId) {
          return fetch(url + similarBookUrl + similarBookId);
        })
      );
    })
    .then(function(similarities) {
      similarities.forEach(function (similarBookId) {
        var p = document.createElement('p');
        similarBookElem.appendChild(p.textContent = similarBookId);

        similarBooksLoaded += 1;
      });

      if(similarBooksLoaded === similarBooksAmount) {
        alert('Horray everything loaded');
      }
    })
    .catch(function() {
      bookElem.textContent = error;
      authorElem.textContent = error;
      similarBookElem.textContent = error;
    });
}
var url = 'api/',
    bookUrl = 'books/',
    authorUrl = 'authors/',
    similarBookUrl = 'bestsellers/similar/';

letsDance( url, bookUrl, bookId, authorUrl, authorId, similarBookUrl, similarBookId );
