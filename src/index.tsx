import App from '@docusaurus/core/lib/client/App'
import docusaurus from '@docusaurus/core/lib/client/docusaurus'
import ExecutionEnvironment from '@docusaurus/core/lib/client/exports/ExecutionEnvironment'
import preload from '@docusaurus/core/lib/client/preload'
import React from 'react'
import ReactDOM from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router } from 'react-router-dom'

import './public-path'
import './index.css'

interface QiankunProps {
  [key: string]: unknown
  container?: Element | null
}

let renderRoot: Element | null = null

function retrieveContainer(props: QiankunProps) {
  const { container } = props
  return container ? container.querySelector('#__docusaurus') : document.getElementById('__docusaurus')
}

function registerDocusaurus() {
  window.docusaurus = docusaurus
}

function getApplication(_: string) {
  return (
    <Router>
      <App />
    </Router>
  )
}

function render(props: QiankunProps) {
  if (ExecutionEnvironment.canUseDOM) {
    const qiankunBase: HTMLBaseElement | null = document.querySelector('qiankun-head base')
    const { pathname } = new URL(
      qiankunBase?.href ?? document.baseURI,
      window.document.baseURI
    )
    const container = retrieveContainer(props)
    const renderMethod = process.env.NODE_ENV === 'production' ? ReactDOM.hydrate : ReactDOM.render

    registerDocusaurus()
    preload(pathname)
      .then(() => {
        renderMethod(
          <HelmetProvider>
            {getApplication(pathname)}
          </HelmetProvider>,
          container
        )
      })
      .catch(() => { /* no-op */ })
  }
}

export function mount(props: QiankunProps) {
  render(props)
  return Promise.resolve(null)
}

export function unmount() {
  renderRoot && ReactDOM.unmountComponentAtNode(renderRoot)
  renderRoot = null
  return Promise.resolve(null)
}

export async function bootstrap() {
  /* no-op */
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}
