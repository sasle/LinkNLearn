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
`;

export const Section = styled.section`
    margin-top: 1em;
    background-color: rgb(215, 196, 183, .2);
    padding: 5em;
    
    div {
        display: flex;
        place-content: center;
        img {
            border-radius: 5px;
        }
    }

    .grid {
        margin: 2em 0;

        .MuiFormControl-root {
            width: 15vw;
        }

    }
`;