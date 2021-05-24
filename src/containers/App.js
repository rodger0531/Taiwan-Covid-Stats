// import "./App.css";
import ConfirmedCases from "./confirmedCases";
import { Container, Typography, Link } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import GeneralStats from "./generalStats";
import ChartTabs from "./chartTabs";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#f5f5f5",
      dark: "#c2c2c2",
      contrastText: "#000000",
    },
    secondary: {
      light: "#97e6ff",
      main: "#1976d2",
      dark: "#0d47a1",
      contrastText: "#000000",
    },
  },
});

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <div className="p-10 bg-gray-100">
        <Container>
          <Typography align="center" variant="h4" component="h2" gutterBottom>
            台灣疫情統計
          </Typography>
          <Typography
            align="center"
            variant="h6"
            color="textSecondary"
            gutterBottom
          >
            <Link href="https://www.cdc.gov.tw" color="secondary">
              {"{"} 數據來源: 衛福部疾管署 {"}"}
            </Link>
          </Typography>
        </Container>
        <ChartTabs />
        <GeneralStats />
        <ConfirmedCases />
      </div>
    </ThemeProvider>
  );
}

export default App;
