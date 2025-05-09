import React from "react";
import { useAuth } from "react-oidc-context";

function Homepage() {
  const auth = useAuth();

  const setUpPasskey = () => {
    const clientId = "78aufj60dsi4es20an5jes8naf";
    const logoutUri = "https://localhost:5173/";
    const cognitoDomain = "https://<user pool domain>";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (!auth.isAuthenticated) {
    return <div>Access Denied. Please sign in first.</div>;
  }

  const username = auth.user?.profile?.username || "Unknown User";

  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>Hello, {username}!</p> 
      <button onClick={() => setUpPasskey()}>Set up Passkey</button>
      <button onClick={() => auth.removeUser()}>Sign out</button>
    </div>
  );
}

export default Homepage;