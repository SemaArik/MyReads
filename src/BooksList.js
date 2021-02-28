import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BookItem from './BookItem';

class BooksList extends Component {
  static propTypes = {
    bookListArray: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  
 

  render() {

    

    const { bookListArray } = this.props
    return (
      <div className="bookshelf-books">

        <ol className="books-grid">
          {bookListArray.map((bookItem) => (
              <BookItem bookItem={bookItem} changeShelf={this.props.changeShelf}  />
          ))}
        </ol>
      </div>

    )
  }
}

export default BooksList