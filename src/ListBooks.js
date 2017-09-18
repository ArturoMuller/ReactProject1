import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'



// function ListBooks (props) { //if all you have is a render method then just do a function
//   return (
//    <ol className='contact-list'>
//       {props.contacts.map((contact) => (
//       <li key= {contact.id} className='contact-list-item'>  {/* put the key to keep track of which items have changed that way when something changes only that item has to be reloaded rather than everything */}
//       <div className='contact-avatar' style={{
//           backgroundImage: `url(${contact.avatarURL})`
//       }}/>
//       {contact.name}
//       <div className='contact-details'>
//           <p>{contact.name}</p>
//           <p>{contact.email}</p>
//       </div>
//   <button onClick={() => props.onDeleteContact(contact)} className='contact-remove'>
//       Remove
//   </button>
//       </li>
//   ))
// }
//    </ol>
//   )
// }



class ListBooks extends Component {
    static propTypes = {
       books: PropTypes.array.isRequired,
       changeShelf: PropTypes.func.isRequired
     }

    createBook = (book, changeShelf) => (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.cover})` }}></div>
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

              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {currentlyReading.map((book) => this.createBook(book, changeShelf))
                  }
                    </ol>
                  </div>
                </div>

              <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {wantToRead.map((book) => this.createBook(book, changeShelf))
                    }
                  </ol>
                  </div>
              </div>

              <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {read.map((book) => this.createBook(book, changeShelf))
                    }
                  </ol>
                  </div>
              </div>

              </div>
            </div>
            <div className="open-search">
  <Link to="/add">Add a book</Link>
        </div>
          </div>

                    )

                    }
                  }


// ListContacts.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired
// }




export default ListBooks  //so that we can import it in contacts.js
