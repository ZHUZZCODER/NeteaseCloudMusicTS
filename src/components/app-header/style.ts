import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
  background: #242424;

  .appHeaderBox {
    display: flex;
    justify-content: space-between;
    height: 70px;
    .headerLeft {
      display: flex;
      .logo {
        display: block;
        width: 157px;
        height: 70px;
        background-position: 0 0;
        text-indent: -9999px;
        margin-right: 20px;
      }
      .left_titles {
        display: flex;
        .titleItem {
          position: relative;
          a {
            display: flex;
            align-items: center;
            color: #cccccc;
            height: 70px;
            padding: 0 19px;
          }
          &:last-of-type {
            ::after {
              position: absolute;
              width: 28px;
              height: 19px;
              content: '';
              background: url(${require('@/assets/img/sprite_01.png')}) -190px 0px;
              top: 20px;
              right: -15px;
            }
          }
        }
        .titleItem:hover,
        .active {
          color: #fff;
          background: #000;
          text-decoration: none;
        }
        .active {
          .icon {
            position: absolute;
            width: 12px;
            height: 7px;
            bottom: -1px;
            left: 50%;
            transform: translate(-50%, 0);
            background-position: -226px 0px;
          }
        }
      }
    }
    .headerRight {
      display: flex;
      align-items: center;
      .searchBox {
        width: 158px;
        height: 32px;
        .search {
          border-radius: 16px;
          font-size: 12px;
          color: #9b9b9b;
          .searchIcon {
            color: #333;
          }
        }
      }
      .framer {
        margin: 0 12px;
        width: 90px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        border-radius: 20px;
        border: 1px solid #4f4f4f;
        color: #ccc;
      }
      .framer:hover {
        color: #fff;
        border-color: #fff;
        cursor: pointer;
      }
      a {
        color: #787878;
        display: block;
      }
    }
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`
interface ISearchPanelWrapper {
  showPanel: boolean
}

export const SearchPanelWrapper = styled.div<ISearchPanelWrapper>`
  display: ${(props) => (props.showPanel ? 'block' : 'none')};
  position: absolute;
  top: 58px;
  width: 270px;
  background: #fff;
  box-shadow: 0px 4px 7px #555;
  border-radius: 4px;
  z-index: 9;
  .searchHeader {
    display: flex;
    color: ${(props) => props.theme.color.threeColor};
    padding: 10px 10px;
    border-bottom: 1px solid #bebebe;
    /* cursor: pointer; */
    &:hover {
      a {
        background-color: #bebebe;
      }
    }
  }
  .searchContentBox {
    .searchItem {
      display: flex;
      .searchCategory {
        padding: 10px;
      }
      .searchContent {
        flex: 1;
        border-top: 1px solid #bebebe;
        border-left: 1px solid #bebebe;
        .contentItem {
          cursor: pointer;
          padding: 10px;
          ${(props) => props.theme.mixin.textNowrap}
          &:hover {
            background-color: #bebebe;
          }
        }
      }
    }
    .searchItem:nth-child(1) {
      .searchContent {
        border-top: none;
      }
    }
  }
`
