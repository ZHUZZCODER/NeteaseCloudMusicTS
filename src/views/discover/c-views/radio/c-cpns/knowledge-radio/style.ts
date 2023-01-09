import styled from 'styled-components'

export const KnowledgeRadioWrapper = styled.div`
  margin: 35px 0 0 0;
  .knowledgeRadioContent {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    > li:nth-of-type(-n + 2) {
      border-bottom: 1px solid #e7e7e7;
    }
  }
`
