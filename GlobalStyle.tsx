import React, { FunctionComponent } from 'react';
import { Global, css } from '@emotion/react';

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--defaultBg);

    &.dark {
      --defaultBg: #000000;
      --defaultColor: #ffffff;
      --cateBgActive: #ffffff;
      --cateColorActive: #000000;
      --cateBgDefault: #333333;
      --cateColorDefault: #ffffff;
      --imageFilter: invert();
      --link: #2f5661;
    }

    &.light {
      --defaultBg: #ffffff;
      --defaultColor: #000000;
      --cateBgActive: #000000;
      --cateColorActive: #ffffff;
      --cateBgDefault: #e5e5e5;
      --cateColorDefault: #000000;
      --imageFilter: opacity(1);
      --link: #80c3d8;
    }
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

const GlobalStyle: FunctionComponent = () => {
  return <Global styles={defaultStyle} />;
};

export const lightTheme = {
  backgroundColor: '#ffffff',
  fontColor: '#000000',
};

export const darkTheme = {
  backgroundColor: '#000000',
  fontColor: '#ffffff',
};

export default GlobalStyle;
