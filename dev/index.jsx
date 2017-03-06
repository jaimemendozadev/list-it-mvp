import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ListMaker from './list_maker.jsx';


class App extends Component {
    constructor(props){
      super(props);
    }

    render(){
      return(
        <div>
          <ListMaker />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));