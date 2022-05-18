import React, { Component } from 'react';

class GeneralForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      infoSent: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      [e.target.id]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      infoSent: !this.state.infoSent,
    });
  }

  render() {
    const infoSent = this.state.infoSent;
    return (
      <div className="box">
        <h2>General Information</h2>
        <form action="submit" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            {!infoSent && (
              <input
                type="text"
                id="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            )}
            {infoSent && <span>{this.state.name}</span>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            {!infoSent && (
              <input
                type="email"
                id="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            )}
            {infoSent && <span>{this.state.email}</span>}
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            {!infoSent && (
              <input
                type="tel"
                id="phone"
                onChange={this.handleChange}
                value={this.state.phone}
              />
            )}
            {infoSent && <span>{this.state.phone}</span>}
          </div>
          {!infoSent && <button>Enter info</button>}
          {infoSent && <button>Edit info</button>}
        </form>
      </div>
    );
  }
}

export default GeneralForm;
