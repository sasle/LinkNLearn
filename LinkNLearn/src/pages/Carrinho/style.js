import styled from 'styled-components';

export const Container = styled.div`
    .main {
        margin-top: 1em;

        .title {
            text-align: center;
            font-size: 2em;
            font-weight: 700;
            color: #4c86d3;
            gap: 2em;
        }
    }
`;

export const Section = styled.section`
    margin-top: 1em;
    background-color: rgb(215, 196, 183, .2);
    padding: 5em;

    .box {
        padding: 1em;
        margin: 0 auto;
        border: 1px solid black;
        margin-bottom: 1em;

        button {
            width: 75%;
        }

        .MuiButton-label {
            justify-content: space-evenly;
        }

        .total {
            font-weight: 700;
            font-size: x-large;
        }

        .finish {
            width: 100%;
            height: 4em;
        }
    }

    .padding {
        padding: 3em;
    }


`;