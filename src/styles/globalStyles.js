import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const globalStyles = createGlobalStyle`
  * {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-style: normal;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
    }

    button, a {
      cursor: pointer;
    }
`; //FIM

export default globalStyles;
