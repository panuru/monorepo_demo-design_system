import styled from 'styled-components';

export default styled.button`
    width: 100%;
    margin-top: 0.4em;
    background-color: ${props => props.theme.colors.black};
    border: solid 1px ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    padding: 0.4em;
    text-align: center;

    &:hover {
        color: ${props => props.theme.colors.black};
        background-color: ${props => props.theme.colors.white};
    }
`
