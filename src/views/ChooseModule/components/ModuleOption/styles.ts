import styled, { css } from "styled-components";

export const ModuleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 45px;
`;

export const ModuleContainerBackground = styled.div<{
    $backgroundColor: string;
    $isHovered: boolean;
    $isOtherHovered: boolean;
}>`
    width: ${({ $isHovered, $isOtherHovered }) =>
        $isHovered ? '550px' : $isOtherHovered ? '400px' : '450px'};
    height: ${({ $isHovered, $isOtherHovered }) =>
        $isHovered ? '370px' : $isOtherHovered ? '220px' : '270px'};

    padding: 5px;
    border-radius: 30px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    background: linear-gradient(45deg,
        ${props => props.$backgroundColor} 0%,
        ${props => props.$backgroundColor} 65%,
        black 100%
    );

    &:hover {
        background: ${props => props.$backgroundColor};
    }
`;

export const ModuleContainerContent = styled.div<{
    $primaryColor: string;
    $secundaryColor: string;
}>`
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
    transition: all 0.3s ease-in-out;

    &:hover {
        color: white;
        background: linear-gradient(45deg,
            ${props => props.$primaryColor} 0%,
            ${props => props.$secundaryColor} 100%
        );
    }
`;
