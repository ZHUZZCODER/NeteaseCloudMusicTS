import styled from 'styled-components'

export const RankingWrapper = styled.div`
  min-height: 700px;
  .rankingContent {
    display: flex;
    border: 1px solid #d3d3d3;
    background: url(${require('@/assets/img/wrap-bg3.png')}) repeat-y center 0;
  }
`

export const RankingLeftListWrapper = styled.div`
  flex: 1;
  padding: 20px 0 0 0;
  .ranking-title {
    padding: 20px 10px 12px 15px;
    font-family: simsun;
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => props.theme.color.secondColor};
  }
`

export const RankingRightWrapper = styled.div`
  width: 740px;
  padding: 40px 30px 40px 40px;
`
