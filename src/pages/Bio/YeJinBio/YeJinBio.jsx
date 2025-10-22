import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaFigma, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';
import { FiMail, FiLink } from 'react-icons/fi';
import ProfileImage from './pic.png';

const Page = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(180deg, #ffffff, #f9fafb);
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter',
    'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #111;
  text-align: center;
  padding: 2.5rem;
  box-sizing: border-box;
`;

const ProfilePic = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.8rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.04);
  }
`;

const Name = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 0.8rem;
  color: #0a0a0a;
`;

const Bio = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.7;
  max-width: 520px;
  margin-bottom: 2rem;
  letter-spacing: -0.01em;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 320px;
  margin-bottom: 2rem;
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(200, 200, 200, 0.4);
  border-radius: 14px;
  padding: 1rem 1.3rem;
  color: #111;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  transition: all 0.25s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  &:hover {
    background: rgba(250, 250, 250, 0.9);
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
  }

  svg {
    font-size: 1.25rem;
    opacity: 0.85;
  }
`;

const Info = styled.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 2.5rem;
`;

const SkillsContainer = styled.div`
  width: 100%;
  max-width: 520px;
`;

const SkillsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #0a0a0a;
  margin-bottom: 1.5rem;
`;

const SkillsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem; // Adjusted gap for better spacing
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #555;
  width: 80px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
    color: #111;
  }
`;

const YeJinBio = () => {
  const topRowSkills = [
    { name: 'HTML', icon: <FaHtml5 size={32} color="#E34F26" /> },
    { name: 'CSS', icon: <FaCss3Alt size={32} color="#1572B6" /> },
    {
      name: 'JavaScript',
      icon: <IoLogoJavascript size={32} color="#F7DF1E" />,
    },
    { name: 'React', icon: <FaReact size={32} color="#61DAFB" /> },
  ];

  const bottomRowSkills = [
    { name: 'Figma', icon: <FaFigma size={32} color="#F24E1E" /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop size={32} color="#31A8FF" /> },
    {
      name: 'Illustrator',
      icon: <SiAdobeillustrator size={32} color="#FF9A00" />,
    },
  ];

  return (
    <Page>
      <ProfilePic src={ProfileImage} alt="Profile" />
      <Name>배예진</Name>
      <Bio>
        퍼블리셔로서의 경험을 바탕으로,
        <br /> 프론트엔드 개발자로 한 단계 더 성장하겠습니다.
      </Bio>
      <LinksContainer>
        <LinkButton href="mailto:dpwls4052@naver.com">
          <FiMail />
          dpwls4052@naver.com
        </LinkButton>
        <LinkButton
          href="https://dpwls4052.github.io/portfolio/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLink />
          Portfolio
        </LinkButton>
      </LinksContainer>
      <SkillsContainer>
        <SkillsTitle>Skills</SkillsTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <SkillsGrid>
            {topRowSkills.map((skill) => (
              <SkillItem key={skill.name}>
                {skill.icon}
                <span>{skill.name}</span>
              </SkillItem>
            ))}
          </SkillsGrid>
          <SkillsGrid>
            {bottomRowSkills.map((skill) => (
              <SkillItem key={skill.name}>
                {skill.icon}
                <span>{skill.name}</span>
              </SkillItem>
            ))}
          </SkillsGrid>
        </div>
      </SkillsContainer>
    </Page>
  );
};

export default YeJinBio;
