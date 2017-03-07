import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ListMaker from './list_maker.jsx';
import ListView from './list_view.jsx';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        listOfItems: ["Lorem Ipsum is simply dummy text of the printing", "and typesetting industry. Lorem Ipsum has been the industry's"]
      }
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
      console.log("listOfItems " + JSON.stringify(this.state.listOfItems));
      return(
        <div>
          <ListMaker handler={this.addItem.bind(this)} />
          <ListView list={this.state.listOfItems} handler={this.deleteItem.bind(this)} />
          
        </div>
      )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));