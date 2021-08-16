import styled from 'styled-components';

export const FooterComponent = styled.footer`
    margin: 0 1em;
    padding: 1em 0;
    overflow: hidden;

    * {
        color: #3577CC;
    }
    
    img {
        min-width: 12vw;
        width: 12vw;
    }

    .title {
        margin-bottom: 1em;
        font-size: .9em;
    }

    .navigationOptions {
        font-size: .9em;
        font-weight: 700;
    }

    .copyrightDiv {
        align-self: flex-end;
        
        span {
            display: flex;
            gap: 0.3em;
            align-self: flex-end;
    
            p {
                font-weight: 600;
            } 
        }
    }

`;



