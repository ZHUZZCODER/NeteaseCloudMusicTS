import styled from 'styled-components'

export const NavHeaderV1Wrapper = styled.div`
  height: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c10d0c;

  .navLeft {
    display: flex;
    align-items: center;
    .leftTitle {
      padding-left: 34px;
      background-position: -225px -160px;
      a {
        font-size: 20px;
      }
    }
    .leftList {
      display: flex;
      margin-left: 20px;
      color: ${(props) => props.theme.color.threeColor};
      .line {
        margin: 0 10px;
      }
      .line:last-of-type {
        display: none;
      }
      .item:hover {
        text-decoration: underline;
      }
    }
  }
  .navRight {
    display: flex;
    color: ${(props) => props.theme.color.threeColor};
    a:hover {
      text-decoration: underline;
    }
    .moveIcon {
      width: 12px;
      height: 12px;
      margin: 0 0 0 4px;
      background-position: 0 -240px;
    }
  }
`
