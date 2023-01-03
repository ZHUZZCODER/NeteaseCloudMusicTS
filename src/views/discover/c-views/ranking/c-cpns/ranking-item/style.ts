import styled from 'styled-components'

interface IRANKINGITEM {
  isActive: boolean
}

export const RankingItemWrapper = styled.a<IRANKINGITEM>`
  padding: 10px 0 10px 20px;
  display: flex;
  width: 240px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? '#E6E6E6' : 'transparent')};
  .itemLeft {
    width: 40px;
    height: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .itemRight {
    flex: 1;
    margin: 2px 0 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    .itemTitle {
      color: ${(props) => props.theme.color.secondColor};
      ${(props) => props.theme.mixin.textNowrap}
    }
    .itemContent {
      color: ${(props) => props.theme.color.sixColor};
      ${(props) => props.theme.mixin.textNowrap}
    }
  }
`
