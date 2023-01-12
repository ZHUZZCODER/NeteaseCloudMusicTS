import styled from 'styled-components'
import { property } from 'underscore'

export const SingerContentWrapper = styled.div`
  flex: 1;
  padding: 40px;
  .joinSinger {
    margin: 20px 0 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .joinSingerShort {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px 0 0 17px;
    border-top: 1px dotted #000;
    .singer-info {
      flex-shrink: 0;
      display: flex;
      width: 130px;
      height: 30px;
      align-items: center;
      box-sizing: content-box;
      .singer-name {
        max-width: 105px;
        color: ${(props) => props.theme.color.secondColor};
        ${(props) => props.theme.mixin.textNowrap}
      }
      .singer-icon {
        width: 17px;
        height: 18px;
        background-position: 0 -740px;
      }
    }
  }
`
