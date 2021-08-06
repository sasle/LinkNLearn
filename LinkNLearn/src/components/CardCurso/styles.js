import styled from "styled-components";

export const Container = styled.div`
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
    
    .preco, .nivel {
        font-weight: 700;
    }

    img {
        height: auto;
    }
    .MuiCardContent-root:last-child {
        padding-bottom: 16px;
    }
`;