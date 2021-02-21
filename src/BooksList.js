import React, { Component } from 'react'
import PropTypes from 'prop-types'


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
    const { query } = this.state
    const { bookListArray, onDeleteContact } = this.props

   

    return (    
                  <div className="bookshelf-books">
                
                    <ol className="books-grid">

                          
                    {bookListArray.map((book1) => (
                      <li>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book1.imageLinks.thumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select>
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book1.title}</div>
                        <div className="book-authors">{book1.authors}  </div>
                      </div>
                      </li>
                    
              
                    ))}   

              
                     
                    </ol>
                  </div>
               
    )
  }
}

export default BooksList