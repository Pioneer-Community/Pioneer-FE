import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import FreeBoard from "./components/pages/FreeBoard";
import InfoBoard from "./components/pages/InfoBoard";
import Restaurants from "./components/pages/Restaurants";
import Attractions from "./components/pages/Attractions";
import AuthLinks from "./components/molecules/AuthLinks";
import SignupForm from "./components/organisms/Signup";
import Mypage from "./components/pages/Mypage";
import Editprofile from "./components/molecules/Editprofile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="authlinks" element={<AuthLinks />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="/mypage-edit" element={<Editprofile />} />
          {/* 프로필 편집 페이지 */}
          <Route path="freeboard" element={<FreeBoard />} />
          <Route path="infoboard" element={<InfoBoard />} />
          <Route path="attractions" element={<Attractions />} />
          <Route path="restaurants" element={<Restaurants />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
