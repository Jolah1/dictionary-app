import { MenuItem, TextField } from "@mui/material";
import React from "react"
import "./Header.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import category from "../../data/category";

const Header = () => {

    const darkTheme = createTheme({
      palette: {
          primary: {
              main: "#fff",
          },
        mode: 'dark',
      },
    });
    
    return (
        <div className="header">
            <span className="title">Word Hunt</span>

            <div className="inputs">
            <ThemeProvider theme={darkTheme}>
            <TextField id="standard-basic" label="Standard" variant="standard" />
        
            <TextField
          id="standard-select-currency"
          select
          label="Select"
          helperText="Please select your currency"
          variant="standard"
        >
            {
                category.map((option) => (
                    <MenuItem>{option.value}</MenuItem>
                ))}

          </TextField>
        </ThemeProvider>
             </div>
        </div>
    );
};

export default Header;