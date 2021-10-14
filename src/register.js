import './css/register.css';
import { useState } from "react";

// const SPREADSHEET_ID = "1x1t6XqqLazvLXRcpeX-aXy3PJKeixlKzPNhxfh6OwCo";
// const CLIENT_ID = "866141630253-r3av3frghth77e4u6of53n3vkb1aee2t.apps.googleusercontent.com";
// const API_KEY = "AIzaSyAPLgdsAr40dUW4tlEMID5dPzFaLvWx5V0";
// const SCOPE = "https://www.googleapis.com/auth/spreadsheets";
//
// const onFormSubmit = () => {
//   //handle form data here
// }


function Register() {
  const [data, setData] =useState({
    firstName:"",
    lastName:"",
    email:"",
    presenting:"",
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    console.log(data);
    e.preventDefault();
    try {
      await fetch(
        "https://sheet.best/api/sheets/f9f1a0aa-b2f2-43f7-8f14-0df64d009638",
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
        }
      );
      setData({
        firstName:"",
        lastName:"",
        email:"",
        presenting:"",
      });
      const form = document.querySelector("form");
      console.log(form);
      form.reset();
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="register">
      <div className="registerTitle">Register</div>
      <form className="registrationForm" onSubmit={handleSubmit}>
        <input
          className="formInput"
          type="text"
          name="firstName"
          placeholder="first name"
          value={data.firstName}
          onChange={handleChange}
          />
        <input
          className="formInput"
          type="text"
          name="lastName"
          placeholder="last name"
          value={data.lastName}
          onChange={handleChange}
          />
        <input
          className="formInput"
          type="text"
          name="email"
          placeholder="email"
          value={data.email}
          onChange={handleChange}
          />
        <div className="formCheck">
          <div className="formSpan">I'm interested in presenting</div>
          <input
            type="hidden"
            name="presenting"
            value="0" />
          <input
            className="formCheckmark"
            type="checkbox"
            name="presenting"
            checked={data.presenting.complete}
            onChange={handleChange}
            />
          <input
            type="hidden"
            name="form"
            value="register"
            />
        </div>
        <input
          className="formInput formSumbit"
          type="submit"
          value="submit"
          />
      </form>
    </div>
  );
}

export default Register;
