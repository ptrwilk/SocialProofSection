import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import "./styles.css";
import SocialProofSection from "./Components/SocialProofSection/SocialProofSection";
import BgPatternTopDesktop from "./assets/bg-pattern-top-desktop.svg";
import BgPatternBottomDesktop from "./assets/bg-pattern-bottom-desktop.svg";
import BgPatternTopMobile from "./assets/bg-pattern-top-mobile.svg";
import BgPatternBottomMobile from "./assets/bg-pattern-bottom-mobile.svg";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 15,
    },
    h1: {
      fontSize: 55,
      lineHeight: 0.9,
    },
    h2: {
      fontSize: 20,
    },
    fontFamily: "League Spartan",
  },
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          width: "auto",
          padding: 0,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Background />
        <SocialProofSection />
      </div>
    </ThemeProvider>
  );
}

const Background = () => {
  const isSmall = useMediaQuery("(max-width : 1080px)");

  console.log(isSmall);
  return (
    <>
      <img
        src={isSmall ? BgPatternTopMobile : BgPatternTopDesktop}
        className="img-top"
      />
      <img
        src={isSmall ? BgPatternBottomMobile : BgPatternBottomDesktop}
        className="img-bottom"
      />
    </>
  );
};

export default App;
