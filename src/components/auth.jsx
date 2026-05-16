import { useState } from "react";
import "../styles/components/auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = new FormData(e.target);

  const url = isLogin
    ? "http://localhost/JatraPath_Website/backend/controllers/login.php"
    : "http://localhost/JatraPath_Website/backend/controllers/register.php";

  const res = await fetch(url, {
    method: "POST",
    body: form,
  });

  const data = await res.json(); // ✅ IMPORTANT FIX

  console.log("SERVER RESPONSE:", data);

  if (data.status === "success") {
    localStorage.setItem("user", JSON.stringify(data.user)); // ✅ SAVE USER

    alert("Login Success");

    window.location.href = "http://localhost:5173/JatraPath_Website/user";
  } 
  else if (data.status === "invalid_password") {
    alert("Wrong password");
  } 
  else if (data.status === "user_not_found") {
    alert("User not found");
  } 
  else if (data === "success") {
    // fallback for register
    setIsLogin(true);
    alert("Registered successfully. Now login!");
  } 
  else {
    alert(data);
  }
};

  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        <div className="auth-header">
          <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>
          <p>
            {isLogin
              ? "Login to continue your journey"
              : "Join JatraPath today"}
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>

          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          {!isLogin && (
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              required
            />
          )}

          <button type="submit">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign up" : " Login"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default Auth;