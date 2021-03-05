import { useEffect, useState } from "react";
import Sitebar from "./home/Navbar";
import Auth from "./auth/Auth";
import MovieIndex from "./movies/MovieIndex";
import Footer from "./home/Footer";
import Reviews from "./movies/Reviews";

function App() {
  const [sessionToken, setSessionToken] = useState("");
  const [showReviews, setShowReviews] = useState(false);

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

  const reviews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <Reviews token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (

    <div className='moviereel' style={{
      fontFamily: 'Luckiest Guy'
    }}>
      <Sitebar clearToken={clearToken} reviews={reviews} showReviews={showReviews} setShowReviews={setShowReviews} />
      {showReviews ? reviews() : protectedViews()}
      <Footer />
    </div>
  );
}
export default App;
