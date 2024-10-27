import React, { useState } from 'react';
import './App.css';

function App() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    success: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ ...formState, success: true });
  };

  return (
    <div className="container mt-5">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            name="message"
            rows="3"
            value={formState.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {formState.success && <div className="alert alert-success mt-3">Success! Form submitted.</div>}
    </div>
  );
}

export default App;
