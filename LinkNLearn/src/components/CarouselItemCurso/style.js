import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    .gridCurso {
        border-radius: 5px;
        padding: 0;
        min-width: fit-content;
        width: fit-content;
        background-color: #FFF000;
        margin: 0 auto;

        .titulo {
            line-break: anywhere;
            font-weight: 700;
            font-size: 1.5em;
            padding-bottom: 0.5em;
        }

        p {
            font-weight: 500;
        }


        img {
            border-top-right-radius: 5px;
            min-width: 14vw;
            width: 14vw;
            height: 100%;
        }

        .subinfo {
            span {
                display: flex;
                align-items: center;
                gap: .1em;
            }

            h3 {
                    line-break: anywhere;
                    font-weight: 700;
            }
        }
    }
`;