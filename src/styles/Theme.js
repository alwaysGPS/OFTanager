const flexSet = (just = "center", align = "center") => {
  return `
        display: flex;
        justify-content: ${just};
        align-items: ${align};`;
};

const flexColumnSet = (just = "center", align = "center") => {
  return `
    display: flex;
    flex-direction: column;
    justify-content: ${just};
    align-items: ${align};`;
};

const colors = {
  topMenuBackColor: "#5f6571",
  topMenuText: "#cccccc",
  subMenuText: "#003c7d",
  buttonDisabled: "#b7b7b7",
  refreshBtnText: "#888888",
  refreshBtnBack: "#FAFAFA",
};

const theme = {
  colors,
  flexSet,
  flexColumnSet,
};

export default theme;
