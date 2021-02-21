import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link, Router } from 'react-router-dom'
import './App.css'
import ListShelfsBooks from './ListShelfsBooks'
import Search from './SearchBook'



class BooksApp extends React.Component {
  state = {
    bookShelfs: [],
    allBooks: []
  }

  changeShelf = (chbook, chshelf) => {
    BooksAPI.update(chbook, chshelf).then(() => {
      this.setState((prevState) => ({
        allBooks: prevState.books.filter(book => book.id !== chbook.id).concat(chbook)
      }))
    });
  }



  componentDidMount() {
    const groupBy = (array, key) => {
      // Return the end result
      return array.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
          currentValue
        );
        // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
        return result;
      }, {}); // empty object is the initial value for result object
    };

    const key = 'shelf';
    var temp = [];



    BooksAPI.getAll()
      .then((bookList) => {
        temp = groupBy(bookList, key);
        this.setState(() => ({
          bookShelfs: Object.entries(temp),
          allBooks: bookList
        }))
      })
  }
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (<Search myBooks={this.state.allBooks} updateShelfs={this.updateShelfs}></Search>)} />

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
