import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ListMaker extends Component {
  constructor(props){
    super(props);
    this.state = {
      fieldDisplay: "Type something here."
    }
  }
  render(){
    return(
      <form action="/add" method="POST">
        <label for="addListItem">Write it down!</label>
        
        <input onChange={(event) => this.setState({fieldDisplay: event.target.value})}
        name="addListItem" id="addListItem" value={this.state.fieldDisplay}>

        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default ListMaker;