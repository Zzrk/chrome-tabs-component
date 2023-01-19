import { useEffect, useState } from 'react'
import ChromeTabs, { TabInfo } from './lib/ChromeTabs'
import './App.css'

const App = () => {
  const [tabs, setTabs] = useState<TabInfo[]>([
    {
      key: '0',
      icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-16x16.png',
      title: '稀土掘金',
      link: 'https://juejin.cn/',
      active: 'true'
    },
    {
      key: '1',
      icon: 'https://static.leetcode.cn/cn-mono-assets/production/assets/favicon-notification-16x16.123721dc.png',
      title: '力扣',
      link: 'https://leetcode.cn/',
      active: 'false'
    }
  ])
  const [activeTabKey, setActiveTabKey] = useState('0')

  // useEffect(() => {
  //   setTabs([...tabs, {
  //     key: '2',
  //     icon: '',
  //     title: '哔哩哔哩',
  //     link: 'https://www.bilibili.com/'
  //   }])
  // }, [])

  return (
    <div className="app-container">
      <ChromeTabs
        tabs={tabs}
        onActiveTabChange={(tabs, key) => { setTabs(tabs); setActiveTabKey(key) }}
        onTabAdd={key => console.log(key)}
        onTabRemove={key => console.log(key)}
      ></ChromeTabs>
      <div className="iframe-wrapper">
        {
          tabs.map(tab => <iframe key={tab.key} src={tab.link} frameBorder="0" style={activeTabKey === tab.key ? { width: '100%', height: '100%' } : { width: 0, height: 0 }}></iframe>)
        }
      </div>
    </div>
  )
}

export default App
