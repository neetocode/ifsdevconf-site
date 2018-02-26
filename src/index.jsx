import React from 'react'
import ReactDom from 'react-dom'

import App from './App'


import './style.css'
import './assets/android-chrome-192x192.png'
import './assets/android-chrome-384x384.png'
import './assets/apple-touch-icon.png'
// import './assets/brand-ifsdevconf.png'
import './assets/favicon-16x16.png'
import './assets/favicon-32x32.png'
import './assets/favicon.ico'
import './assets/mstile-150x150.png'
import './assets/safari-pinned-tab.svg'

ReactDom.render(
    <App />,
    document.getElementById('root')
)