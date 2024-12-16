import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --purple: ##6c2eb7;
    --blue: #43a5e7;
    --dark-blue: #185abc;
    
    scroll-padding-top: 10rem;

    &.light{

      body{
        transition: 0.5s;
        background-color: #f5f5f5;
        color: #000000;
      }

      .logo{
        color: #000000;
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f500;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: #000000; 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: #000000;
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px #000000;
          color: #000000;
          &::placeholder{
            transition: 0.5s;
            color: #000000;
          }
        }
      }

      .about-text{
        background-color: #f5f5f500;  
      }
    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  h1, h2, h3, h4, h5, h6{
    font-family: "Libre Baskerville", serif;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: #000000;
    color: #FFFF;
  }

  body, input, textarea, button{
    font-family: "Libre Baskerville", serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--dark-blue);
    color: #FFFF;
    border-radius: 1rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: #FFFF;
  }
`;
