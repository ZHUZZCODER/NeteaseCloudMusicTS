import styled from 'styled-components'

export const PanelListWrapper = styled.div`
  width: 553px;
  display: flex;
  flex-direction: column;
  height: 260px;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
  z-index: 4;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgb(239, 239, 239);
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background: #868686;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: ${(props) => props.theme.color.secondColor};
  }
  &::-webkit-scrollbar-corner {
    background: #179a16;
  }

  .listItem {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 10px;
    cursor: pointer;
    background-color: #0000004d;
    :hover {
      background-color: ${(props) => props.theme.color.fourColor};

      .iconBox {
        visibility: visible;
      }
      .playIcon {
        visibility: visible;
      }
      .text {
        color: #ffffff;
      }
      .musicTitle {
        color: #ffffff;
      }
    }
    .playIcon {
      visibility: hidden;
      width: 10px;
      height: 13px;
      background-position: -182px 0;
      cursor: pointer;
    }

    .musicTitle {
      flex: 1;
      padding-left: 10px;
      line-height: 28px;
    }
    .iconBox {
      display: flex;
      visibility: hidden;
      .icon {
        width: 16px;
        height: 16px;
        margin: 0 0 0 10px;
      }
      .addIcon {
        background-position: -24px 0;
        :hover {
          background-position: -24px -20px;
        }
      }
      .shareIcon {
        background-position: 0 0;
        :hover {
          background-position: 0 -20px;
        }
      }
      .downloadIcon {
        background-position: -57px -50px;
        :hover {
          background-position: -80px -50px;
        }
      }
      .deleteIcon {
        background-position: -51px 0;
        :hover {
          background-position: -51px -20px;
        }
      }
    }

    .text {
      height: 28px;
      line-height: 28px;
      padding: 0 0 0 10px;
      cursor: pointer;
    }
    .musicAuthor {
      width: 70px;
      ${(props) => props.theme.mixin.textNowrap}
      color: #969696;
      :hover {
        text-decoration: underline;
      }
    }
    .musicTime {
      width: 35px;
      color: ${(props) => props.theme.color.threeColor};
      line-height: 28px;
    }
    .linkIcon {
      width: 14px;
      height: 16px;
      margin: 0 0 0 20px;
      background-position: -80px 0;
      :hover {
        background-position: -80px -20px;
      }
    }
  }

  .activePlay {
    .playIcon {
      visibility: visible;
    }
    .text {
      color: #ffffff;
    }
    .musicTitle {
      color: #ffffff;
    }
  }
`

export const EmptyShowWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: #aaa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .emptyIconBox {
    text-align: center;
    .emptyIcon {
      display: inline-block;
      width: 36px;
      height: 29px;
      margin-right: 10px;
      background-position: -138px 0;
      vertical-align: middle;
    }
  }
  .emptyTip {
    margin: 30px 0 0 0;
    a {
      text-decoration: underline;
      color: #aaa;
    }
  }
`
