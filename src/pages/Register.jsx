import React, { useContext, useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  // State-uri pentru stocarea informațiilor introduse de utilizator
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser, signUpProvider } = useContext(AuthContext);

  // Funcția care se ocupă de acțiunea de submit a formularului de înregistrare
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, displayName);
  };

  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div className="form-container mt-[5vh] w-[380px] h-[250px] bg-[#2c2f33] p-8 rounded-lg shadow-lg">
         {/* Formularul de înregistrare */}
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-[500] text-center tracking-[0.1em] mb-3" style={{ background: 'linear-gradient(to right, #9b1d20, #662d8c, #e67071)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Sign Up
          </h2>
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
