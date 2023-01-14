import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DiscoverFooterWrapper, BtnItemWrapper } from './style'
import { footerData, officialData } from '@/assets/data/local_data'

interface IProps {
  children?: ReactNode
}

const DiscoverFooter: FC<IProps> = (props) => {
  return (
    <DiscoverFooterWrapper>
      <div className="wrap-v2 footerContent">
        <ul className="btnBox">
          {footerData.map(({ name, link, bgP, bgPH }) => {
            return (
              <BtnItemWrapper
                key={name}
                className="btnItem"
                bgP={bgP}
                bgPH={bgPH}
              >
                <a
                  className="foot_enter_new2 btnImg"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                ></a>
                <div className="btnTx">{name}</div>
              </BtnItemWrapper>
            )
          })}
        </ul>
        <div className="descriptionBox">
          <ul className="txList">
            {officialData.map(({ name, link }) => {
              return (
                <li key={name} className="txBox">
                  <a
                    className="textLink"
                    href={link}
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    {name}
                  </a>
                  <span className="line">|</span>
                </li>
              )
            })}
          </ul>
          <div className="reportInfo">
            <a
              className="reportTx"
              href="https://jubao.163.com"
              target={'_blank'}
              rel="noreferrer"
            >
              廉正举报
            </a>
            <span className="reportTx">
              不良信息举报邮箱: 51jubao@service.netease.com
            </span>
            <span>客服热线：95163298</span>
          </div>
          <div className="licenceInfo">
            <span>互联网宗教信息服务许可证：浙（2022）0000120</span>
            <span>增值电信业务经营许可证：浙B2-20150198</span>
            <a
              className="licenceLink"
              href="https://beian.miit.gov.cn/#/Integrated/index"
              target={'_blank'}
              rel="noreferrer"
            >
              粤B2-20090191-18 工业和信息化部备案管理系统网站
            </a>
          </div>
          <div className="copyrightInfo">
            <span className="copyright">网易公司版权所有©1997-2023</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a
              className="copyrightLink"
              href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png"
              target={'_blank'}
              rel="noreferrer"
            >
              浙网文[2021] 1186-054号
            </a>
            <a
              className="onlineLink"
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
              target={'_blank'}
              rel="noreferrer"
            >
              <span className="police-logo"></span>
              <span className="police-text">浙公网安备 33010902002564号</span>
            </a>
          </div>
        </div>
      </div>
    </DiscoverFooterWrapper>
  )
}

export default memo(DiscoverFooter)
