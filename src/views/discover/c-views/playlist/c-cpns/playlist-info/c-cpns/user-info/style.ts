import styled from 'styled-components'

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  .info-img {
    margin: 0 10px 0 0;
  }
  .info-name {
    display: flex;
    &-text {
      color: #0c73c2;
    }
    &-icon {
      display: block;
      width: 13px;
      height: 13px;
      position: relative;
      top: -1px;
    }
  }
  .info-time {
    margin: 0 0 0 15px;
    color: #999;
  }
`
