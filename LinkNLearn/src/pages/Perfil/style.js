import styled from 'styled-components';

export const Container = styled.div`
    .mainAluno {
        header {
            text-align: center;

            h1 {
                font-size: 1.8em;
                color: #3577CC;
                font-weight: 700;
                margin-bottom: 1em;
            }

            button {
                text-transform: none;
                padding: 1em 5em;
            }
        }
    }

    .mainProf {
        
    }
`;

export const Section = styled.section`
    margin-top: 1em;
    background-color: rgb(215, 196, 183, .2);
    padding: 5em;

    .cursos {

        .title {
            margin: 2em 0 1em 0;
            text-align: center;
            font-weight: 500;
            font-size: 2em;
            color: #4c86d3;
        }

        .box {
            overflow: auto;
            max-height: 50vh;
            width: 75%;
            margin: 0 auto;
            margin-top: 1.2em;
            border: 1px solid black;
            padding: 1em;

            h1 {
                font-size: 1.3em;
            }

            h2 {
                text-align: center;
                font-size: x-large;
                font-weight: 700;
            }

            span {
                margin-top: 1em;
                display: flex;
                gap: 5px;
            }

            h1, p:first-child {
                font-weight: 700;
            }

            .card {
                width: 95%;
            }
        }

        .plansGrid {
            width: 75%;
            margin: 0 auto;
            margin-top: 1em;
            margin-bottom: 1em;
            
            .MuiCard-root {
                min-height: 100%;
                h1 {
                    font-size: 1.5em;
                    text-align: center;
                    font-weight: 500;
                    padding-bottom: .2em;
                }
                
                h3 {
                    color: #3577CC;
                    font-size: 1em;
                    text-align: center;
                    font-weight: 600;
                    padding-bottom: .4em;
                }

                p {
                    text-align: center;
                    font-weight: 500;
                }
            }

            .MuiCard-root:hover{
                box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 50%);
                cursor: pointer;
            }

            .MuiPaper-outlined {
                border: 2px solid #3577CC;
            }
        }
    }

`;