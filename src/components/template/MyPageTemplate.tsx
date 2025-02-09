import React from "react";
import { useProfileStore } from "../../store/store"; // zustand 사용
import Icon from "../common/Icon";
import Button from "../common/Button";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { AiOutlineComment } from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { sizes } from "../../styles/sizes";

const MyPageTemplate = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const { image, name, username, bio } = useProfileStore(); // 상태 가져오기

  const handleProfileEdit = () => {
    navigate("/mypage-edit"); // 프로필 편집 페이지로 이동
  };

  const menuItems = ["게시글", "댓글관리", "스크랩"];

  return (
    <>
      <h1
        className="mt-3 mb-9  font-semibold"
        style={{ fontSize: sizes.fontSize.xxxlarge }}
      >
        마이페이지
      </h1>
      <div className="flex mb-5">
        <div className="mr-10">
          <img src={image} alt="프로필" />
        </div>
        <ul className="flex space-x-4 items-center">
          {menuItems.map((item) => (
            <li key={item} className="cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Button
        backgroundColor="bg-cornflowerblue"
        textColor="text-white"
        text="프로필 편집"
        onClick={handleProfileEdit} // 여기서 직접 navigate 호출
      />
      <div className="flex justify-around mt-5 border-b border-blue-500 mb-5 p-3">
        <Icon icon={<TbLayoutDashboardFilled />} />
        <Icon icon={<AiOutlineComment />} />
        <Icon icon={<IoNewspaperOutline />} />
      </div>
    </>
  );
};

export default MyPageTemplate;
