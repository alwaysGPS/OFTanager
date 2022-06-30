import { TableCell } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px 0px 20px 0px;

  .table {
    background-color: white;
  }

  .table_head span {
    color: #357fd2;
    font-weight: 700;
  }
`;

const StyledCell = styled(TableCell)`
  border: 1px solid #f1f1f1;

  span {
    font-size: 12px;

    .icon {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.subMenuText};
    }
  }
`;

const TableTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

export { Container, StyledCell, TableTitle };
