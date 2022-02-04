import "App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Auth";
import Profile from "./Profile";

function App() {
  const REST_API_KEY = "e4d31a353efd724ff8e68c8941a2ae26";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <h1>
              <a href={KAKAO_AUTH_URL}>Kakao Login</a>
            </h1>
          }
        ></Route>
        <Route path="/oauth/kakao/callback" element={<Auth />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
