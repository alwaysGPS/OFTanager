import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Box } from "./Box";

const Container = styled(Box)`
  width: 100%;
  height: 50px;
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.subMenuText};
`;

const BreadCrumb = styled.div`
  font-size: 14px;
  font-weight: 700;

  .default {
    color: ${({ theme }) => theme.colors.topMenuBackColor};
  }

  .icon {
    font-size: 11px;
    margin: 0 5px 0 5px;
    color: ${({ theme }) => theme.colors.topMenuText};
  }

  .current {
    color: ${({ theme }) => theme.colors.subMenuText};
  }
`;

function TitleBar({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <BreadCrumb>
        <span className="default">Batch</span>
        <FontAwesomeIcon className="icon" icon={faChevronRight} />
        <span className="current">{title}</span>
      </BreadCrumb>
    </Container>
  );
}

export default TitleBar;
