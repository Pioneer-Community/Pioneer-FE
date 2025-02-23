import React, { useEffect, useState } from "react";
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

const App: React.FC = () => {
  // API에서 받아온 데이터를 저장할 상태
  const [message, setMessage] = useState<string>("");

  // Spring Boot API 호출
  useEffect(() => {
    fetch("http://localhost:8082/api/hello") // 백엔드 API 주소
      .then((response) => response.text()) // 응답을 텍스트로 변환
      .then((data) => setMessage(data)) // 상태에 저장
      .catch((error) => console.error("API 호출 오류:", error));
  }, []);

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
          <Route path="freeboard" element={<FreeBoard />} />
          <Route path="infoboard" element={<InfoBoard />} />
          <Route path="attractions" element={<Attractions />} />
          <Route path="restaurants" element={<Restaurants />} />
        </Route>
      </Routes>

      {/* API에서 받은 데이터를 화면에 출력 */}
      <div>
        <h2>백엔드 응답:</h2>
        <p>{message}</p>
      </div>
    </BrowserRouter>
  );
};

export default App;
