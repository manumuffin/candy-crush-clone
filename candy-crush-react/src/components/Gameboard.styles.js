import styled from 'styled-components'

export const Gameboard = styled.div`
    width: 560px; /* 560 because it's nicely dividable by 8 since ther are 8 rows & columns */
    height: 560px;
    display: flex;
    flex-wrap: wrap;
    background-color: #B8B8FF;
    border-radius: 10px;
`