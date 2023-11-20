import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, faCogs, faUsers, faBook, 
  faFilm, faNewspaper, faHeart, faLeaf
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/auth'
import aaiiLogo from '../assets/img/aaiiLogo.png'
import HomeContent from './HomeContent'
import ContactDetailsContent from './CourseDetailsContent'
import CoachAssistantsContent from './CoachAssistantsContent'
import Chatbot_MR from './Chatbot_MR'
import Chatbot_ES from './Chatbot_ES'
import Chatbot_HE from './Chatbot_HE'
import Chatbot_NA from './Chatbot_NA'

const SidebarContainer = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0A1828;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Align items with space between them */
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SidebarHeader = styled.h2`
    color: #fff;
    text-align: center;
`;

const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;
  padding: 10px;
  &:hover {
    background-color: #4069d3;
  }
`;

const CustomImage = styled.img`
  width: 160px; /* Adjust the width as needed */
  height: 80px; /* Adjust the height as needed */
  margin-right: 10px;
`;

const SubsectionLink = styled.a`
  display: flex;
  padding: 8px 20px;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    background-color: #4069d3;
    color: #fff;
  }
`;

const SubsectionContainer = styled.div`
  padding-left: 20px; /* Adjust the padding to create indentation for subsections */
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const SidebarButton = styled.button`
  padding: 10px;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  cursor: pointer;
  align-self: center;
  transition: background-color 0.3s, color 0.3s;
  margin-bottom: 20px;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const SidebarIcon = styled.div`
  margin-right: 10px;
`;

const Sidebar = ({ updateMainContent }) => {
    const handleLinkClick = (contentComponent) => {
      updateMainContent(contentComponent);
    };
    const auth = useAuth()
    const navigate = useNavigate()

    const [isSolutionAssetsOpen, setIsSolutionAssetsOpen] = useState(false);

    const toggleSolutionAssets = () => {
        setIsSolutionAssetsOpen(!isSolutionAssetsOpen);
        setActiveContent(null);
    };

    const handleLogout = () => {
        auth.logout()
        navigate('/login')
    }

    return (
    <SidebarContainer>
        <SidebarContent>
        <SidebarHeader>
        <CustomImage src={aaiiLogo} alt="AAII Logo" />
        </SidebarHeader> <br/><br/>
        <SidebarLink href="#" onClick={() => handleLinkClick(<HomeContent />)}>
          <SidebarIcon>
            <FontAwesomeIcon icon={faHome} />
          </SidebarIcon>
            Home
        </SidebarLink>
        <SidebarLink onClick={toggleSolutionAssets}>
          <SidebarIcon>
            <FontAwesomeIcon icon={faCogs} />
          </SidebarIcon>
          Solution Assets
        </SidebarLink>
        <SubsectionContainer isOpen={isSolutionAssetsOpen}>
            <SubsectionLink href="#" onClick={() => handleLinkClick(<Chatbot_MR />)}>
              <SidebarIcon>
                <FontAwesomeIcon icon={faFilm} />
              </SidebarIcon>
              Movie Recommendation
            </SubsectionLink>
            <SubsectionLink href="#" onClick={() => handleLinkClick(<Chatbot_NA />)}>
              <SidebarIcon>
                <FontAwesomeIcon icon={faNewspaper} />
              </SidebarIcon>
              News Analysis
            </SubsectionLink>
            <SubsectionLink href="#" onClick={() => handleLinkClick(<Chatbot_HE />)}>
              <SidebarIcon>
                <FontAwesomeIcon icon={faHeart} />
              </SidebarIcon>
              Health Equity
            </SubsectionLink>
            <SubsectionLink href="#" onClick={() => handleLinkClick(<Chatbot_ES />)}>
              <SidebarIcon>
                <FontAwesomeIcon icon={faLeaf} />
              </SidebarIcon>
              Environment Sustainability
            </SubsectionLink>
        </SubsectionContainer>
        <SidebarLink href="#" onClick={() => handleLinkClick(<CoachAssistantsContent />)}>
            <SidebarIcon>
              <FontAwesomeIcon icon={faUsers} />
            </SidebarIcon>
            Coach Assistants
        </SidebarLink>
        <SidebarLink href="#" onClick={() => handleLinkClick(<ContactDetailsContent />)}>
            <SidebarIcon>
              <FontAwesomeIcon icon={faBook} />
            </SidebarIcon>
            Course Content
        </SidebarLink>
        </SidebarContent>
        <SidebarButton onClick={handleLogout}>Log Out</SidebarButton>
    </SidebarContainer>
    );
};

export { Sidebar };