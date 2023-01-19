// import '../../assets/demo/css/demo.css';
import './css/chrome-tabs.css';
import './css/chrome-tabs-dark-theme.css';
import ChromeTabsClass from './js/chrome-tabs.js';
import { useEffect, useState } from 'react';

export interface TabInfo {
  key: string,
  icon?: string,
  title?: string,
  [key: string]: any,
}
const ChromeTabs = (
  { tabs: originTabs, onActiveTabChange, onTabAdd, onTabRemove }:
    {
      tabs: TabInfo[],
      onActiveTabChange: (tabs: TabInfo[], key: string) => void,
      onTabAdd: (tabs: TabInfo[], key: string) => void,
      onTabRemove: (tabs: TabInfo[], key: string) => void,
    }
) => {
  const [tabs, setTabs] = useState(originTabs)
  useEffect(() => {
    const el = document.querySelector('.chrome-tabs')
    const chromeTabs = new ChromeTabsClass()

    chromeTabs.init(el)

    el?.addEventListener('activeTabChange', ({ detail }) => {
      const key = detail.tabEl.getAttribute('data-key');
      setTabs(tabs.map(tab => tab.key === key ? { ...tab, active: "true" } : { ...tab, active: 'false' }))
      onActiveTabChange(tabs, key)
    })
    el?.addEventListener('tabAdd', ({ detail }) => onTabAdd(detail.tabEl.getAttribute('data-key')))
    el?.addEventListener('tabRemove', ({ detail }) => onTabRemove(detail.tabEl.getAttribute('data-key')))
  }, [])

  return (
    <div className="chrome-tabs">
      <div className="chrome-tabs-content">
        {
          tabs.map(tab => (
            <div className="chrome-tab" key={tab.key} data-key={tab.key} active={tab.active}>
              <div className="chrome-tab-dividers"></div>
              <div className="chrome-tab-background">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><symbol id="chrome-tab-geometry-left" viewBox="0 0 214 36"><path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z" /></symbol><symbol id="chrome-tab-geometry-right" viewBox="0 0 214 36"><use xlinkHref="#chrome-tab-geometry-left" /></symbol><clipPath id="crop"><rect className="mask" width="100%" height="100%" x="0" /></clipPath></defs><svg width="52%" height="100%"><use xlinkHref="#chrome-tab-geometry-left" width="214" height="36" className="chrome-tab-geometry" /></svg><g transform="scale(-1, 1)"><svg width="52%" height="100%" x="-100%" y="0"><use xlinkHref="#chrome-tab-geometry-right" width="214" height="36" className="chrome-tab-geometry" /></svg></g></svg>
              </div>
              <div className="chrome-tab-content">
                <div className="chrome-tab-favicon" style={{ backgroundImage: `url(${tab.icon})` }}></div>
                <div className="chrome-tab-title">{tab.title}</div>
                <div className="chrome-tab-drag-handle"></div>
                <div className="chrome-tab-close"></div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="chrome-tabs-bottom-bar"></div>
    </div>
  )
}

export default ChromeTabs;