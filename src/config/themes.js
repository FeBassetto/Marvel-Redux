import { createGlobalStyle } from 'styled-components'
import RobotoExtraBold from '../assets/fonts/Roboto/Roboto-Black.ttf';
import RobotoBold from '../assets/fonts/Roboto/Roboto-Bold.ttf';
import RobotoMedium from '../assets/fonts/Roboto/Roboto-Medium.ttf';
import RobotoRegular from '../assets/fonts/Roboto/Roboto-Regular.ttf';
import InterMedium from '../assets/fonts/Inter/Inter-Medium.ttf';
import InterLight from '../assets/fonts/Inter/Inter-Light.ttf';
import InterBold from '../assets/fonts/Inter/Inter-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face{
      font-family: "RobotoBold";
      src: url(${RobotoBold});
    }
    @font-face{
      font-family: "RobotoRegular";
      src: url(${RobotoRegular});
    }
    @font-face{
      font-family: "RobotoExtraBold";
      src: url(${RobotoExtraBold});
    }
    @font-face{
      font-family: "RobotoMedium";
      src: url(${RobotoMedium});
    }
    @font-face{
      font-family: "InterMedium";
      src: url(${InterMedium});
    }
    @font-face{
      font-family: "InterLight";
      src: url(${InterLight});
    }
    @font-face{
      font-family: "InterBold";
      src: url(${InterBold});
    }
  `

export const lightMode = {
    background: '#ffffff',
    backgroundHeader: '#eb0c0c',
    shadowHeader: '#ff0000',
    colorHeader: '#ffffff'
}

export const darkMode = {
    background: '#e0e0e0',
    backgroundHeader: '#000000',
    shadowHeader: '#000000',
    colorHeader: '#dfdfdf'
}

export const blueMode = {
    background: '#e0e0e0',
    backgroundHeader: '#0000ff',
    shadowHeader: '#0000ff',
    colorHeader: '#ffffff'
}