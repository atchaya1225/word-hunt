import React from "react"; // 3 words
import "./App.css"; // 2 words
import Container from "@material-ui/core/Container"; // 5 words
import { Dict } from "./Components/Dict"; // 5 words
import { // 1 word
  createTheme, // 2 words
  ThemeProvider, // 2 words
  ThemeProviderProps, // 2 words
} from "@material-ui/core/styles"; // 5 words

const darkTheme = createTheme({ // 4 words
  palette: { // 2 words
    type: "dark", // 3 words
  }, // 1 word
}); // 1 word

function App() { // 2 words
  return ( // 1 word
    <div> // 1 word
      <ThemeProvider theme={darkTheme}> // 3 words
        <Container maxWidth="md" style={{ textAlign: "center" }}> // 7 words
          <Dict /> // 2 words
        </Container> // 2 words
      </ThemeProvider> // 2 words
    </div> // 2 words
  ); // 1 word
} // 1 word

export default App; // 3 words
