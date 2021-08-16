import styled from 'styled-components';
import bg1 from '../../assets/images/Home/bg1.png';
import bg2 from '../../assets/images/Home/bg2.png';

export const Section = styled.section`

    width: 100%;
    height: 100%;

    .container {
        background: url(${bg1}) no-repeat;
        padding: 10%;   

        .textBox {
            background-color: rgb(213 206 200 / 60%);  
            width: 75%;
            margin: 0 auto;
            text-align: center;
            padding: 4.5em 0px;

            .headerEncontre {
                font-weight: 500;
                letter-spacing: .1em;
                font-size: 2.5em;
                line-height: 2em;
            }
        }
    }

    .vantagens {
        font-weight: 500;
        font-size: 1.5em;
        line-height: 2em;
    }

    .card {

        height: 100%;
        width: auto;
        margin: 0 1em;
        margin-top: 1em;
        text-align: center;
        line-height: normal;
        padding: 1em;

        .tituloVantagem {
            font-weight: 700;
            font-size: 1.2em;
            padding: 1em;
        }
    
        .subtituloVantagem {
            font-weight: 500;
            font-size: 1em;
        }

    }

    .card:hover{
        box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 50%);
    }

    .container2 {
        margin-top: 8vw;
        background: url(${bg2}) no-repeat;
        padding: 10%;   

        .headerCursosDestaque {
            text-align: center;
            font-weight: 500;
            letter-spacing: .1em;
            font-size: 2em;
            line-height: 2em;
            margin-bottom: 1em;
        }

        .headerPrincipaisCategorias {
            text-align: center;
            font-weight: 500;
            letter-spacing: .1em;
            font-size: 2em;
            line-height: 2em;
            margin-top: 1em;
        }

        .headerPrincipaisCategorias {
            text-align: center;
            font-weight: 500;
            letter-spacing: .1em;
            font-size: 2em;
            line-height: 2em;
            margin-top: 1em;
        }

        .boleto {
            text-align: center;
            margin-top: 2em;

            img {
                min-width: 20%;
            }
        }
    }
    
`;