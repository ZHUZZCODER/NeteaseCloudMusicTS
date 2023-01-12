import styled from 'styled-components'

export const SingerCategoryWrapper = styled.div`
  width: 180px;
  padding: 50px 10px 40px;
  .categoryBox {
    padding: 16px 0 0 0;
    .categoryTitle {
      height: 25px;
      padding: 0 0 0 14px;
      font-size: 16px;
      font-family: 'Microsoft Yahei';
    }
    .categoryUlBox {
      padding: 0 0 10px 0;
      border-bottom: 1px solid #d3d3d3;
      .singer-li {
        line-height: 29px;
        margin-bottom: 2px;
        background-position: 0 -30px;
        .singerItem {
          display: block;
          width: 133px;
          height: 29px;
          padding: 0 0 0 27px;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .singerLiActive {
        background-position: 0 0;
        color: #c20c0c;
        .singerItem {
          &:hover {
            text-decoration: none;
          }
        }
      }
    }

    &:first-child {
      padding: 0;
    }
  }
`
