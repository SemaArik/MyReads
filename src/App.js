import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import './App.css'
import ListShelfsBooks from './ListShelfsBooks'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    bookShelfs: []
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
        temp = groupBy(bookList,key);
        this.setState(() => ({
          bookShelfs: Object.entries(temp)
        }))
      })

      

      
      
  }
  render() {
    
    return (

      <div className="app">

        <div>
              <ListShelfsBooks
                shelfs = {this.state.bookShelfs}
              />
          </div>
        
    
      </div>
    )

    

  }
}

export default BooksApp
