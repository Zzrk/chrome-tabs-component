import facebookIco from '../../assets/demo/images/facebook-favicon.ico';
import googleIco from '../../assets/demo/images/google-favicon.ico';
import '../../assets/demo/css/demo.css';
import './css/chrome-tabs.css';
import './css/chrome-tabs-dark-theme.css';
import ChromeTabsClass from './js/chrome-tabs.js';
import { useEffect } from 'react';

const ChromeTabs = () => {
  useEffect(() => {
    const el = document.querySelector('.chrome-tabs')
    console.log(el);
    const chromeTabs = new ChromeTabsClass()

    chromeTabs.init(el)

    el?.addEventListener('activeTabChange', ({ detail }) => console.log('Active tab changed', detail.tabEl))
    el?.addEventListener('tabAdd', ({ detail }) => console.log('Tab added', detail.tabEl))
    el?.addEventListener('tabRemove', ({ detail }) => console.log('Tab removed', detail.tabEl))

    // document.querySelector('button[data-add-tab]').addEventListener('click', _ => {
    //   chromeTabs.addTab({
    //     title: 'New Tab',
    //     favicon: false
    //   })
    // })

    // document.querySelector('button[data-add-background-tab]').addEventListener('click', _ => {
    //   chromeTabs.addTab({
    //     title: 'New Tab',
    //     favicon: false
    //   }, {
    //     background: true
    //   })
    // })

    // document.querySelector('button[data-remove-tab]').addEventListener('click', _ => {
    //   chromeTabs.removeTab(chromeTabs.activeTabEl)
    // })

    // document.querySelector('button[data-theme-toggle]').addEventListener('click', _ => {
    //   if (el.classList.contains('chrome-tabs-dark-theme')) {
    //     document.documentElement.classList.remove('dark-theme')
    //     el.classList.remove('chrome-tabs-dark-theme')
    //   } else {
    //     document.documentElement.classList.add('dark-theme')
    //     el.classList.add('chrome-tabs-dark-theme')
    //   }
    // })

    // window.addEventListener('keydown', (event) => {
    //   if (event.ctrlKey && event.key === 't') {
    //     chromeTabs.addTab({
    //       title: 'New Tab',
    //       favicon: false
    //     })
    //   }
    // })
  }, [])

  return (
    <div className="chrome-tabs">
      <div className="chrome-tabs-content">
        <div className="chrome-tab">
          <div className="chrome-tab-dividers"></div>
          <div className="chrome-tab-background">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><symbol id="chrome-tab-geometry-left" viewBox="0 0 214 36"><path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z" /></symbol><symbol id="chrome-tab-geometry-right" viewBox="0 0 214 36"><use xlinkHref="#chrome-tab-geometry-left" /></symbol><clipPath id="crop"><rect className="mask" width="100%" height="100%" x="0" /></clipPath></defs><svg width="52%" height="100%"><use xlinkHref="#chrome-tab-geometry-left" width="214" height="36" className="chrome-tab-geometry" /></svg><g transform="scale(-1, 1)"><svg width="52%" height="100%" x="-100%" y="0"><use xlinkHref="#chrome-tab-geometry-right" width="214" height="36" className="chrome-tab-geometry" /></svg></g></svg>
          </div>
          <div className="chrome-tab-content">
            <div className="chrome-tab-favicon" style={{ backgroundImage: `url(${googleIco})` }}></div>
            <div className="chrome-tab-title">Google</div>
            <div className="chrome-tab-drag-handle"></div>
            <div className="chrome-tab-close"></div>
          </div>
        </div>
        <div className="chrome-tab">
          <div className="chrome-tab-dividers"></div>
          <div className="chrome-tab-background">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><symbol id="chrome-tab-geometry-left" viewBox="0 0 214 36"><path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z" /></symbol><symbol id="chrome-tab-geometry-right" viewBox="0 0 214 36"><use xlinkHref="#chrome-tab-geometry-left" /></symbol><clipPath id="crop"><rect className="mask" width="100%" height="100%" x="0" /></clipPath></defs><svg width="52%" height="100%"><use xlinkHref="#chrome-tab-geometry-left" width="214" height="36" className="chrome-tab-geometry" /></svg><g transform="scale(-1, 1)"><svg width="52%" height="100%" x="-100%" y="0"><use xlinkHref="#chrome-tab-geometry-right" width="214" height="36" className="chrome-tab-geometry" /></svg></g></svg>
          </div>
          <div className="chrome-tab-content">
            <div className="chrome-tab-favicon" style={{ backgroundImage: `url(${facebookIco})` }}></div>
            <div className="chrome-tab-title">Facebook</div>
            <div className="chrome-tab-drag-handle"></div>
            <div className="chrome-tab-close"></div>
          </div>
        </div>
      </div>
      <div className="chrome-tabs-bottom-bar"></div>
    </div>
  )
}

export default ChromeTabs;