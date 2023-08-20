import './App.css'
import {Appbar, HCategoryScroller} from "./components/index";
import {CssBaseline, ThemeProvider, useTheme} from "@mui/material";
import theme from './Theme';
function App() {

  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
            <div className="body-lay-out">
                <Appbar/>


            </div>
      </ThemeProvider>

  )
}

export default App
