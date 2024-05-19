import React, { useContext, useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser, signUpProvider } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, displayName);
  };

  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div className="form-container mt-[5vh] w-[380px] h-[580px] bg-[#2c2f33] p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-[500] text-center tracking-[0.1em] mb-3" style={{ background: 'linear-gradient(to right, #9b1d20, #662d8c, #e67071)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Sign Up
          </h2>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_text"
              className="peer bg-transparent border-b-2 border-[#662d8c] focus:outline-none focus:border-[#e67071] w-full text-lg text-[#9b1d20]"
              placeholder=" "
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label
              htmlFor="floating_text"
              className="absolute text-lg text-[#662d8c] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#e67071] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="floating_text"
              type="text"
              className="peer bg-transparent border-b-2 border-[#662d8c] focus:outline-none focus:border-[#e67071] w-full text-lg text-[#9b1d20]"
              placeholder=" "
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <label
              htmlFor="floating_text"
              className="absolute text-lg text-[#662d8c] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#e67071] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="floating_email"
              type="email"
              className="peer bg-transparent border-b-2 border-[#662d8c] focus:outline-none focus:border-[#e67071] w-full text-lg text-[#9b1d20]"
              placeholder=" "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="floating_email"
              className="absolute text-lg text-[#662d8c] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#e67071] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              name="floating_password"
              type="password"
              className="peer bg-transparent border-b-2 border-[#662d8c] focus:outline-none focus:border-[#e67071] w-full text-lg text-[#9b1d20]"
              placeholder=" "
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="floating_password"
              className="absolute text-lg text-[#662d8c] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#e67071] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <button className="w-full py-3 mt-4 bg-gradient-to-r from-[#9b1d20] via-[#662d8c] to-[#e67071] text-white rounded-lg shadow-md hover:from-[#662d8c] hover:to-[#9b1d20] transition-colors duration-300" type="submit">
            Register
          </button>
          <button
            className="w-full py-3 mt-4 flex justify-center items-center bg-gradient-to-r from-[#9b1d20] via-[#662d8c] to-[#e67071] text-white rounded-lg shadow-md hover:from-[#662d8c] hover:to-[#9b1d20] transition-colors duration-300"
            type="button"
            onClick={() => signUpProvider()}
          >
            Continue with Google
            <GoogleIcon color="currentColor" className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
