import React, { useContext, useState } from "react"; 
import { Link } from "react-router-dom"; 
import GoogleIcon from "../assets/icons/GoogleIcon"; 
import { AuthContext } from "../context/AuthContext"; 

const Login = () => { // Definirea componentei Login
  const [email, setEmail] = useState(""); // Starea pentru emailul introdus în formularul de autentificare
  const [password, setPassword] = useState(""); // Starea pentru parola introdusă în formularul de autentificare
  const { signIn, signUpProvider, forgotPassword } = useContext(AuthContext); // Extrage funcțiile necesare pentru autentificare din contextul de autentificare

  // Eveniment pentru formularul de Login
  const handleSubmit = (e) => {
    e.preventDefault(); // Oprirea comportamentului implicit al formularului de trimis date
    signIn(email, password); // Apelarea funcției signIn pentru autentificarea utilizatorului
  };

  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]"> {/* Div principal pentru întreaga pagină de autentificare */}
      <div className="form-container mt-[10vh] w-[380px] h-[500px] bg-[#2c2f33] p-8 rounded-lg shadow-lg"> {/* Container pentru formularul de autentificare */}
        <form onSubmit={handleSubmit}> {/* Formularul de autentificare */}
          <h2 className="text-2xl font-[500] text-center tracking-[0.1em] mb-3" style={{ background: 'linear-gradient(to right, #9b1d20, #662d8c, #e67071)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> {/* Titlul formularului de autentificare */}
            Sign In
          </h2>
          {/* Câmpurile pentru introducerea emailului și a parolei */}
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
          {/* Link către pagina de recuperare a parolei și către pagina de înregistrare */}
          <div className="flex justify-between text-sm">
            <span
              onClick={() => forgotPassword(email)}
              className="py-3 cursor-pointer text-[#662d8c] hover:text-[#e67071]"
            >
              Forgot Password
            </span>
            <Link
              className="py-3 cursor-pointer text-[#662d8c] hover:text-[#e67071]"
              to="/register"
            >
              Sign Up
            </Link>
          </div>
          {/* Buton pentru autentificare */}
          <button className="w-full py-3 mt-4 bg-gradient-to-r from-[#9b1d20] via-[#662d8c] to-[#e67071] text-white rounded-lg shadow-md hover:from-[#662d8c] hover:to-[#9b1d20] transition-colors duration-300" type="submit">
            Login
          </button>
          {/* Buton pentru autentificare cu Google */}
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

export default Login; // Exportă componenta Login pentru a putea fi utilizată în alte părți ale aplicației
