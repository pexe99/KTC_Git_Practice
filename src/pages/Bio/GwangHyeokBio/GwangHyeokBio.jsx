import React from "react";
import styled from "styled-components";

// GwangHyeokBio.jsx — styled-components 기반 Bio 페이지
// Tailwind 대신 styled-components로 스타일링한 React 컴포넌트입니다.

export default function GwangHyeokBio() {
  return (
    <Main>
      <Container>
        <Header>
          <Avatar>사진</Avatar>
          <HeaderInfo>
            <Name>광혁 (GwangHyeok)</Name>
            <Subtitle>Frontend Engineer · React & TypeScript · UI/UX 관심</Subtitle>
            <ButtonGroup>
              <PrimaryButton href="#contact">연락하기</PrimaryButton>
              <SecondaryButton href="#projects">프로젝트 보기</SecondaryButton>
              <DownloadButton href="/cv.pdf" download>이력서 다운로드</DownloadButton>
            </ButtonGroup>
          </HeaderInfo>
        </Header>

        <Content>
          <MainSection>
            <SectionTitle>소개</SectionTitle>
            <Paragraph>
              안녕하세요! 저는 사용자 친화적인 인터페이스와 성능 최적화를 중요하게 생각하는 프론트엔드 개발자
              <strong> 광혁</strong>입니다. React + TypeScript 기반의 프로젝트를 즐겨 만들며, 컴포넌트 중심의 설계와 접근성
              개선에 관심이 많습니다.
            </Paragraph>

            <SubSection id="projects">
              <SubTitle>주요 프로젝트(예시)</SubTitle>
              <List>
                <ListItem>
                  <strong>프로젝트 A</strong> — 대화형 대시보드 (React, Recharts, styled-components)
                  <small>성능 개선으로 초기 로딩 시간 30% 단축</small>
                </ListItem>
                <ListItem>
                  <strong>프로젝트 B</strong> — 사내 디자인 시스템 (Storybook, TypeScript)
                  <small>컴포넌트 문서화 및 재사용성 향상</small>
                </ListItem>
              </List>
            </SubSection>

            <SubSection>
              <SubTitle>기술 스택</SubTitle>
              <TagList>
                {[
                  "React",
                  "React-Native",
                  "TypeScript",
                  "HTML/CSS",
                  "C",
                  "Java",
                  "JavaScript",
                ].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </TagList>
            </SubSection>
          </MainSection>

          <Sidebar>
            <InfoBox>
              <InfoTitle>한눈에 보기</InfoTitle>
              <dl>
                <InfoItem><dt>지역</dt><dd>서울, 대한민국</dd></InfoItem>
                <InfoItem><dt>역할</dt><dd>프론트엔드 개발자</dd></InfoItem>
                <InfoItem><dt>언어</dt><dd>한국어, 영어</dd></InfoItem>
              </dl>
            </InfoBox>

            <InfoBox id="contact">
              <InfoTitle>Contact</InfoTitle>
              <ContactItem>
                <span>Email</span>
                <a href="mailto:gwanghyeok@example.com">rhkdgur120@naver.com</a>
              </ContactItem>
              <ContactItem>
                <span>GitHub</span>
                <a href="https://github.com/806hyogi" target="_blank" rel="noreferrer">github.com/806hyogi</a>
              </ContactItem>
              <ContactItem>
                <span>WebSite</span>
                <a href="https://806hyogi.github.io/" target="_blank" rel="noreferrer">806hyogi.github.io</a>
              </ContactItem>
            </InfoBox>

            <InfoBox>
              <InfoTitle>Availability</InfoTitle>
              <Paragraph>Open to freelance / full-time · 협업 문의 환영</Paragraph>
            </InfoBox>
          </Sidebar>
        </Content>

        <CareerSection>
          <SectionTitle>경력 요약</SectionTitle>
          <CareerList>
            <CareerItem>
              <Year>2024 — 2025</Year>
              <CareerDetail>
                <strong>이루온(주) — 연구원 C 개발자</strong>
                <p>KT, U+ IMS의 IBCF장비 MMLD 프로세스 담당자</p>
              </CareerDetail>
            </CareerItem>
          </CareerList>
        </CareerSection>

        <Footer>© {new Date().getFullYear()} GwangHyeok — Built with React + styled-components</Footer>
      </Container>
    </Main>
  );
}

// Styled Components
const Main = styled.main`
  min-height: 100vh;
  background: #f9fafb;
  color: #111827;
  padding: 3rem 1.5rem;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1.5rem;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Avatar = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 1rem;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #6b7280;
`;

const HeaderInfo = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Name = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  color: #6b7280;
  margin-top: 0.25rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s ease;
`;

const PrimaryButton = styled(Button)`
  background: #4f46e5;
  color: white;
  &:hover {
    background: #4338ca;
  }
`;

const SecondaryButton = styled(Button)`
  border: 1px solid #e5e7eb;
  color: #111827;
  &:hover {
    background: #f3f4f6;
  }
`;

const DownloadButton = styled(Button)`
  background: #f3f4f6;
  &:hover {
    background: #e5e7eb;
  }
`;

const Content = styled.section`
  display: grid;
  gap: 2rem;
  padding: 2rem;
  border-top: 1px solid #f3f4f6;
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const MainSection = styled.div``;
const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`;

const Paragraph = styled.p`
  color: #374151;
  line-height: 1.6;
  margin-top: 0.5rem;
`;

const SubSection = styled.div`
  margin-top: 1.5rem;
`;

const SubTitle = styled.h3`
  font-weight: 500;
`;

const List = styled.ul`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ListItem = styled.li`
  background: #f9fafb;
  border: 1px solid #f3f4f6;
  border-radius: 8px;
  padding: 1rem;
  small {
    display: block;
    color: #6b7280;
    margin-top: 0.25rem;
    font-size: 0.8rem;
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 0.25rem 0.75rem;
  font-size: 0.85rem;
`;

const InfoBox = styled.div`
  border: 1px solid #f3f4f6;
  background: white;
  border-radius: 12px;
  padding: 1rem;
`;

const InfoTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #4b5563;
  margin-top: 0.25rem;
`;

const ContactItem = styled.div`
  margin-top: 0.5rem;
  font-size: 0.85rem;
  span {
    display: block;
    color: #6b7280;
    font-size: 0.75rem;
  }
  a {
    color: #4f46e5;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const CareerSection = styled.section`
  padding: 2rem;
  border-top: 1px solid #f3f4f6;
`;

const CareerList = styled.ol`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CareerItem = styled.li`
  display: flex;
  gap: 1rem;
`;

const Year = styled.div`
  width: 6rem;
  color: #6b7280;
  font-size: 0.8rem;
`;

const CareerDetail = styled.div`
  font-size: 0.9rem;
  p {
    color: #4b5563;
    margin-top: 0.25rem;
  }
`;

const Footer = styled.footer`
  text-align: center;
  color: #6b7280;
  font-size: 0.85rem;
  padding: 1.5rem;
  border-top: 1px solid #f3f4f6;
`;