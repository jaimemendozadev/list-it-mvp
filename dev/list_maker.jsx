import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ListMaker extends Component {
  constructor(props){
    super(props);
    this.state = {
      fieldDisplay: "Type something here."
    }
  }

  preventSubmit(event){
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.preventSubmit} className="form-inline" action="/add" method="POST">
        <label htmlFor="addListItem">Write it down!</label>
        
        <input className="form-control" onClick={(event) => addCB(event)} onChange={(event) => this.setState({fieldDisplay: event.target.value})}name="addListItem" id="addListItem" value={this.state.fieldDisplay}/><br />

        <button type="submit">Submit</button>
      </form>
    )

  }
}
export default ListMaker;