import React, { Component } from 'react';

class WorkForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      position: '',
      tasks: '',
      dateFrom: '',
      dateUntil: '',
      infoSent: '',
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
    const { company, position, tasks, dateFrom, dateUntil, infoSent } =
      this.state;
    return (
      <div className="box">
        <h2>Work experience</h2>
        <form action="submit" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="company">Company Name:</label>
            {!infoSent && (
              <input
                type="text"
                name="company"
                id="company"
                onChange={this.handleChange}
                value={company}
              />
            )}
            {infoSent && <span>{company}</span>}
          </div>
          <div>
            <label htmlFor="position">Position title:</label>
            {!infoSent && (
              <input
                type="text"
                name="position"
                id="position"
                onChange={this.handleChange}
                value={position}
              />
            )}
            {infoSent && <span>{position}</span>}
          </div>

          <label htmlFor="tasks">Main Tasks:</label>
          {!infoSent && (
            <textarea
              name="tasks"
              id="tasks"
              cols="30"
              rows="10"
              onChange={this.handleChange}
              value={tasks}
            ></textarea>
          )}
          {infoSent && <span className="taskSpan">{tasks}</span>}
          <fieldset>
            <legend>Date of study:</legend>
            <div>
              <label htmlFor="dateFrom">From:</label>
              {!infoSent && (
                <input
                  type="date"
                  name="dateFrom"
                  id="dateFrom"
                  value={dateFrom}
                  onChange={this.handleChange}
                />
              )}
              {infoSent && <span>{dateFrom}</span>}
            </div>
            <div>
              <label htmlFor="dateUntil">Until:</label>
              {!infoSent && (
                <input
                  type="date"
                  name="dateUntil"
                  id="dateUntil"
                  value={dateUntil}
                  onChange={this.handleChange}
                />
              )}
              {infoSent && <span>{dateUntil}</span>}
            </div>
          </fieldset>
          <button>Enter info</button>
        </form>
      </div>
    );
  }
}

export default WorkForm;
