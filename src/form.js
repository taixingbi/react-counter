import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props)

    this.state= {
      name: "",
      password: ""
    }
    this.handleNameChange= this.handleNameChange.bind(this);
    this.handlePasswordChange= this.handlePasswordChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleNameChange(event){
    this.setState({
      name: event.target.value
    });
  }

  handlePasswordChange(event){
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event){
    alert("handleSubmit " + this.state.name + "  "+ this.state.password);

    event.preventDefault();
  }

  render() {
    return (
      <div>

        <form onSubmit= {this.handleSubmit} >
          <label>
            name
            <input type="text" name="name"  onChange={ this.handleNameChange}/>    
            password
            <input type="text" name="password"  onChange={ this.handlePasswordChange}/>     
          </label>

          <input type="submit"/>
        </form>

        {this.state.name}
        <br/>

        {this.state.password}

      </div>
    );
  }
}

export default Form;
