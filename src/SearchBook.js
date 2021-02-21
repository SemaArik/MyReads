import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList'
import { Route, Link, Router } from 'react-router-dom'


class SearchBook extends Component {
  state = {
    books: []
  }

  onQuery = (searchChars) => {
    if (searchChars !== "") {
      BooksAPI.search(searchChars).then((books) => {
        if (!books.error) {
          this.setShelf(books);
          this.setState(() => ({
            books: books
          }))
        } else {
          this.setState(() => ({
            books: []
          }));
        }
      })
    } else {
      this.setState(() => ({
        books: []
      }))
    }
  }

  setShelf = (books) => {
    const myBooks = this.props.myBooks;
    books.map(book => {
      Object.keys(myBooks).forEach((el) => {
        if (myBooks[el].id === book.id) {
          book.shelf = myBooks[el].shelf;
        }
      })
      return book;
    })
  }

  updateShelfs = (book, movedShelf) => {
    this.props.updateShelfs(book, movedShelf);
  }

  render() {
    const { books } = this.state;
    const booksLength = books.length > 0;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/"><button className="close-search">Close</button></Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.onQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          {booksLength ? (
            <ol className="books-grid">
              <BooksList
                bookListArray={books}
              />

            </ol>
          ) : (
              <></>
            )
          }
        </div>
      </div>

    );
  }
}

export default SearchBook