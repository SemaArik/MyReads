import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BookItem from './BookItem';

class BooksList extends Component {
  static propTypes = {
    bookListArray: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
    showNone:PropTypes.bool
  }

  
 

  render() {

    

    const { bookListArray } = this.props
    return (
      <div className="bookshelf-books">

        <ol className="books-grid">
          {bookListArray.map((bookItem) => (
              <BookItem key={bookItem.id} bookItem={bookItem} changeShelf={this.props.changeShelf} showNone={this.props.showNone} />
          ))}
        </ol>
      </div>

    )
  }
}

export default BooksList