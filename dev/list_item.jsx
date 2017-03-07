import React, {Component} from 'react';

function ListItem(props) {
  return(
    <li onClick={(event) => props.func(props.idx)}>{props.item}</li>
        
  )
}

export default ListItem;