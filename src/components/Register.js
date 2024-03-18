import React, { useState, useRef, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { signIn, logIn } from "../utils/authentication";
import GoogleIcon from "../icons/google_icon";
import {signInWithGmail} from '../utils/authentication';

function Register() {
  console.log(getAuth());
  const name = useRef(null);
  const password = useRef(null);
  const email = useRef(null);
  const img = "../public/light-city.jpg";
  const [signStatus, changeSignStatus] = useState(true);
  useEffect(() => {
    console.log(email, password);
  }, []);
  async function handleSubmit(e) {
    let error = 0;
    error =
      (signStatus &&
        (await signIn(email.current.value, password.current.value))) ||
      true;
    console.log(error);
    error =
      (!signStatus &&
        (await logIn(email.current.value, password.current.value))) ||
      true;
    console.log(error);
  }
  return (
    <>
      <div
        className=" from-themePrimary w-full h-full  absolute z-10 bg-opacity-15"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <form
          className="text-center mx-8 md:w-1/3 sm:mx-auto top-36 relative bg-gray-900 box-border text-sm sm:text-xl  sm:width-1/3 flex-col justify-center items-center pb-5 px-8 pt-8 rounded-lg shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2 className="sm:text-3xl text-2xl font-bold sm:font-extrabold sm:text-4xl text-white mb-6">
            {signStatus ? `Create your account` : `Log in`}
          </h2>

          <input
            className="w-full py-2 px-4 mb-4 bg-gray-800 border border-gray-600 rounded text-white"
            type="email"
            placeholder="Email"
            ref={email}
          />

          {signStatus && (
            <input
              className="w-full py-2 px-4 mb-4 bg-gray-800 border border-gray-600 rounded text-white"
              type="text"
              placeholder="Name"
              ref={name}
            />
          )}

          <input
            className="w-full py-2 px-4 mb-6 bg-gray-800 border border-gray-600 rounded text-white"
            type="password"
            placeholder="Password"
            ref={password}
          />

          <button
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-400 focus:outline-none focus:shadow-outline-red"
            type="submit"
            onClick={handleSubmit}
          >
            {signStatus ? `Sign Up` : `Log In`}
          </button>
          <p
            className="mx-auto text-white my-2 select-none cursor-pointer"
            onClick={() => changeSignStatus(!signStatus)}
          >
            {signStatus
              ? "Already signed up? Log in"
              : "Don't have an account? Sign up"}
          </p>
          <div>
            <p className="mx-auto text-yellow-300 my-2 select-none cursor-pointer">
              Register using
            </p>
            <div className="w-5 h-10 m-auto cursor-pointer" onClick={signInWithGmail}>
              <GoogleIcon />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Register;
