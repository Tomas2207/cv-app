import React, { useState } from 'react';

const EducationForm = () => {
  const [schoolName, setSchoolName] = useState('');
  const [studyTitle, setStudyTitle] = useState('');
  const [studyDateFrom, setStudyDateFrom] = useState('');
  const [studyDateUntil, setStudyUntil] = useState('');
  const [infoSent, setInfoSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfoSent(!infoSent);
  };

  return (
    <div className="box">
      <h2>Education</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="schoolName">School Name:</label>
          {!infoSent && (
            <input
              type="text"
              name="schoolName"
              id="schoolName"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
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
              onChange={(e) => setStudyTitle(e.target.value)}
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
                  onChange={(e) => setStudyDateFrom(e.target.value)}
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
                  onChange={(e) => setStudyUntil(e.target.value)}
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
};

export default EducationForm;
