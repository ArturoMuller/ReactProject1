import React, { Component } from 'react'


class bookFunctions extends Component{

   static createBook : (book, changeShelf="none") => (
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

}

export default bookFunctions