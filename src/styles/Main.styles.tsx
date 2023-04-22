import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: Cabinet Grotesk;
    src: url("/assets/fonts/CabinetGrotesk-Thin.otf");
    font-weight: 100;
    }

    @font-face {
    font-family: Cabinet Grotesk;
    src: url("/assets/fonts/CabinetGrotesk-Extralight.otf");
    font-weight: 200;
    }

    @font-face {
    font-family: Cabinet Grotesk;
    src: url("/assets/fonts/CabinetGrotesk-Light.otf");
    font-weight: 300;
    }

    @font-face {
    font-family: Cabinet Grotesk;
    src: url("/assets/fonts/CabinetGrotesk-Regular.otf");
    font-weight: 400;
    }

    @font-face {
    font-family: Cabinet Grotesk;
    src: url("/assets/fonts/CabinetGrotesk-Medium.otf");
    font-weight: 500;
    }

    @font-face {
    font-family: Cabinet Grotesk;
    src: url("/assets/fonts/CabinetGrotesk-Black.otf");
    font-weight: 600;
    }

    @font-face {
    font-family: Cabinet Grotesk;
    src: url("/assets/fonts/CabinetGrotesk-Bold.otf");
    font-weight: 700;
    }

    @font-face {
    font-family: Cabinet Grotesk;
    src: url("/assets/fonts/CabinetGrotesk-Extrabold.otf");
    font-weight: 800;
    }
    @font-face {
    font-family: Chillax;
    src: url("/assets/fonts/Chillax-Extralight.otf");
    font-weight: 100;
    }
    @font-face {
    font-family: Chillax;
    src: url("/assets/fonts/Chillax-Light.otf");
    font-weight: 200;
    }
    @font-face {
    font-family: Chillax;
    src: url("/assets/fonts/Chillax-Regular.otf");
    font-weight: 300;
    }
  * {
    padding: 0;
    margin: 0;

    box-sizing: border-box;

    color: white;

  }

  body {
    font-family: "Cabinet Grotesk", sans-serif !important;
    color: white;
    font-size: 0.9rem;
    max-width: 100vw;
    background: radial-gradient(45.52% 45.52% at 50% 50.04%, #455A70 0%, #0C1217 100%);
  }
  
`;
