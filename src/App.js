import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import AddBook from './AddBook'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
}

componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books)
      this.setState({books: books})
    })

  }

changeShelf = (book, shelf) => {
  book.shelf = shelf
  console.log(book)
  let shelfChange = this.state.books.filter((b) => b.id !== book.id)

  shelfChange = shelfChange.concat([book])

  this.setState(() => ({
    books: shelfChange
  }))

  BooksAPI.update(book, shelf)


}

  render() {

    return (

      <div className="app">

        <Route path="/" exact render={() =>(
          <ListBooks changeShelf={this.changeShelf} books={this.state.books}/>
        )}/>

        <Route path="/search" render={() => (
          <AddBook changeShelf={this.changeShelf} />
        )}/>

      </div>

    )
  }
}

export default BooksApp
