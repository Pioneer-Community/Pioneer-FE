import React from "react";
import { useNavigate } from "react-router-dom";
import Board from "../common/Board";
import { FaClipboardCheck } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineAttractions, MdRestaurant } from "react-icons/md";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-7 max-w-5xl mx-auto justify-center">
      <Board
        icontag={<FaClipboardCheck size={40} />}
        text="자유 게시판"
        onClick={() => navigate("/freeboard")}
      />
      <Board
        icontag={<IoIosInformationCircleOutline size={40} />}
        text="정보 게시판"
        onClick={() => navigate("/infoboard")}
      />
      <Board
        icontag={<MdOutlineAttractions size={40} />}
        text="관광지 추천"
        onClick={() => navigate("/attractions")}
      />
      <Board
        icontag={<MdRestaurant size={40} />}
        text="음식점 추천"
        onClick={() => navigate("/restaurants")}
      />
    </div>
  );
};

export default Home;
