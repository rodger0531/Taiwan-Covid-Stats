// import "./App.css";
import ConfirmedCases from "./confirmedCases";
// import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import GeneralStats from "./generalStats";

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
      main: "#60b4f4",
      dark: "#1985c1",
      contrastText: "#000000",
    },
  },
});

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <div className="p-10 bg-gray-100">
        <GeneralStats />
        <ConfirmedCases />
      </div>
    </ThemeProvider>
  );
}

export default App;
