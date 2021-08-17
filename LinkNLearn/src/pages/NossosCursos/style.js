import styled from 'styled-components';

export const Container = styled.div`
    .main {
        margin-top: 1em;

        .title {
            text-align: center;
            font-size: 2em;
            font-weight: 700;
            color: #4c86d3;
        }
    }
`;

export const Section = styled.section`
    height: 73vh;
    margin-top: 1em;
    background-color: rgb(215, 196, 183, .2);

    .subtitle {
        text-align: center;
        padding-top: 1em;
        margin-bottom: 1em;
        font-size: 1.5em;
        font-weight: 700;
    }

    .selecioneContainer {
        margin-bottom: 1em;

        .selecione {
            border: 1px solid black;
            padding-top: 1em;
            margin-bottom: 1.5em;
            font-size: 1.2em;
            width: fit-content;
            margin: 0 auto;
            padding: 15px;
        }
    }

    .carouselOcteto {
        width: 45%;
        margin: 0 auto;
        padding-bottom: 2em;
    }
`;