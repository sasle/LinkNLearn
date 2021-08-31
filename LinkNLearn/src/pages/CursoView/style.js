import styled from 'styled-components';

export const Container = styled.div`
    .main {
        margin-top: 1em;

        .title {
            gap: 2em;
            font-size: 2em;
            font-weight: 700;
            color: #4c86d3;
        }
    }

`;
export const Section = styled.section`
    margin-top: 1em;
    background-color: rgb(215, 196, 183, .2);
    padding: 5em;

    .infoBox {
        width: 75%;
        margin: 1em 0;
        padding: 1em;
        border: 1px solid black;
        
        span {
            display: flex;
        }

        .courseDesc {
            min-height: 100%;
            height: 100%;
            border: 1px solid black;
            padding: 1em;
            flex-direction: column;

            p:first-child {
                font-weight: 700;
                padding-bottom: 0.5em;
            }
        }

        img {
            min-width:100%;
            border-radius: 5px;
        }

        .nota {
            align-items: center;

            p {
                font-weight: 700;  
            }
        }

        .professorInfo {
            gap: 1em;
            p:first-child {
                font-weight: 600;
            }
            p:last-child {
                font-weight: 600;
                color: #4c86d3;
            }
        }

        .actionButtons {
            width: 100%;
            height: 100%;
        }

        .cursoDescription {
            display: flex;
            align-items: baseline;
            padding: .5em 0;
            height: 100%;
            border: 1px solid black;
            
            p {
                padding: 0 .5em;
            }
        }

        h1 {
            font-size: 1.5em;
            text-align: center;
            font-weight: 600;
            color: #4c86d3;
        }

        .infosDoCurso {

            span {
                gap: .3em;
                p:nth-child(2) {
                    font-weight: 500;
                }
            }
            p {
                margin: 1em 0;
                font-weight: 700;
            }
        }
        
        .ementa {
            ul {
                margin-left: 1.2em;
            }
            
            li {
                font-weight: 700;
            }
        }

        .requisitos {
            ul {
                margin-left: 1.2em;
            }
            
            li {
                font-weight: 500;
            }
        }
    }

    hr {
        height: 1px;
        background-color: black;
        border: 1px solid black;
        width: 75%;
    }

    .feedback {
        text-align: center;
        .title {
            padding: 1em 0;
            font-size: 2em;
            text-align: center;
            font-weight: 600;
            color: #4c86d3;
        }

        button {
            width: 100%;
            margin-top: 1em;
            text-align: center;
        }
    }
`;