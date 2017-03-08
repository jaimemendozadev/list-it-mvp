import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ListMaker from './list_maker.jsx';
import ListView from './list_view.jsx';
import axios from 'axios';


class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        listOfItems: []
      }
    }

    componentDidMount() {
      console.log("inside componentDidMount");
      var newList;

      axios.get('http://localhost:3000/list')
      .then(res => {
        newList = res.data.map((item) => item["listItem"]);
        this.setState({listOfItems: newList});
      });

    
      
    }

    addItem(item) {
      let update = this.state.listOfItems.slice();
      update.push(item);
      this.setState({listOfItems: update});
    }

    deleteItem(key) {
      let update = this.state.listOfItems.slice();
      update.splice(key, 1)

      this.setState({listOfItems: update});
      
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