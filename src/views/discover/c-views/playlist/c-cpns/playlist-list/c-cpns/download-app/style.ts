import styled from 'styled-components'

export const DonwloadAppWrapper = styled.div`
  margin: 30px 0 40px 0;
  height: 66px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .hint {
    text-align: center;
  }
  .downloadBtn {
    width: 120px;
    height: 30px;
    background-image: linear-gradient(90deg, #ff5a4c 0%, #ff1d12 100%);
    border-radius: 18px;
    font-size: 12px;
    color: #ffffff !important;
    margin: 0 auto;
    border: none;
  }
`
