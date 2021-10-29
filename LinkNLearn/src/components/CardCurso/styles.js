import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    text-align: left;
    line-height: 2em;

    .cardContainer {
        background-color: #FFF000;
        margin: 0 auto;
        width: 35vw;
        height: 16vh;
    }

    .cardContainer:hover {
        box-shadow: 0px 0px 5px #4c86d3;
    }

    h1 {
        width: 100%;
        font-weight: 700;
        font-size: .8em;
    }
    
    .professor {
        margin-top: 0;
        font-size: .9em;
        font-weight: 500;
    }

    span {
        display: flex;
        align-items: center;

        .nota {
            font-size: 1em;
        }
    }
    
    .preco, .nivel, .nota {
        font-weight: 700;
    }

    img {
        width: 100%;
        height: 105%;
        object-fit: cover;
    }
    .MuiCardContent-root:last-child {
        padding-bottom: 16px;
    }
`;