import styled from 'styled-components'

export const FocusWrapper = styled.div`
  .focusContent {
    min-height: 700px;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    .focusBox {
      position: relative;
      width: 902px;
      height: 414px;
      margin: 0 auto;
      padding: 70px 0 0 0;
      box-sizing: content-box;
      background: url(${require('@/assets/img/friend_sprite.jpg')}) no-repeat 0
        70px;
      .focusDesc {
        position: absolute;
        top: 250px;
        left: 533px;
        width: 268px;
        line-height: 23px;
        font-size: 14px;
        color: ${(props) => props.theme.color.threeColor};
      }
      .focusBtn {
        position: absolute;
        top: 330px;
        left: 535px;
        width: 157px;
        height: 48px;
        text-indent: -99999px;
        background: url(${require('@/assets/img/friend_sprite.jpg')}) no-repeat;
        background-position: 0 99999px;
        &:hover {
          background-position: 0 -430px;
        }
      }
    }
  }
`
