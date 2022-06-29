import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faSearch, faInfo } from "@fortawesome/free-solid-svg-icons";
import { Box } from "./Box";

/* Styled-Components */
const Container = styled.div`
  height: 55px;
  background-color: ${({ theme }) => theme.colors.topMenuBackColor};
  display: flex;
  justify-content: space-between;
`;

const LogoBox = styled(Box)`
  width: 220px;
  background-color: #8a76db;
  img {
    width: 105px;
  }
`;

const MenuBox = styled.div`
  display: flex;
  ul {
    display: flex;
    li {
      width: 155px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: solid 0.5px rgba(255, 255, 255, 0.1);
      color: ${({ theme }) => theme.colors.topMenuText};
      font-weight: bold;
      font-size: 14px;
    }
  }
`;

const InfoBox = styled(Box)`
  width: auto;
`;

const InfoIcon = styled.div`
  display: flex;

  .icon {
    width: 30px;
    font-size: 18px;
    color: #dde8e7;
    margin-left: 5px;
  }
`;

const InfoEnv = styled(Box)`
  width: 200px;
  color: #cec2ff;
  font-weight: bold;
`;

const InfoUser = styled(Box)`
  width: 180px;
  color: ${({ theme }) => theme.colors.topMenuText};
  font-weight: bold;
  font-size: 14px;
`;

function TopMenu() {
  return (
    <Container>
      <MenuBox>
        <LogoBox>
          <img
            src="http://localhost:8088/ofmanager/res/logo-operating.png"
            alt="logo-img"
          />
        </LogoBox>
        <ul>
          <li>Base</li>
          <li>Batch</li>
          <li>OSC</li>
          <li>TACF</li>
        </ul>
      </MenuBox>
      <InfoBox>
        <InfoIcon>
          <FontAwesomeIcon className="icon" icon={faServer} />
          <FontAwesomeIcon className="icon" icon={faSearch} />
          <FontAwesomeIcon className="icon" icon={faInfo} />
        </InfoIcon>
        <InfoEnv>OPENFRAME Env.</InfoEnv>
        <InfoUser>ROOT</InfoUser>
      </InfoBox>
    </Container>
  );
}

export default TopMenu;
