import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  .recommendContent {
    display: flex;
    background: url(${require('@/assets/img/wrap-bg.png')});
    border: 1px solid #d3d3d3;
    .recommendLeft {
      width: 729px;
      padding: 20px 20px 40px;
    }
    .recommendRight {
      width: 250px;
    }
  }
`
