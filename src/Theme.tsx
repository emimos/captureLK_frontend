import { createTheme, colors } from "@mui/material";

const theme = createTheme({
    palette:{
        primary:{
            main:colors.blue['A200'],
            light:colors.blue['400'],
            dark:colors.blue['A700'],
            contrastText:colors.blue['50'],
        },
        secondary:{
            main:colors.deepPurple['A200'],
            light:colors.deepPurple['400'],
            dark:colors.deepPurple['A700'],
            contrastText:colors.deepPurple['50'],
        },
        error:{
            main:colors.pink['500'],
            light:colors.pink['300'],
            dark:colors.pink['700'],
            contrastText:colors.pink['50'],
        },
        warning:{
            main:colors.amber['700'],
            light:colors.amber['500'],
            dark:colors.amber['900'],
            contrastText:colors.amber['50'],
        },
        success:{
            main:colors.lightGreen['500'],
            light:colors.lightGreen['300'],
            dark:colors.lightGreen['700'],
            contrastText:colors.lightGreen['50'],
        },
        info:{
            main:colors.lightBlue['500'],
            light:colors.lightBlue['300'],
            dark:colors.lightBlue['700'],
            contrastText:colors.lightBlue['50'],
        },
    },
    typography: {
        fontFamily: ["Merriweather Sans", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
            fontFamily: ["Merriweather Sans", "sans-serif"].join(","),
            fontSize: 40,
        },
        h2: {
            fontFamily: ["Merriweather Sans", "sans-serif"].join(","),
            fontSize: 32,
        },
        h3: {
            fontFamily: ["Merriweather Sans", "sans-serif"].join(","),
            fontSize: 24,
        },
        h4: {
            fontFamily: ["Merriweather Sans", "sans-serif"].join(","),
            fontSize: 20,
        },
        h5: {
            fontFamily: ["Merriweather Sans", "sans-serif"].join(","),
            fontSize: 16,
        },
        h6: {
            fontFamily: ["Merriweather Sans", "sans-serif"].join(","),
            fontSize: 14,
        },
        overline:{
            fontFamily: ["Merriweather Sans", "sans-serif"].join(","),
            fontSize: 16,
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '20px',
                    textTransform: 'none',
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
            },
        },
    },

})

export default theme;