import styled from 'styled-components'

export const HotRecommendWrapper = styled.div`
  .songList {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    * > {
      flex-shrink: 0;
    }
  }
`
