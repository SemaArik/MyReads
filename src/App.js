import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import './App.css'
import ListShelfsBooks from './ListShelfsBooks'
import Search from './SearchBook'



class BooksApp extends React.Component {
  state = {
    bookShelfs: [],
    allBooks: []
  }
   
   key = 'shelf';

   groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {}); 
  };

  changeShelf = (updatedBook, shelf) => {
    BooksAPI.update(updatedBook, shelf).then(() => {
      this.setState((prevState) => ({
        allBooks: prevState.allBooks.filter(book => book.id !== updatedBook.id).concat(updatedBook),
        bookShelfs: Object.entries(this.groupBy(this.state.allBooks, this.key))
      }))
    });
  }

   componentDidMount() {
    BooksAPI.getAll()
      .then((bookList) => {
        this.setState(() => ({
          bookShelfs: Object.entries(this.groupBy(bookList, this.key)),
          allBooks: bookList
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (<Search myBooks={this.state.allBooks} changeShelf={this.changeShelf}></Search>)} />

        <Route path="/" exact render={() => (<div className="list-books">
          <div className="list-books-title"><h1>MyReads</h1></div>
          <ListShelfsBooks
            shelfs={this.state.bookShelfs} changeShelf={this.changeShelf}
          />
          <div className="open-search">
            <Link to='/search'><button>Add a book</button></Link>
          </div>
        </div>
        )} />
      </div>
    )

  }
}

export default BooksApp
