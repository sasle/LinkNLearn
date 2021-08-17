import styled from "styled-components";

export const Container = styled.div`
    text-align: left;
    line-height: 2em;
    
    .cardContainer {
        background-color: rgba(215, 196, 183, 0.6);

        .imgCustomContainer {
            padding: 0;
            width: auto;
            width: 20%;
            max-width: 20%;
        }
    }

    h1 {
        font-weight: 700;
    }
    
    span {
        display: flex;
        align-items: center;

        .nota {
            font-size: 1em;
        }
    }
    

    .nota {
        font-weight: 700;
    }

    img {
        min-width: fit-content;
    }
`;