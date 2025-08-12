import React, { useState } from "react";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(
        "YOUR_APPS_SCRIPT_URL", // replace with your real Apps Script URL
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ email }),
        }
      );
      setStatus("Thank you! Email saved.");
      setEmail("");
    } catch (error) {
      console.error(error);
      setStatus("Error. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        style={{
          padding: "8px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginRight: "8px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 16px",
          background: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Notify Me
      </button>
      {status && <div style={{ marginTop: "0.5rem" }}>{status}</div>}
    </form>
  );
};

export default EmailCapture;