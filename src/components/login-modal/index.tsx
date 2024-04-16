import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import type { FC, ReactNode } from 'react'
import GlobalModal from '../global-modal'
import style from './style.module.scss'
import { CloseOutlined } from '@ant-design/icons'
import { getQrCheck, getQrCreate, getQrKey } from '@/services/service'
import { fetchUserInfo } from '@/store/modules/global'
import LoginShow from '@/assets/img/loginshow.png'
import QRCode from 'qrcode.react'
import { useAppDispatch } from '@/store'
import { changeCookie } from '@/store/modules/global'

interface IProps {
  children?: ReactNode
  showModal: boolean
  changeLoginModal?: (status: boolean) => void
}

const LoginModal: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const { showModal, changeLoginModal } = props
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  //二维码失效
  const [qrCodeFail, setQrCodeFail] = useState(false)
  const timer = useRef<NodeJS.Timer | null>(null)

  //获取登录账号信息

  const generateOrCode = useCallback(async () => {
    const {
      data: { unikey }
    } = await getQrKey()
    const {
      data: { qrimg, qrurl }
    } = await getQrCreate(unikey)
    setQrCodeUrl(qrurl)
    clearTimer()
    timer.current = setInterval(async () => {
      const { code, cookie = '', message = '' } = await getQrCheck(unikey)
      switch (code) {
        case 800:
          //二维码过期
          setQrCodeFail(true)
          break
        case 801:
          //等待扫码
          break
        case 802:
          //待确认
          break
        case 803:
          //登录成功 获取到cookie 和message
          dispatch(changeCookie(cookie))
          //获取账号信息
          dispatch(fetchUserInfo(cookie))
          clearTimer()
          changeLoginModal?.(false)
          break
      }
    }, 2000)
  }, [timer.current, setQrCodeUrl, changeLoginModal])

  const clearTimer = () => {
    if (timer.current) {
      clearInterval(timer.current)
      timer.current = null
    }
  }

  useEffect(() => {
    if (showModal) generateOrCode()
    return () => {
      clearTimer()
    }
  }, [showModal])

  const changeLoginStatus = useCallback(() => {
    changeLoginModal?.(false)
  }, [changeLoginModal])

  //刷新
  const handleRefreshOrcode = useCallback(() => {
    if (qrCodeFail) generateOrCode()
  }, [qrCodeFail])

  const ModalContent = useMemo<ReactNode>(() => {
    return (
      <>
        {/* <header className={style['login-modal-header']}>
          <h2>登录</h2>
          <CloseOutlined
            className={style['close-icon']}
            onClick={changeLoginStatus}
          />
        </header> */}
        <section className={style['login-modal-content']}>
          <div className={style['login-modal-content-show']}>
            <img className={style['content-show-img']} src={LoginShow} alt="" />
            <div className={style['content-show-orcode']}>
              <h3>扫码登录</h3>
              <div className={style['orCode-box']}>
                {!!qrCodeUrl && <QRCode id="qrCode" value={qrCodeUrl} />}
                {qrCodeFail && (
                  <div className={style['orCode-fail']}>
                    <p className={style['fail-text']}>二维码已失效</p>
                    <a
                      className={style['refresh-btn']}
                      href={undefined}
                      onClick={handleRefreshOrcode}
                    >
                      点击刷新
                    </a>
                  </div>
                )}
              </div>
              <p className={style['orCode-desc']}>
                使用&nbsp;
                <a
                  className={style['link-desc']}
                  href="https://music.163.com/#/download"
                  rel="noopener noreferrer"
                  target="_blank"
                  data-log='{"oid":"btn_web_music_download","isPage":false,"events":["_ec"]}'
                >
                  网易云音乐APP
                </a>
                &nbsp;扫码登录
              </p>
            </div>
          </div>
          <a className={style['other-login']} href={undefined}>
            选择其他登录模式
          </a>
        </section>
      </>
    )
  }, [qrCodeUrl, qrCodeFail])

  // const modalStyle = {
  //   mask: {
  //     backgroundColor: 'transparent'
  //   }
  // }

  return (
    // <div className={style['login-modal-container']}>
    <GlobalModal
      // className={style['login-modal']}
      open={showModal}
      // centered={true}
      // modalRenderContent={ModalContent}
      title="登录"
      closeModalFn={changeLoginStatus}
      // maskStyle={{ backgroundColor: 'transparent' }}
    >
      {ModalContent}
    </GlobalModal>
    // </div>
  )
}

export default memo(LoginModal)
