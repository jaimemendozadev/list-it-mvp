import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ListMaker from './list_maker.jsx';
import ListView from './list_view.jsx';
import axios from 'axios';


class App extends Component {
    constructor(props){
      super(props);
      /* listOfItems was originally an array of strings
         changed it to be an array of objects */
      this.state = {
        listOfItems: []
      }
    }


    componentDidMount() {
      console.log("inside componentDidMount");
      var newList;

      /*
        The way promises work is that we're making
        an async call, we don't know when we're going
        to get a response. When we do, we can do 
        something with the response inside then.
      */

      axios.get('http://localhost:3000/list')
      .then(res => {
        console.log("data is " + JSON.stringify(res));

        this.setState({listOfItems: res.data});
      });

    
      
    }

    addItem(item) {
      let update = this.state.listOfItems.slice();
      update.push(item);
      this.setState({listOfItems: update});
    }

    deleteItem(key) {
      //console.log("the key is " + key);
      
      let update = this.state.listOfItems.slice();

      //console.log("length before filter " + update.length);
      
      update = update.filter((item) => item["_id"] != key)

      //console.log("length after filter " + update.length);

      this.setState({listOfItems: update});

      axios.delete(`http://localhost:3000/${key}`)
      .then(console.log("delete request sent to server"));
      
    }

    render(){
      return(
        <div>
          <ListMaker addCB={this.addItem.bind(this)} />


          <ListView list={this.state.listOfItems} cb={this.deleteItem.bind(this)} />
          
        </div>
      )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));

/*
  Note to self, do not destruct props anymore. Causes too many errors. 
  For example, destructing the props might cause a callback function
  you pass down from parent to children components to be undefined.

  Cannot use list item keys to update state in parent app, see:
  https://facebook.github.io/react/warnings/special-props.html


*/