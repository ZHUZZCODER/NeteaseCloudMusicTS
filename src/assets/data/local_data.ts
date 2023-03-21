export const footerLinks = [
  {
    title: '服务条款',
    link: 'https://st.music.163.com/official-terms/service'
  },
  {
    title: '隐私政策',
    link: 'https://st.music.163.com/official-terms/privacy'
  },
  {
    title: '儿童隐私政策',
    link: 'https://st.music.163.com/official-terms/children'
  },
  {
    title: '版权投诉指引',
    link: 'https://music.163.com/st/staticdeal/complaints.html'
  },
  {
    title: '意见反馈',
    link: '#'
  }
]

export const footerImages = [
  {
    link: 'https://music.163.com/st/userbasic#/auth'
  },
  {
    link: 'https://music.163.com/recruit'
  },
  {
    link: 'https://music.163.com/web/reward'
  },
  {
    link: 'https://music.163.com/uservideo#/plan'
  }
]

// discover中的数据
export const discoverMenu = [
  {
    title: '推荐',
    link: '/discover/recommend'
  },
  {
    title: '排行榜',
    link: '/discover/ranking'
  },
  {
    title: '歌单',
    link: '/discover/song'
  },
  {
    title: '主播电台',
    link: '/discover/radio'
  },
  {
    title: '歌手',
    link: '/discover/singer/'
  },
  {
    title: '新碟上架',
    link: '/discover/album'
  }
]

// 热门主播
export const hotRadios = [
  {
    picUrl:
      'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg',
    name: '陈立',
    position: '心理学家、美食家陈立教授',
    url: '/user/home?id=278438485'
  },
  {
    picUrl:
      'http://p1.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg',
    name: 'DJ艳秋',
    position: '著名音乐节目主持人',
    url: '/user/home?id=91239965'
  },
  {
    picUrl:
      'http://p1.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg',
    name: '国家大剧院古典音乐频道',
    position: '国家大剧院古典音乐官方',
    url: '/user/home?id=324314596'
  },
  {
    picUrl:
      'http://p1.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg',
    name: '谢谢收听',
    position: '南京电台主持人王馨',
    url: '/user/home?id=1611157'
  },
  {
    picUrl:
      'http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg',
    name: 'DJ晓苏',
    position: '独立DJ，CRI环球旅游广播特邀DJ',
    url: '/user/home?id=2313954'
  }
]

// 歌手类别
export const artistCategories = [
  {
    title: '推荐',
    area: -1,
    artists: [
      {
        name: '推荐歌手',
        type: 1,
        url: '/discover/singer/',
        id: 0
      },
      {
        name: '入驻歌手',
        type: 2,
        url: '/discover/singer/signed/',
        dataPath: '/artist/list/?cat=5001'
      }
    ]
  },
  {
    title: '华语',
    area: 7,
    artists: [
      {
        name: '华语男歌手',
        url: '/discover/singer/?cat=1001',
        type: 1
      },
      {
        name: '华语女歌手',
        url: '/discover/singer/?cat=1002',
        type: 2
      },
      {
        name: '华语组合/乐队',
        url: '/discover/singer/?cat=1003',
        type: 3
      }
    ]
  },
  {
    title: '欧美',
    area: 96,
    artists: [
      {
        name: '欧美男歌手',
        url: '/discover/singer/?cat=2001',
        type: 1
      },
      {
        name: '欧美女歌手',
        url: '/discover/singer/?cat=2002',
        type: 2
      },
      {
        name: '欧美组合乐队',
        url: '/discover/singer/?cat=2003',
        type: 3
      }
    ]
  },
  {
    title: '日本',
    area: 8,
    artists: [
      {
        name: '日本男歌手',
        url: '/discover/singer/?cat=6001',
        type: 1
      },
      {
        name: '日本女歌手',
        url: '/discover/singer/?cat=6002',
        type: 2
      },
      {
        name: '日本组合/乐队',
        url: '/discover/singer/?cat=6003',
        type: 3
      }
    ]
  },
  {
    title: '韩国',
    area: 16,
    artists: [
      {
        name: '韩国男歌手',
        url: '/discover/singer/?cat=7001',
        type: 1
      },
      {
        name: '韩国女歌手',
        url: '/discover/singer/?cat=7002',
        type: 2
      },
      {
        name: '韩国组合/乐队',
        url: '/discover/singer/?cat=7003',
        type: 3
      }
    ]
  },
  {
    title: '其他',
    area: 0,
    artists: [
      {
        name: '其他男歌手',
        url: '/discover/singer/?cat=4001',
        type: 1
      },
      {
        name: '其他女歌手',
        url: '/discover/singer/?cat=4002',
        type: 2
      },
      {
        name: '其他组合乐队',
        url: '/discover/singer/?cat=4003',
        type: 3
      }
    ]
  }
]

export const hotSong = [
  {
    imgUrl:
      'http://p2.music.126.net/L9o79rTIcDWczQSJtpU2Tg==/109951167933404557.jpg',
    title: 'Chill Time丨浸润于夜色中的一抹寂静',
    description: '丨IIIIIIIIII丨',
    iconUrl:
      'https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340194/0903/b735/7c7a/0dddcdf78047d397d24125840e54ab5b.png'
  },
  {
    imgUrl:
      'http://p2.music.126.net/JcpOXM243FptA9tRYnPFlw==/109951167423159409.jpg',
    title: '『猫咪喜欢的轻音乐』持续更新',
    description: '冰美式三分苦加浓...',
    iconUrl:
      'https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340194/0903/b735/7c7a/0dddcdf78047d397d24125840e54ab5b.png'
  },
  {
    imgUrl:
      'http://p2.music.126.net/92NWlGo76ha-if-WMK3vCg==/1410673428769729.jpg',
    title: '世界上很好听的纯音乐（经典不朽）',
    description: '橘子树风车',
    iconUrl:
      'https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340194/0903/b735/7c7a/0dddcdf78047d397d24125840e54ab5b.png'
  },
  {
    imgUrl:
      'http://p2.music.126.net/B0YtENYuA3HFki3Ht_TniA==/109951163469578210.jpg',
    title: '正念净心之冥想调适',
    description: '云乡寻梦人',
    iconUrl:
      'https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340194/0903/b735/7c7a/0dddcdf78047d397d24125840e54ab5b.png'
  },
  {
    imgUrl:
      'http://p2.music.126.net/4hCpqWeNupK-7KbawyB-3w==/109951167330131366.jpg',
    title: '高效率音乐 | 学习不是苦差事',
    description: 'Tobby___',
    iconUrl:
      'https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340194/0903/b735/7c7a/0dddcdf78047d397d24125840e54ab5b.png'
  }
]

export const albumTabList = [
  {
    name: '全部',
    area: 'ALL'
  },
  {
    name: '华语',
    area: 'ZH'
  },
  {
    name: '欧美',
    area: 'EA'
  },
  {
    name: '韩国',
    area: 'KR'
  },
  {
    name: '日本',
    area: 'JP'
  }
]

export const footerData = [
  {
    name: '音乐开放平台',
    link: 'https://developer.music.163.com/st/developer',
    bgP: '-170px -5px',
    bgPH: '-5px -115px;'
  },
  {
    name: '云村交易所',
    link: 'https://music.163.com/st/web-sublicense/home',
    bgP: '-5px -170px',
    bgPH: '-60px -170px'
  },
  {
    name: 'Amped Studio',
    link: 'https://web-amped.music.163.com/',
    bgP: '-5px -60px',
    bgPH: '-60px -5px'
  },
  {
    name: '用户认证',
    link: 'https://music.163.com/st/userbasic#/auth',
    bgP: '-60px -60px',
    bgPH: '-115px -5px'
  },
  {
    name: '音乐交易平台',
    link: 'https://music.163.com/st/ad-cms-bills/mlogin?from=mainStation',
    bgP: '-115px -115px',
    bgPH: '-5px -5px'
  },
  {
    name: '赞赏',
    link: 'https://music.163.com/web/reward',
    bgP: '-170px -115px',
    bgPH: '-60px -115px'
  },
  {
    name: '视频激励',
    link: 'https://music.163.com/st/ncreator/revenue-plan',
    bgP: '-170px -60px',
    bgPH: '-115px -60px'
  }
]

export const officialData = [
  {
    name: '服务条款',
    link: 'https://st.music.163.com/official-terms/service'
  },
  {
    name: '隐私政策',
    link: 'https://st.music.163.com/official-terms/privacy'
  },
  {
    name: '儿童隐私政策',
    link: 'https://st.music.163.com/official-terms/children'
  },
  {
    name: '版权投诉',
    link: 'https://music.163.com/st/staticdeal/complaints.html'
  },
  {
    name: '投资者关系',
    link: 'http://ir.music.163.com'
  },
  {
    name: '广告合作',
    link: 'https://music.163.com/ui/resource'
  },
  {
    name: '联系我们',
    link: 'https://mp.music.163.com/600948c936c13f4d09752e73/contact-us-web/index.html?source=Music-Main-Station'
  }
]
