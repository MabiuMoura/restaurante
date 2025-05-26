import styled from "styled-components";

export const ReceiptsContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-bottom:50px;
`

export const ReceiptsHeader = styled.div`
    width:100%;
    height: 50px;
    display:flex;
    justify-content:start;
    align-items:center;
    margin-bottom: 50px;
    gap: 50px;
`

export const ReceiptsSearchContainer = styled.div`
    display: flex;
    padding: 0px 50px;
    width: 100%;
    height: 50px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

export const SearchFiltersContainer = styled.div`
  display: grid;
  gap: 10px;
  width:350px;
  grid-template-columns: 1fr 1fr;
`

export const ReceiptsTableContainer = styled.div`
    margin-top:30px;
    width: 100%;
    `
