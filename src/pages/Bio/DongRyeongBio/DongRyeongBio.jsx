import styled from "styled-components";
import { FiGithub, FiLinkedin, FiGlobe } from "react-icons/fi";
import ProfileSrc from "./profile-light.png";

const Page = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(180deg, #ffffff, #f9fafb);
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter",
    "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #111;
  text-align: center;
  padding: 2.5rem;
  box-sizing: border-box;
`;

const ProfileImage = styled.img`
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
  margin-bottom: 3rem;
  letter-spacing: -0.01em;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 320px;
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
    transition: opacity 0.25s ease;
  }

  &:hover svg {
    opacity: 1;
  }
`;

const DongRyeongBio = () => {
  return (
    <Page>
      <ProfileImage src={ProfileSrc} alt="Dong Ryeong" />
      <Name>이동령</Name>
      <Bio>
        Frontend Developer
        <br />
        사용자 경험을 개선하고, 더 나은 인터랙션을 고민합니다.
        <br />
        미니멀하고 직관적인 디자인을 추구합니다.
      </Bio>
      <Links>
        <LinkButton
          href="https://github.com/pexe99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub /> GitHub
        </LinkButton>
        <LinkButton
          href="https://www.linkedin.com/in/%EB%8F%99%EB%A0%B9-%EC%9D%B4-9a3124272/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin /> LinkedIn
        </LinkButton>
        <LinkButton
          href="https://medium.com/@pexe99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGlobe /> Medium
        </LinkButton>
        <LinkButton
          href="https://velog.io/@pexe99/posts"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGlobe /> Velog
        </LinkButton>
      </Links>
    </Page>
  );
};

export default DongRyeongBio;
