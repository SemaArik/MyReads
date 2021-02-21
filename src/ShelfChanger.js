import React, { Component } from 'react'
import PropTypes from 'prop-types'


const ShelfChanger = props => {
  const { currentShelf } = props;

  const changeShelfEvent = (movedShelf) => {
    props.changeShelf(movedShelf);
  }
  return ( 
    <div className="book-shelf-changer">
      <select value={currentShelf ? currentShelf : 'none'} onChange={(event) => changeShelfEvent(event.target.value)}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want To Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

ShelfChanger.propTypes = {
  currentShelf: PropTypes.string,
  changeShelf: PropTypes.func.isRequired
}

export default ShelfChanger