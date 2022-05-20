import React, { useState } from 'react';

const GeneralForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [infoSent, setInfoSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfoSent(!infoSent);
  };

  return (
    <div className="box">
      <h2>General Information</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          {!infoSent && (
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          )}
          {infoSent && <span>{name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          {!infoSent && (
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          )}
          {infoSent && <span>{email}</span>}
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          {!infoSent && (
            <input
              type="tel"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          )}
          {infoSent && <span>{phone}</span>}
        </div>
        {!infoSent && <button>Enter info</button>}
        {infoSent && <button>Edit info</button>}
      </form>
    </div>
  );
};

export default GeneralForm;
