import React, { Component } from 'react'
import PropTypes from 'prop-types'




class Shelf extends Component {
  static propTypes = {
     books: PropTypes.array.isRequired,
     changeShelf: PropTypes.func.isRequired,
     shelf: PropTypes.string.isRequired
   }

  createBook = (book, changeShelf="none") => (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
          <div className="book-shelf-changer">
              <select value={book.shelf} onChange={(event) => changeShelf(book, event.target.value)}>
                <option value="none" disabled >Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.author}</div>
          </div>
    </li>
  )

  render(){
    const {books, shelf, changeShelf} = this.props

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => this.createBook(book, changeShelf))
          }
            </ol>
          </div>
        </div>


    )

  }
}

export default Shelf
