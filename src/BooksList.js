import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ShelfChanger from './ShelfChanger';

class BooksList extends Component {
  static propTypes = {
    bookListArray: PropTypes.array.isRequired,
    /* onDeleteContact: PropTypes.func.isRequired,*/
  }


  state = {
    query: ''
  }
  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }
  clearQuery = () => {
    this.updateQuery('')
  }
  render() {

    const { bookListArray } = this.props
    return (
      <div className="bookshelf-books">

        <ol className="books-grid">


          {bookListArray.map((bookItem) => (
            <li>
              <div className="book">
                <div className="book-top">

                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookItem.imageLinks.thumbnail})` }}></div>
                  <ShelfChanger currentShelf={bookItem.shelf} />
                </div>
                <div className="book-title">{bookItem.title}</div>
                {bookItem.authors ? (bookItem.authors.map(author => (
                  <div key={author} className="book-authors">{author}</div>
                ))) : ''}
              </div>
            </li>
          ))}



        </ol>
      </div>

    )
  }
}

export default BooksList