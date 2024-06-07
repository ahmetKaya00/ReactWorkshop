import React, { Component } from 'react'

export default class FormDemo1 extends Component {
    state = {userName:'',email:''};

    onChangerHandler=(event)=>{
       let name = event.target.name;
       let value = event.target.value;

       this.setState({[name]:value})
    }
    onSubmitHandler=(event)=>{
        event.preventDefault();
        alert(this.state.userName);
        alert(this.state.email);
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
            <h3>User Name</h3>
            <input name='userName' onChange={this.onChangerHandler} type='text'></input>
            <h3>User Name is {this.state.userName}</h3>
            <h3>Email</h3>
            <input name='email' onChange={this.onChangerHandler} type='text'></input>
            <h3>Email is {this.state.email}</h3>
            <input type='submit' value="Save"></input>
        </form>
      </div>
    )
  }
}
