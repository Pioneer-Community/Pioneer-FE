import React, { useRef, useState } from "react";
import { useProfileStore } from "../../store/store";
import Image from "../common/Image";
import { sizes } from "../../styles/sizes";
import Text from "../common/Text";
import Button from "../common/Button";

const Editprofile = () => {
  const [image, setImage] = useState("/images/프로필.png");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 입력 상태 관리
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  // zustand 상태 가져오기
  const { setProfile } = useProfileStore();

  // 파일 변경 핸들러
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedImage = URL.createObjectURL(event.target.files[0]);
      setImage(selectedImage);
    }
  };

  // 이미지 클릭 시 파일 선택 창 열기
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  // 수정 버튼 클릭 시 실행될 함수
  const handleUpdate = () => {
    // zustand 상태에 프로필 정보 업데이트
    setProfile({ image, name, username, bio });

    // 확인을 위한 콘솔 로그
    console.log("수정된 정보:", { name, username, bio });
    alert("프로필이 수정되었습니다!");
  };

  return (
    <>
      <div className="flex flex-col items-center mb-7 border-b-2 border-blue-500">
        <div className="relative">
          <Image
            src={image}
            size="large"
            className="cursor-pointer"
            onClick={handleImageClick}
          />
          {/* 숨겨진 파일 업로드 */}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
        </div>

        <span
          className="mt-3 font-semibold mb-6 cursor-pointer text-blue-500"
          style={{ fontSize: sizes.fontSize.sm }}
          onClick={handleImageClick}
        >
          사진 수정
        </span>
      </div>

      {/* 프로필 정보 입력 */}
      <div className="flex flex-col gap-4">
        <Text
          text="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Text
          text="사용자 이름"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Text
          text="소개"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>

      {/* 수정 버튼 */}
      <Button
        backgroundColor="bg-lightyellow"
        text="수정"
        textColor="text-black"
        onClick={handleUpdate}
      />
    </>
  );
};

export default Editprofile;
