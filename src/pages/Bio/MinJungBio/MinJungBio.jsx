import React from "react";
import styled, { css } from "styled-components";
import profileImage from "./profile.png";

// ----------------------------------------------------
// 1. 데이터 정의
// ----------------------------------------------------
const myData = {
  name: "김민중",
  bio: "퍼블리싱을 시작으로 현재는 프론트엔드 로직 구현에 집중하며, 실사용자의 니즈를 반영한 실용적인 개선을 추구하고 있습니다.",
  imageUrl: profileImage,

  personalInfo: [
    { name: "MBTI", icon: "🧩", text: "INTP" },
    { name: "취미", icon: "🧸", text: "피규어 모으기" },
    { name: "Email", icon: "✉️", text: "f1minn2r@naver.com" },
  ],
};

// ----------------------------------------------------
// 2. 스타일 컴포넌트 정의
// ----------------------------------------------------

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  font-family: "Arial", sans-serif;
  padding: 20px;
`;

const ProfileCard = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 4px solid #007bff;
`;

const Name = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 5px;
  color: #212529;
`;

const Introduction = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  text-align: center;
  color: #495057;
`;

const InfoBadges = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillBadge = styled.span`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 20px;
  background-color: #e9ecef;
  color: #495057;
  font-size: 0.9rem;
  font-weight: normal;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  cursor: default;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dee2e6;
    transform: none;
  }

  & > span:first-child {
    margin-right: 5px;
    font-size: 1.1rem;
  }

  & strong {
    font-weight: bold;
    margin-right: 4px;
    color: #007bff;
  }
`;

// ----------------------------------------------------
// 3. 메인 컴포넌트
// ----------------------------------------------------
const MinJungBio = () => {
  return (
    <BioContainer>
      <ProfileCard>
        <ProfileImage src={myData.imageUrl} alt={`${myData.name} 프로필`} />

        <Name>{myData.name}</Name>

        <Introduction>{myData.bio}</Introduction>

        <InfoBadges>
          {myData.personalInfo.map((item, index) => {
            const isEmail = item.name === "Email";

            const BadgeContent = (
              <SkillBadge title={item.name}>
                <span>{item.icon}</span>
                {["MBTI", "취미"].includes(item.name) && (
                  <strong>{item.name}:</strong>
                )}
                {item.text}
              </SkillBadge>
            );

            return isEmail ? (
              <a
                key={index}
                href={`mailto:${item.text}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                {BadgeContent}
              </a>
            ) : (
              <div key={index}>{BadgeContent}</div>
            );
          })}
        </InfoBadges>
      </ProfileCard>
    </BioContainer>
  );
};

export default MinJungBio;
