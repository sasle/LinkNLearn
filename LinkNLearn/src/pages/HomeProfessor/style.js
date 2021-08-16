import styled from 'styled-components';
import bg1 from '../../assets/images/HomeProfessor/bg1.png';
import bg2 from '../../assets/images/HomeProfessor/bg2.png';

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
        padding: 7%;   

        h1 {
            text-align: center;
            font-weight: 500;
            letter-spacing: .1em;
            font-size: 2em;
            line-height: 2em;
            margin-bottom: 1em;
        }

        .divComecar {
            border: 1px solid black;
            border-radius: 5px;
            padding: 2.5em;
            margin: 0 auto;
            margin-top: 2em;
            min-width: 40vw;
            width: 40vw;

            h3 {
                font-size: 1.5em;
                line-break: strict;
            }
        }

        .boleto {
            text-align: center;
            margin-top: 2em;

            img {
                min-width: 20%;
            }
        }
    }

    .sectionComecarProf {

        padding: 2em 0;
        background-color: rgb(215 196 183 / 20%);  
        text-align: center;

        button {
            width: 15%;
            height: 3em;
        }

        h1 {
            font-weight: 700;
            letter-spacing: .1em;
            font-size: 2em;
            margin-bottom: 1em;
        }

        h2 {
            font-weight: 500;
            letter-spacing: .1em;
            font-size: 1.5em;
            margin-bottom: 1.5em;
        }
            
    }
    
`;