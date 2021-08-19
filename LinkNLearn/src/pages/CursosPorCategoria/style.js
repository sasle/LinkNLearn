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
    margin-top: 1em;
    background-color: rgb(215, 196, 183, .2);
    padding: 5em;

    .box {
        padding: 1em;
        margin: 0 auto;
        border: 1px solid black;

        .MuiFormGroup-row {
            margin: 0 auto;
        }

        label {
            font-size: larger;
            text-align: center;
            font-weight: 500;
            color: #000000;
        }

        .MuiFormControlLabel-root {
            margin: .5em 0;
        }

        .MuiFormControlLabel-root:first-child, .MuiFormControlLabel-root:last-child {
            margin: 0;
        }


        .MuiTypography-body1 {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
        }
        
        hr {
            height: 1px;
            border: none;
            background-color: #000000;
        }

        .card {
            width: 100%;
            margin: .2em 0;
        }

        .paginator {
            margin: 0 auto;

            button {
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
            }
        }

    }


`;