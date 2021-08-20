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

    img {
        border-radius: 5px;
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

        span {
            margin-top: 1em;
            display: flex;
            gap: 5px;
        }

        h1, p:first-child {
            font-weight: 700;
        }
    }

    .contact {
        margin-top: 1.5em;

        h3 {
            font-weight: 700;
            font-size:1.2em;
            padding-bottom: 0.2em;
        }
    }

    .cursos {
        .title {
            margin: 2em 0 1em 0;
            text-align: center;
            font-weight: 600;
            font-size: 2em;
            color: #4c86d3;
        }
        .card {
            width: 95%;
        }
    }


`;