import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import Shelf from './Shelf'




class ListBooks extends Component {
    static propTypes = {
       books: PropTypes.array.isRequired,
       changeShelf: PropTypes.func.isRequired
     }



    render() {
      const {books, changeShelf} = this.props

      let currentlyReading = books.filter((book) => book.shelf === "currentlyReading").sort(sortBy('title'));

      let wantToRead = books.filter((book) => book.shelf === "wantToRead").sort(sortBy('title'));

      let read = books.filter((book) => book.shelf === "read").sort(sortBy('title'));

      let none = books.filter((book) => book.shelf === "none").sort(sortBy('title'));

      return (

        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>

              <Shelf books={currentlyReading} changeShelf={changeShelf} shelf="Currently Reading" />

              <Shelf books={wantToRead} changeShelf={changeShelf} shelf="Currently Reading" />

              <Shelf books={read} changeShelf={changeShelf} shelf="Currently Reading" />

              </div>
            </div>
            <div className="open-search">
  <Link to="/search">Add a book</Link>
        </div>
          </div>

                    )

                    }
                  }


export default ListBooks
