import styled from 'styled-components'

export const DiscoverNavWrapper = styled.div`
  height: 34px;
  background-color: #c20c0c;
  .discover-nav {
    margin-left: 180px;
    display: flex;
    .nav-item {
      a {
        display: block;
        margin: 7px 17px 0;
        padding: 0 13px;
        border-radius: 20px;
        line-height: 21px;
        color: #fff;
      }
      a:hover {
        background: #9b0909;
      }
      .active {
        background: #9b0909;
      }
    }
  }
`
