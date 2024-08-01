import React from "react";
import backImg from "../assets/backgroundimg.jpeg";
import "../styling/Registration.css";
import { useForm } from "react-hook-form";

function Registration() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="register">
      <div className="col-1">
        <h2>Sign Up</h2>

        <form
          id="form"
          className="flex flex-col form"
          onSubmit={handleSubmit()}
        >
          <input type="text" {...register("username")} placeholder="username" />
          <input type="text" {...register("email")} placeholder="email" />
          <input type="text" {...register("password")} placeholder="password" />
          <input
            type="text"
            {...register("confirmpassword")}
            placeholder="confirm password"
          />

          <button className="btn">Register</button>
        </form>
      </div>
      <div className="col-2"></div>
    </div>
  );
}

export default Registration;
