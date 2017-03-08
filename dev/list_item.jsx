import React, {Component} from 'react';

function ListItem(props) {
  return(
    //passing in an obj and rendering the value at key "listItem"
    <li onClick={(event) => props.func(props.item["_id"])}>{props.item["listItem"]}</li>
        
  )
}

export default ListItem;