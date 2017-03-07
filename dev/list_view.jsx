import React, {Component} from 'react';
import ListItem from './list_item.jsx';

function ListView({list, cb}) {
  return(
    <ul>
      {list.map( (item, idx) => <ListItem item={item} func={cb} key={idx} />)}
    </ul>
  )
}

export default ListView;