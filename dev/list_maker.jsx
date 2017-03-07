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
    this.props.addCB(this.state.fieldDisplay);
  }

  handleInput (event) {
    this.setState({
      fieldDisplay: event.target.value
    })
  }

  render(){
    return(
      <form onSubmit={this.preventSubmit.bind(this)} className="form-inline" action="/add" method="POST">
        <label htmlFor="addListItem">Write it down!</label>
        

        <input onChange={this.handleInput.bind(this)} value={this.state.fieldDisplay} className="form-control" name="addListItem" id="addListItem" /><br />

        <button type="submit">Submit</button>
      </form>
    )

  }
}
export default ListMaker;


/*
  To handle the form, you need an onChange on the input with a callback.

  Every time the user types (changes the input), the callback sets the state.

  So the app gets rerendered with each click.

  As soon as the user finishes typing, the onSubmit at the top of the form
  prevents the default and sends the state.fieldDisplay back to the parent App
*/
