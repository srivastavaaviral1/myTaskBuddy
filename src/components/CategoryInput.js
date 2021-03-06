import React, { Component } from 'react';
import actions from '../redux/actions';


// const CategoryInput = createReactClass({
class CategoryInput extends Component {
  // getInitialState() {
  //   return {
  //     inputText: '',
  //     editing: true,
  //   };
  // },
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      editing: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }


  handleChange(event) {
    this.setState({
      inputText: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log("submit button is woking?");
    if (this.state.inputText !== '') {
    // console.log("no input");
      this.props.dispatch(actions.addCategory(this.state.inputText));
      this.setState({
        inputText: '',
        editing: true,
      });
    }
  }

  handleEdit() {
    if (this.props.collapsed) {
    // console.log(this.props.collapsed);
      this.props.dispatch(actions.handleCollapsed());
      this.setState({
        editing: false,
      });
    } else {
      this.setState({
        editing: false,
      });
    }
  }

  render() {
    if (this.state.editing) {
      return (
        <div className="sidebarItem categoryInput">
          {/* <button onClick={this.handleEdit}>Add a new category</button> */}
          <a role="presentation" onClick={this.handleEdit}>
            <span className="list-icon"> <i className="fa fa-plus" /></span>
            <span className="title">Add a new category</span>
          </a>
        </div>
      );
    } else if (!this.state.editing) {
      return (
        <div className="categoryInput">
          <form onSubmit={this.handleSubmit}>
            <input className="new-todo" type="text" placeholder="Enter your Category" value={this.state.inputText} onChange={this.handleChange} />
          </form>
        </div>
      );
    }
  }
}

export default CategoryInput;
