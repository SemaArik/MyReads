import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ShelfChanger from './ShelfChanger';

class BookItem extends Component {
  static propTypes = {
    bookItem: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }



  render() {

    const { bookItem} = this.props

    let thumbnail = "";
    try {
      thumbnail = bookItem.imageLinks.thumbnail;
    } catch (error) {
      // ...
    }
     
    const changeBookShelf = (movedShelf) => {
      this.props.changeShelf(bookItem,movedShelf);
    }
    
    return (

 
      <li>
        <div className="book">
          <div className="book-top">

            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
            <ShelfChanger currentShelf={bookItem.shelf} changeShelf={changeBookShelf} />
          </div>
          <div className="book-title">{bookItem.title}</div>
          {bookItem.authors ? (bookItem.authors.map(author => (
            <div key={author} className="book-authors">{author}</div>
          ))) : ''}
        </div>
      </li>


    )
  }
}

export default BookItem