import React, {Component} from 'react';
import ListItem from './list_item.jsx';

function ListView(props) {
  return(
    <ul>
      {props.list.map( (item, idx) => <ListItem item={item} func={props.cb} key={idx} idx={idx} />)}
    </ul>
  )
}

export default ListView;