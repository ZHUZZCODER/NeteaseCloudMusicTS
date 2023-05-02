import React, { Fragment, memo } from 'react'
import type { FC, ReactNode } from 'react'
import OperateButton from '@/components/operate-button'
import { SingerInfoNavWrapper } from './style'

interface IProps {
  children?: ReactNode
  // //姓名
  // nickname: string
  // //性别
  // gender: number
  // //认证
  // // authenticationTypes: number
  // //认证
  // description: string
  // //音乐人
  // signature: string
}

const SingerInfoNav: FC<IProps> = (props) => {
  return (
    <SingerInfoNavWrapper>
      <div className="singerInfo">
        <div className="leftInfo">
          <h2 className="showInfo">
            {/* 网易云这样用按钮是为了按钮动态效果 */}
            <span className="font_v1 singer_name">张惠妹aMEI</span>
            <span className="grade sprite_icon3">
              1<i className="gradeIcon sprite_icon3"></i>
            </span>
            <i className="sexIcon sprite_icon2"></i>
            <OperateButton
              buttonClassList={['sprite_button2', 'sendMessage']}
              textClassList={['iconText']}
              btnText={'发私信'}
            />
            <OperateButton
              buttonClassList={['sprite_button2', 'attention']}
              textClassList={['']}
              btnText={'关注'}
            />
          </h2>
          <div className="messageOrattention"></div>
        </div>
        <OperateButton
          buttonClassList={['sprite_button', 'seeSingerBtn']}
          textClassList={['sprite_button', 'seeText ']}
          btnText={'查看歌手页'}
        />
      </div>
      <div className="singerAuthentication">
        <OperateButton
          buttonClassList={['sprite_icon3', 'authenticationIcon']}
          textClassList={[]}
          btnText={''}
        />
        <span className="authenDesc">台湾歌手张惠妹</span>
      </div>
      <ul className="singerState">
        <li className="stateLi">
          <a className="stateText" href="undefined">
            <strong>1</strong>
            <span>动态</span>
          </a>
        </li>
        <li className="stateLi">
          <a className="stateText" href={undefined}>
            <strong>10</strong>
            <span>关注</span>
          </a>
        </li>
        <li className="stateLi">
          <a className="stateText" href={undefined}>
            <strong>1003940</strong>
            <span>粉丝</span>
          </a>
        </li>
      </ul>
      <div className="singerIntroduce">
        个人介绍：亞洲國寶級傳奇天后「 a MEI」我是a
        MEI，一個你認識很久，卻認識不完的女人。
      </div>
      <div className="singerAddress">所在地区：台湾省 - 台北市</div>
    </SingerInfoNavWrapper>
  )
}

export default memo(SingerInfoNav)
