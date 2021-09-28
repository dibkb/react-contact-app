import React, { useState } from "react";
import "./Header.css";
const Header = ({ addContactHandler }) => {
  //   const [form, setForm] = useState({ name: "", email: "" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if(name === '' || email === ''){
      e.preventDefault();
      alert('All fields are mandatory')
      return 
    }
    addContactHandler({ name, email });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="input-wrapper">
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="input-wrapper">
        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Header;
