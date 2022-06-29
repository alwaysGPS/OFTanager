import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import SubMenu from "./components/common/SubMenu";
import TopMenu from "./components/common/TopMenu";
import JobDetail from "./pages/batch/JobDetail";
import Jobs from "./pages/batch/Jobs";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/Theme";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <TopMenu />
        <BrowserRouter>
          <Container>
            <SubMenu />
            <Routes>
              <Route path="/" element={<Jobs title={"Jobs"} />}></Route>
              <Route
                path="/batch/jobs/detail"
                element={<JobDetail title={"Job Details"} />}
              ></Route>
            </Routes>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
