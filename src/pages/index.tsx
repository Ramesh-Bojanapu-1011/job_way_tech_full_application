import Head from "next/head";
import { CSSProperties, FormEvent, useEffect, useState } from "react";

import { authService } from "@/services/authService";

type AuthMode = "login" | "register";

export default function Home() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{
    username: string;
    email: string;
    user_type: string;
  } | null>(null);

  useEffect(() => {
    const loggedIn = authService.isAuthenticated();
    setIsLoggedIn(loggedIn);
    setCurrentUser(authService.getUser());
  }, []);

  const resetFeedback = () => {
    setError("");
    setMessage("");
  };

  const handleModeSwitch = (nextMode: AuthMode) => {
    setMode(nextMode);
    resetFeedback();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    resetFeedback();
    setIsLoading(true);

    try {
      if (mode === "register") {
        const response = await authService.register({
          username,
          email,
          password,
          user_type: userType,
        });
        if (!response.success) {
          setError(response.message);
        } else {
          setMessage(response.message);
          setIsLoggedIn(true);
          // setCurrentUser(response.user ?? authService.getUser());
        }
      } else {
        const response = await authService.login({
          email,
          password,
        });
        if (!response.success) {
          setError(response.message);
        } else {
          setMessage(response.message);
          setIsLoggedIn(true);
          setCurrentUser(response.user ?? authService.getUser());
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await authService.logoutWithDeviceTracking();
      setIsLoggedIn(false);
      setCurrentUser(null);
      setUsername("");
      setEmail("");
      setPassword("");
      setMessage("Logged out successfully");
      setError("");
    } catch (error) {
      setError("Error during logout");
      console.error(error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <>
      <Head>
        <title>Firebase Auth Demo</title>
        <meta name="description" content="Firebase authentication demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "1.25rem",
          background:
            "radial-gradient(circle at 20% 20%, #f0f9ff 0%, #ecfeff 35%, #f8fafc 100%)",
        }}
      >
        <section
          style={{
            width: "100%",
            maxWidth: "28rem",
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "1rem",
            padding: "1.25rem",
            boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "1.5rem",
              lineHeight: 1.2,
              color: "#0f172a",
            }}
          >
            Firebase Authentication
          </h1>

          <p style={{ marginTop: "0.5rem", color: "#475569" }}>
            Register or login with your Firebase project.
          </p>

          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <button
              type="button"
              onClick={() => handleModeSwitch("login")}
              style={{
                flex: 1,
                background: mode === "login" ? "#0ea5e9" : "#f1f5f9",
                color: mode === "login" ? "#ffffff" : "#0f172a",
                border: "none",
                borderRadius: "0.625rem",
                padding: "0.625rem 0.75rem",
                cursor: "pointer",
              }}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => handleModeSwitch("register")}
              style={{
                flex: 1,
                background: mode === "register" ? "#0ea5e9" : "#f1f5f9",
                color: mode === "register" ? "#ffffff" : "#0f172a",
                border: "none",
                borderRadius: "0.625rem",
                padding: "0.625rem 0.75rem",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{ marginTop: "1rem", display: "grid", gap: "0.75rem" }}
          >
            {mode === "register" && (
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Username"
                required
                style={inputStyle}
              />
            )}

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              required
              style={inputStyle}
            />

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              required
              minLength={6}
              style={inputStyle}
            />

            {mode === "register" && (
              <select
                value={userType}
                onChange={(event) => setUserType(event.target.value)}
                style={inputStyle}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            )}

            <button
              type="submit"
              disabled={isLoading}
              style={{
                marginTop: "0.25rem",
                background: "#0284c7",
                color: "#ffffff",
                border: "none",
                borderRadius: "0.625rem",
                padding: "0.7rem 0.9rem",
                cursor: isLoading ? "not-allowed" : "pointer",
                opacity: isLoading ? 0.75 : 1,
              }}
            >
              {isLoading
                ? "Please wait..."
                : mode === "register"
                  ? "Create account"
                  : "Sign in"}
            </button>
          </form>

          {error && (
            <p style={{ marginTop: "0.8rem", color: "#b91c1c" }}>{error}</p>
          )}
          {message && (
            <p style={{ marginTop: "0.8rem", color: "#0369a1" }}>{message}</p>
          )}

          {isLoggedIn && currentUser && (
            <div
              style={{
                marginTop: "1rem",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "0.75rem",
                padding: "0.75rem",
              }}
            >
              <p style={{ margin: 0, color: "#0f172a" }}>
                Signed in as: <strong>{currentUser.email}</strong>
              </p>
              <p style={{ margin: "0.35rem 0 0", color: "#334155" }}>
                Username: {currentUser.username} | Role: {currentUser.user_type}
              </p>
              <button
                type="button"
                onClick={handleLogout}
                disabled={isLoggingOut}
                style={{
                  marginTop: "0.75rem",
                  background: "#ef4444",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "0.625rem",
                  padding: "0.5rem 0.75rem",
                  cursor: isLoggingOut ? "not-allowed" : "pointer",
                  opacity: isLoggingOut ? 0.75 : 1,
                }}
              >
                {isLoggingOut ? "Logging out..." : "Logout"}
              </button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

const inputStyle: CSSProperties = {
  width: "100%",
  border: "1px solid #cbd5e1",
  borderRadius: "0.625rem",
  padding: "0.625rem 0.75rem",
  outline: "none",
};
