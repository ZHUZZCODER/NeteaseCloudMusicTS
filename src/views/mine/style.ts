import styled from 'styled-components'

export const MineWrapper = styled.div`
  .mineContent {
    min-height: 700px;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    background-color: #fff;

    .loginBox {
      position: relative;
      width: 807px;
      height: 268px;
      padding: 104px 0 0 0;
      margin: 0 auto;
      background: url(${require('@/assets/img/mine_sprite.png')}) no-repeat 0
        104px;
      box-sizing: content-box;
      .loginBtn {
        position: absolute;
        top: 306px;
        left: 482px;
        width: 167px;
        height: 45px;
        background-color: red;
        text-indent: -99999px;
        background: url(${require('@/assets/img/mine_sprite.png')}) no-repeat 0 -99999px;
        &:hover {
          background-position: 0 -278px;
        }
      }
    }
  }
`
