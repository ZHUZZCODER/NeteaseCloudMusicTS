import styled from 'styled-components'

export const TopSwiperWrapper = styled.div`
  .swiperContent {
    display: flex;
    height: 285px;
    position: relative;
    .swiperLeft {
      width: 730px;
      position: relative;
      .swiperItem {
        img {
          width: 100%;
          height: 285px;
        }
      }
      .dotList {
        display: flex;
        position: absolute;
        left: 50%;
        bottom: 4px;
        transform: translate(-50%, 0);
        > li {
          width: 20px;
          height: 20px;
          margin: 0 2px;
          background: url(${require('@/assets/img/banner_sprite.png')}) 3px -343px;
          cursor: pointer;
        }
        > .liActive {
          background-position: -95px -344px;
        }
      }
    }

    .slider {
      position: absolute;
      width: 37px;
      height: 63px;
      top: 50%;
      transform: translate(0, -50%);
      background-image: url(${require('@/assets/img/banner_sprite.png')});
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }

    .sliderLeft {
      left: -68px;
      background-position: 0 -360px;
    }
    .sliderRight {
      right: -68px;
      background-position: 0 -508px;
    }
  }
`

export const SwiperRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  width: 254px;
  height: 285px;
  background: url(${require('@/assets/img/download.png')});
  position: relative;
  .downloadTitle {
    color: #8d8d8d;
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translate(-50%, 0);
    white-space: nowrap;
  }
`
