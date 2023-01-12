import styled from 'styled-components'

export const FilterNameWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0 0;
  .filterItem {
    flex-shrink: 0;
    font-size: 12px;
    width: 45px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    cursor: pointer;
    border-radius: 2px;
    &:hover {
      text-decoration: underline;
    }
  }
  .filterNormal {
    width: 21px;
  }
  .activeFilter {
    background-color: #c20c0c;
    color: #fff;
  }
`
