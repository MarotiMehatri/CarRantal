import React from "react";
import { assets } from "../../assets/assets";
import "./Login.css";
const Login = ({ setShowLogin }) => {
  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // //Gmail regex
    // const gmailpattern = /^[a-z]+@gmail\.com$/;

    // //Password regex
    // const passwordPattern = /^[A-Za-z0-9]$/;

    // if (!gmailpattern.test(email)) {
    //   alert("Gmail is wrong");
    //   return;
    // }

    // if (!passwordPattern.test(password)) {
    //   alert("Password is wrong");
    //   return;
    // }

    // alert("Password is Correct");

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (state === "register") {
      // CHECK USER EXISTS
      const userExists = users.find((u) => u.email === email);
      if (userExists) {
        alert("User already exists");
        return;
      }

      // SAVE NEW USER
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      alert("Account created successfully");

      // Reset form
      setName("");
      setEmail("");
      setPassword("");
      setState("login");
    } else {
      // LOGIN LOGIN
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert(`Login successful ${email}`);
        setShowLogin(false);
      } else {
        alert("Invalid Email or Password");
      }
    }
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center text-sm text-gray-600 bg-black/50 video-wrapper">
      {" "}
      <video
        className="bg-video"
        src={assets.Login_Video}
        autoPlay
        loop
        muted
        playsInline
      />{" "}
      <form
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white"
        style={{ backgroundImage: `url(${assets.Login_Page})` }}
      >
        <p className="text-2xl font-medium m-auto">
          <span className="text-primary">User</span>{" "}
          {state === "login" ? "Login" : "Sign Up"}
        </p>

        {state === "register" && (
          <div className="w-full">
            <p className="font-medium">Name</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name.."
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              type="text"
              required
            />
          </div>
        )}

        <div className="w-full">
          <p className="font-medium">Email</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email.."
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
            type="email"
            required
          />
        </div>

        <div className="w-full">
          <p className="font-medium">Password</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password.."
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
            type="password"
            required
          />
        </div>

        {state === "register" ? (
          <p>
            Already have account?{" "}
            <span
              onClick={() => setState("login")}
              className="text-primary cursor-pointer"
            >
              click here
            </span>
          </p>
        ) : (
          <p>
            Create an account?{" "}
            <span
              onClick={() => setState("register")}
              className="text-primary cursor-pointer"
            >
              click here
            </span>
          </p>
        )}

        <button
          type="submit"
          className="bg-primary hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer"
        >
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
