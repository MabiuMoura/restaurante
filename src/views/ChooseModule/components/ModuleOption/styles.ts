import styled from "styled-components";

export const ModuleContainerBackground = styled.div<{ $backgroundColor: string }>`

    
    width: 450px;
    height: 270px;
    padding: 5px;
    border-radius: 30px;
    position: relative;
    cursor: pointer;
    background: linear-gradient(45deg,
        ${props => props.$backgroundColor} 0%,
        ${props => props.$backgroundColor} 65%,
        black 100%
    );
    &:hover{
        background: ${props => props.$backgroundColor}
    }
`

export const ModuleContainerContent = styled.div<{ $primaryColor: string, $secundaryColor: string  }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: black;
    font-size: 25px;
    color: ${props => props.$primaryColor};
    border-radius: 25px;
    &:hover{
        color:white;
        background: linear-gradient(45deg,
        ${props => props.$primaryColor} 0%,
        ${props => props.$secundaryColor} 100%
    );
    }
`