import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    text-align: left;
    line-height: 2em;
    
    .cardContainer {
        background-color: #FFF000;
    }

    h1 {
        font-weight: 700;
    }
    
    .professor {
        margin-top: 0;
        font-size: .8em;
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
        min-width: fit-content;
    }
    .MuiCardContent-root:last-child {
        padding-bottom: 16px;
    }
`;