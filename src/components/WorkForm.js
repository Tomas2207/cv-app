import React, { useState } from 'react';

// class WorkForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       company: '',
//       position: '',
//       tasks: '',
//       dateFrom: '',
//       dateUntil: '',
//       infoSent: '',
//     };
//     (e) => setSchoolName(e.target.value) = (e) => setSchoolName(e.target.value).bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     const value = e.target.value;
//     this.setState({
//       [e.target.id]: value,
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.setState({
//       infoSent: !this.state.infoSent,
//     });
//   }
//   render() {
//     const { company, position, tasks, dateFrom, dateUntil, infoSent } =
//       this.state;
//     return (
//       <div className="box">
//         <h2>Work experience</h2>
//         <form action="submit" onSubmit={this.handleSubmit}>
//           <div>
//             <label htmlFor="company">Company Name:</label>
//             {!infoSent && (
//               <input
//                 type="text"
//                 name="company"
//                 id="company"
//                 onChange={(e) => setSchoolName(e.target.value)}
//                 value={company}
//               />
//             )}
//             {infoSent && <span>{company}</span>}
//           </div>
//           <div>
//             <label htmlFor="position">Position title:</label>
//             {!infoSent && (
//               <input
//                 type="text"
//                 name="position"
//                 id="position"
//                 onChange={(e) => setSchoolName(e.target.value)}
//                 value={position}
//               />
//             )}
//             {infoSent && <span>{position}</span>}
//           </div>

//           <label htmlFor="tasks">Main Tasks:</label>
//           {!infoSent && (
//             <textarea
//               name="tasks"
//               id="tasks"
//               cols="30"
//               rows="10"
//               onChange={(e) => setSchoolName(e.target.value)}
//               value={tasks}
//             ></textarea>
//           )}
//           {infoSent && <span className="taskSpan">{tasks}</span>}
//           <fieldset>
//             <legend>Date of study:</legend>
//             <div>
//               <label htmlFor="dateFrom">From:</label>
//               {!infoSent && (
//                 <input
//                   type="date"
//                   name="dateFrom"
//                   id="dateFrom"
//                   value={dateFrom}
//                   onChange={(e) => setSchoolName(e.target.value)}
//                 />
//               )}
//               {infoSent && <span>{dateFrom}</span>}
//             </div>
//             <div>
//               <label htmlFor="dateUntil">Until:</label>
//               {!infoSent && (
//                 <input
//                   type="date"
//                   name="dateUntil"
//                   id="dateUntil"
//                   value={dateUntil}
//                   onChange={(e) => setSchoolName(e.target.value)}
//                 />
//               )}
//               {infoSent && <span>{dateUntil}</span>}
//             </div>
//           </fieldset>
//           <button>Enter info</button>
//         </form>
//       </div>
//     );
//   }
// }

const WorkForm = () => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [tasks, setTasks] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateUntil, setDateUntil] = useState('');
  const [infoSent, setInfoSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfoSent(!infoSent);
  };

  return (
    <div className="box">
      <h2>Work experience</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="company">Company Name:</label>
          {!infoSent && (
            <input
              type="text"
              name="company"
              id="company"
              onChange={(e) => setCompany(e.target.value)}
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
              onChange={(e) => setPosition(e.target.value)}
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
            maxLength={250}
            onChange={(e) => setTasks(e.target.value)}
            value={tasks}
          ></textarea>
        )}
        {infoSent && <span className="taskSpan">{tasks}</span>}
        <fieldset>
          <legend>Date:</legend>
          <div>
            <label htmlFor="dateFrom">From:</label>
            {!infoSent && (
              <input
                type="date"
                name="dateFrom"
                id="dateFrom"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
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
                onChange={(e) => setDateUntil(e.target.value)}
              />
            )}
            {infoSent && <span>{dateUntil}</span>}
          </div>
        </fieldset>
        <button>Enter info</button>
      </form>
    </div>
  );
};

export default WorkForm;
