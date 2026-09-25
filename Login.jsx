import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ==========================================
  // SET YOUR REQUIRED CREDENTIALS HERE
  // ==========================================
  const CORRECT_USER_ID = "admin";
  const CORRECT_PASSWORD = "railway123";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if entered credentials match the exact correct ones
    if (username === CORRECT_USER_ID && password === CORRECT_PASSWORD) {
      onLogin({ name: username, role: "Operations Manager" });
    } else {
      alert("Invalid User ID or Password. Access Denied!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "radial-gradient(circle at top right, #1e1b4b 0%, #0f172a 50%, #090d16 100%)",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "35px",
          background: "rgba(30, 41, 59, 0.85)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <div
            style={{
              width: "55px",
              height: "55px",
              margin: "0 auto 15px",
              background: "linear-gradient(135deg, #6366f1, #3b82f6)",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              boxShadow: "0 0 20px rgba(99, 102, 241, 0.6)",
            }}
          >
            🚆
          </div>
          <h2 style={{ margin: "0 0 6px", fontSize: "22px" }}>AI Rail Planner</h2>
          <p style={{ margin: 0, color: "#94a3b8", fontSize: "13px" }}>
            Indian Railways Operations Sign-In
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "18px" }}>
            <label
              style={{
                display: "block",
                fontSize: "12px",
                fontWeight: 600,
                color: "#38bdf8",
                marginBottom: "6px",
              }}
            >
              User ID
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter User ID"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                fontSize: "12px",
                fontWeight: 600,
                color: "#38bdf8",
                marginBottom: "6px",
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              style={inputStyle}
            />
          </div>

          <button type="submit" className="generate-button">
            🔒 Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "12px 14px",
  borderRadius: "8px",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  background: "#0f172a",
  color: "#ffffff",
  fontSize: "13px",
  outline: "none",
};

export default Login;