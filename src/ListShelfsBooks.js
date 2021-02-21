import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksList from './BooksList'


class ListShelfsBooks extends Component {
  static propTypes = {
    shelfs: PropTypes.array.isRequired,
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
    const { shelfs, onDeleteContact } = this.props

    return (
     
          <div className="list-books">
           
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  {Object.keys(shelfs).map((key) => (
                    
                    <div>
                      <h2 className="bookshelf-title">{shelfs[key][0]}</h2>
                         <BooksList
                            bookListArray = {shelfs[key][1]}
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