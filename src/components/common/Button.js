import styled from "styled-components";

const Button = styled.button`
  width: 65px;
  height: 26px;
  background-color: ${({ theme }) => theme.colors.buttonDisabled};
  border: none;
  border-radius: 2px;

  span {
    font-size: 13px;
    color: #ffff;
  }
`;

const RefreshButton = styled(Button)`
  width: 85px;

  background-color: ${({ theme }) => theme.colors.refreshBtnBack};
  border: solid 1px ${({ theme }) => theme.colors.topMenuText};

  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.refreshBtnText};
  }

  .icon {
    margin-right: 4px;
  }
`;

export { Button, RefreshButton };
