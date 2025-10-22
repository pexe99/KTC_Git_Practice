import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiCode, FiPenTool, FiCpu, FiUserCheck } from "react-icons/fi";

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter",
    "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #111;
  text-align: center;
  padding: 2rem;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 4.2rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 1.2rem;
  letter-spacing: -0.03em;
  @media (max-width: 600px) {
    font-size: 2.6rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.15rem;
  color: #666;
  font-weight: 400;
  margin-bottom: 4rem;
  letter-spacing: -0.01em;
`;

const CardGrid = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 540px;
`;

const Card = styled.button`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 18px;
  padding: 1.6rem 2rem;
  text-align: left;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  svg {
    font-size: 1.5rem;
    color: #222;
    opacity: 0.9;
    transition: color 0.3s ease;
  }

  &:hover svg {
    color: #000;
    opacity: 1;
  }
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  color: #111;
  margin-bottom: 0.4rem;
  letter-spacing: -0.01em;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const Home = () => {
  const navigate = useNavigate();

  const bios = [
    {
      name: "이동령",
      path: "/bio/dongryeong",
      desc: "관성과 가속도를 가진 개발자가 되고 싶습니다.",
      icon: <FiCode />,
    },
    {
      name: "최광혁",
      path: "/bio/gwanghyeok",
      desc: "많이 배우고 좋은 곳에 이직하고 싶습니다.",
      icon: <FiPenTool />,
    },
    {
      name: "김민중",
      path: "/bio/minjung",
      desc: "변화에 뒤처지지 않는 개발자가 되고 싶습니다!",
      icon: <FiCpu />,
    },
    {
      name: "배예진",
      path: "/bio/yejin",
      desc: "퍼블리셔에서 프론트엔드 개발자의 전향을 이루고싶습니다!",
      icon: <FiUserCheck />,
    },
  ];

  return (
    <HomeContainer>
      <Title>Trinity</Title>
      <Subtitle>We design, build, and refine the digital experience.</Subtitle>
      <CardGrid>
        {bios.map((bio) => (
          <Card
            key={bio.name}
            tabIndex={0}
            onClick={() => navigate(bio.path)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                navigate(bio.path);
              }
            }}
          >
            {bio.icon}
            <TextGroup>
              <Name>{bio.name}</Name>
              <Description>{bio.desc}</Description>
            </TextGroup>
          </Card>
        ))}
      </CardGrid>
    </HomeContainer>
  );
};

export default Home;
