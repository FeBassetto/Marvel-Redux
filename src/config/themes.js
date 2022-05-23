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

export const redMode = {
  background: '#e0e0e0',
  backgroundPrimary: '#eb0c0c',
  shadowPrimary: '#ffffff',
  colorPrimary: '#ffffff',
  backgroundSecondary: '#7a0000',
  colorSecondary: '#d4d4d4'
}

export const darkMode = {
  background: '#e0e0e0',
  backgroundPrimary: '#000000',
  shadowPrimary: '#ffffff',
  colorPrimary: '#dfdfdf',
  backgroundSecondary: '#1a1a1a',
  colorSecondary: '#d4d4d4'
}

export const blueMode = {
  background: '#e0e0e0',
  backgroundPrimary: '#0000ff',
  shadowPrimary: '#ffffff',
  colorPrimary: '#ffffff',
  backgroundSecondary: '#000052',
  colorSecondary: '#d4d4d4'
}