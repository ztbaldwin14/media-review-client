import { useEffect, useState } from "react";
import Sitebar from "./home/Navbar";
import Auth from "./auth/Auth";
import MovieIndex from "./movies/MovieIndex";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(newToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <MovieIndex token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div>
      <div>
        <Sitebar clearToken={clearToken} />
        {protectedViews()}
      </div>
    </div>
  );
}

export default App;
