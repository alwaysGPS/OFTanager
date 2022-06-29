import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 220px;
  height: 100vh;
  border-right: solid 0.5px rgba(0, 0, 0, 0.1);
`;

const HideBtn = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;

  .icon {
    font-size: 11px;
    color: ${({ theme }) => theme.colors.topMenuText};
  }
`;

const SubMenuList = styled.ul`
  li {
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.subMenuText};
    font-size: 16px;
    font-weight: 700;
    border-bottom: 1px solid #f1f1f1;

    &:hover {
      background-color: #f8fcff;
    }
  }
  img {
    width: 220px;
    height: 55px;
  }
`;

function SubMenu() {
  const menus = [
    "Jobs",
    "JCLs",
    "JCL Runners",
    "Outputs/Printers",
    "Spool Backups",
  ];

  return (
    <Container>
      <HideBtn>
        <FontAwesomeIcon className="icon" icon={faChevronLeft} />
        <FontAwesomeIcon className="icon" icon={faChevronLeft} />
      </HideBtn>
      <SubMenuList>
        {menus.map((menu) => (
          <li>{menu}</li>
        ))}
      </SubMenuList>
    </Container>
  );
}

export default SubMenu;
