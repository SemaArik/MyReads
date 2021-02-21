import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksList from './BooksList'
import * as BooksAPI from './BooksAPI'


class ListShelfsBooks extends Component {
  static propTypes = {
    shelfs: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }
  
  

  render() {
    
    const { shelfs} = this.props

    return (

      <div className="list-books">

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              {Object.keys(shelfs).map((key) => (

                <div>
                  <h2 className="bookshelf-title">{shelfs[key][0]}</h2>
                  <BooksList
                    bookListArray={shelfs[key][1]} changeShelf ={this.changeShelf} 
                  />
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>


    )
  }
}

export default ListShelfsBooks