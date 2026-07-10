import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { registerUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // register user firebase call
    registerUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 mt-8  mx-auto max-w-4xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <label className="label">Your Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Your Name"
                  />

                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <fieldset className="fieldset">
                    <legend className="">Pick a Image</legend>
                    <input type="file" className="file-input" />
                    <label className="label">Max size 2MB</label>
                  </fieldset>
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">SignUp</button>
                </fieldset>
                <p>
                  Dont have an account ?{" "}
                  <a href="/login" className="text-blue-600">
                    SignIn
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
