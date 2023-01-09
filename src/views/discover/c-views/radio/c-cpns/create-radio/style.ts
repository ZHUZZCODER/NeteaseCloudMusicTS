import styled from 'styled-components'

export const CreateRadioWrapper = styled.div`
  margin: 35px 0 0 0;
  .createRadioContent {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    > li:nth-of-type(-n + 2) {
      border-bottom: 1px solid #e7e7e7;
    }
  }
`
