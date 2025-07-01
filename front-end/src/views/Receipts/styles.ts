import styled from "styled-components";

export const ReceiptsContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0px 10px 30px 10px;
`

export const ReceiptsHeader = styled.div`
    width:100%;
    height: 50px;
    display:flex;
    justify-content:start;
    align-items:center;
    margin-bottom: 30px;
    gap: 50px;
`

export const ReceiptsSearchContainer = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    align-items: center;
    //background-color:red;
    flex-direction: row;
    justify-content: space-between;
`

export const SearchFiltersContainer = styled.div`
  display: grid;
  width:350px;
  grid-template-columns: 1fr 1fr;
`

export const OpenModalButtonContainer = styled.div`
    width: 180px;
    height:55px;
`

export const ReceiptsTableContainer = styled.div`
    margin-top:30px;
    width: 100%;
    `
