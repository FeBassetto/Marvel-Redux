import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode, blueMode } from "../../config/themes";


const ProviderTheme = (props) => {

    const themes = {
        white: lightMode,
        black: darkMode,
        blue: blueMode
    }

    return (
        <ThemeProvider theme={themes[props.theme]}>
            {props.children}
        </ThemeProvider>
    )
}

const mapStateToProps = state => ({
    theme: state.themeReducer.theme
})

export default connect(mapStateToProps, null)(ProviderTheme)