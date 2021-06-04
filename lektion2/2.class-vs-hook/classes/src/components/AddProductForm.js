import React, { Component } from "react";

export default class AddProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desc: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addProductCallback({
      id: Date.now().toString(),
      name: this.state.name,
      desc: this.state.desc,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={this.onChange}
        />
        <input
          type="text"
          placeholder="description"
          name="desc"
          value={this.state.desc}
          onChange={this.onChange}
        />
        <button>Lägg till</button>
        {this.state.name} {this.state.desc}
      </form>
    );
  }
}
