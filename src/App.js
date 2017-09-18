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
      this.setState({books: books})
      console.log(this.state.books)
    })

  }

changeShelf = (book, shelf) => {
  book.shelf = shelf

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

        <Route path="/add" render={() => (
          <AddBook />
        )}/>

      </div>

    )
  }
}

export default BooksApp
