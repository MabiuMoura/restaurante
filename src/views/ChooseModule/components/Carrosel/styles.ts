import styled from "styled-components";


export const CarroselContainer = styled.div`
    display:flex;
    width:100%;
    height:330px;
`

export const CarroselItem = styled.div<{
    $background: string,
    $isHovered: boolean,
    $isAnotherHovered: boolean
}>`
    display: flex;
    justify-content:center;
    align-items:center;
    font-size:25px;
    height: 100%;
    background-color: ${props => props.$background};
    transition: all 0.4s ease;
    width: ${props =>
        props.$isHovered ? '60%' :
        props.$isAnotherHovered ? '20%' : '33.3%' };
`