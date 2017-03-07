import React, {Component} from 'react';
import ListItem from './list_item.jsx';

function ListView({list, handler}) {
  return(
    <ul>
      {list.map( (item, key) => <ListItem item={item} handler={handler} key={key} />)}
    </ul>
  )
}

export default ListView;