import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class AddBook extends Component {
  state = {
    results: []
  }

  createBook = (book, changeShelf) => (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
          <div className="book-shelf-changer">
              <select value={book.shelf || "none"} onChange={(event) => changeShelf(book, event.target.value)}>
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

  handleSearch = (e) => {
    e.preventDefault()
    let searchValue = e.target.value
    if (searchValue.length === 0){
      this.setState({results : []})
    }
    else{
      BooksAPI.search(searchValue).then((results) => {
        !results.error? this.setState({results}) : this.setState({results: []})
      })
    }

  }

  render() {
    const {changeShelf} = this.props
    const bookSearch = this.state.results

    return (

      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={this.handleSearch}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { bookSearch.map((book) => this.createBook(book, changeShelf)) }
          </ol>
        </div>
      </div>

    )
  }
}

export default AddBook
