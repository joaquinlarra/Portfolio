/* global tw */
import React from 'react';
import { IconContext } from 'react-icons';
import { FaJs, FaNodeJs, FaReact, FaDatabase, FaGit, FaLinkedin, FaStackOverflow} from 'react-icons/fa';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';
import avatar from '../images/avatar.jpg';
import '../styles/global';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;
const Subtitle2 = styled.p`
  ${tw('text-1xl lg:text-2xl font-sans text-white mt-8 xxl:w-2/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 30vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-48 xl:w-128 shadow-lg h-auto')};
`;

const AboutSub = styled.span`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
  `;

const AboutDesc = styled.p`
  ${tw('text-grey-light text-lg md:text-l lg:text-1xl font-sans pt-6 md:pt-11 text-justify')};
  a {
    color: #e07628;
    text-decoration: none;
  }
  `;

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;
const SocialIcon = styled.span`
  ${tw('text-center h-full')};
  margin-top: 40px;
  a {
    padding: 1em;
  }
`;

const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={4}>
      <Divider speed={0.2} offset={0}>
        <UpDown>
          <IconContext.Provider value={{size: '12em', color: '#689F64',style: { verticalAlign: 'middle', marginLeft: '40%', marginTop: '10%' }}}> <FaNodeJs /> </IconContext.Provider>
          <IconContext.Provider value={{size: '12em', color: '#61DAFB',style: { verticalAlign: 'middle', marginTop: '10%',marginLeft: '2%', position: 'absolute' }}}> <FaReact /> </IconContext.Provider>
        </UpDown>
 
      </Divider>
      <Content speed={0.4} offset={0}>
        <Hero>
          <BigTitle>
            Hi, <br /> I'm Joaquín Astelarra. 
          
          </BigTitle>
          <Subtitle>Fullstack JavaScript developer working for the next web.</Subtitle>
          <Subtitle2>
            Currently using MongoDB, Express, React, Node (MERN) stack for development and Linux with Nginx as HTTP server.
            </Subtitle2>
        </Hero>
      </Content>
      <DividerMiddle
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        speed={0.3}
        offset={0.9}
        factor={2}
      />
      <Content speed={0.4} offset={0.9} factor={2}>
        <Inner>
          <Title>Latest Projects</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="LydiasUniforms.com"
              link="https://www.lydiasuniforms.com"
              bg="linear-gradient(to right, rgba(200,16,60,0.9) 0%, rgba(240,190,38,0.8) 100%), url('/images/lydias.jpg')"
            >
              Migrated site to Shopify: Applied frontend design from guidelines and data migration. Created backend that connects Shopify and NetSuite in Node / React for site & subsidiaries.<br />
            </ProjectCard>
            <ProjectCard
              title="HogueInc.com"
              link="https://www.hogueinc.com/"
              bg="linear-gradient(to right, rgba(110,31,150,0.9) 0%, rgba(195,22,130,0.9) 100%), url('/images/hogue.jpg')"
            >
             Developed site V2 from ground to go-live: Scoped project, managed dev team, migrated DB, server & backend config.
            </ProjectCard>
            <ProjectCard
              title="MightySkins.com"
              link="https://mightyskins.com/"
              bg="linear-gradient(to right, rgba(0,170,70,0.9) 0%, rgba(250,240,30,0.9) 100%), url('/images/mightyskins.jpg')"            >
            Continued project from 20-30% till go-live: data migration, server and backend config, added and configured complex UI extensions.
            </ProjectCard>
            <ProjectCard
              title="BuyVestex.com"
              link="https://www.buyvestex.com"
              bg="linear-gradient(to right, rgba(207,170,255,0.9) 0%, rgba(0,255,240,0.9) 100%), url('/images/vestex.jpg')"
            >
            Developed B2B e-commerce spinoff <a href="https://www.nwvestex.org/customer/account/login/">Northwell health</a>, which was then replicated in other hospitals.
            </ProjectCard>
          </ProjectsWrapper>
        </Inner>
      </Content>
      <Content speed={0.4} offset={2.5}>
        <Inner>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="John Doe" />
            <AboutSub>
              Web Developer since 2006. Worked on startups, sw agencies, mid sized product companies and also freelanced for some time (<a href="https://www.linkedin.com/in/joaquinastelarra/" target="_blank">full profile</a>). I like beeing part of dynamic teams where things get done with finesse and coherence. 
            </AboutSub>
          </AboutHero>
          <AboutDesc>
          Coding frontends, backends, APIs, data bases, microservices, Linux HTTP server setups and a bit of cloud computing.<br />
          <br />
          
          <br /><b>Code Langs / Libs / Fws:</b>  JavaScript, Node.js, Express.js, React.js, Backbone.js, PHP, Symfony, Laravel, CodeIgniter, Magento(1&2), HTML, CSS, JQuery.
          <br /><b>Data Bases:</b>  MongoDB, MySQL, SQL Server, Redis, ORMs.
          <br /><b>Servers:</b>  Linux, Apache, Nginx
          <br /><b>Other:</b> AWS, CI, CDNs, Jira, GIT, PWAs
          </AboutDesc>
        </Inner>
      </Content>
      <Divider fill="#23262b" speed={0.2} offset={3.1}>
        <WaveWrapper>
          <InnerWave>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
              <path className={waveAnimation}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>
      </Divider>
      <Content speed={0.4} offset={3.1}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Send me an <a href="mailto:&#106;&#111;&#097;&#113;&#117;&#105;&#110;&#097;&#115;&#116;&#101;&#108;&#097;&#114;&#114;&#097;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">email</a> or find me on :<br /><br />
             <div align="center">
             <IconContext.Provider value={{size: '3em',style: { verticalAlign: 'middle', textAlign: 'center' }}}>
              <SocialIcon><a href="https://gitlab.com/joaquinlarra" target="_blank"><FaGit /></a> </SocialIcon>
              <SocialIcon><a href="https://www.linkedin.com/in/joaquinastelarra/" target="_blank"><FaLinkedin /></a></SocialIcon>
              <SocialIcon><a href="https://stackoverflow.com/users/756411/joaquinlarra" target="_blank"><FaStackOverflow /></a></SocialIcon>
             </IconContext.Provider>
             </div>
          </ContactText>
        </Inner>
      </Content>
    </Parallax>
  </React.Fragment>
);

export default Index;
