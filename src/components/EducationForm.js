import React, { Component } from 'react';

class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: '',
      studyTitle: '',
      studyDateFrom: '',
      studyDateUntil: '',
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
    const { schoolName, studyTitle, studyDateFrom, studyDateUntil, infoSent } =
      this.state;

    return (
      <div className="box">
        <h2>Education</h2>
        <form action="submit" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="schoolName">School Name:</label>
            {!infoSent && (
              <input
                type="text"
                name="schoolName"
                id="schoolName"
                value={schoolName}
                onChange={this.handleChange}
              />
            )}
            {infoSent && <span>{schoolName}</span>}
          </div>
          <div>
            <label htmlFor="studyTitle">Title of study:</label>
            {!infoSent && (
              <input
                type="text"
                name="studyTitle"
                id="studyTitle"
                value={studyTitle}
                onChange={this.handleChange}
              />
            )}
            {infoSent && <span>{studyTitle}</span>}
          </div>
          <div>
            <fieldset>
              <legend>Date of study:</legend>
              <div>
                <label htmlFor="studyDateFrom">From:</label>
                {!infoSent && (
                  <input
                    type="date"
                    name="studyDateFrom"
                    id="studyDateFrom"
                    value={studyDateFrom}
                    onChange={this.handleChange}
                  />
                )}
                {infoSent && <span>{studyDateFrom}</span>}
              </div>
              <div>
                <label htmlFor="studyDateUntil">Until:</label>
                {!infoSent && (
                  <input
                    type="date"
                    name="studyDateUntil"
                    id="studyDateUntil"
                    value={studyDateUntil}
                    onChange={this.handleChange}
                  />
                )}
                {infoSent && <span>{studyDateUntil}</span>}
              </div>
            </fieldset>
          </div>
          {!infoSent && <button>Enter info</button>}
          {infoSent && <button>Edit info</button>}
        </form>
      </div>
    );
  }
}

export default EducationForm;
