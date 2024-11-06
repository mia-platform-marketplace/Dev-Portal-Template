import type { BaseExtension, MicrolcApi } from '@micro-lc/orchestrator'
import React from 'react'
import type { Root } from 'react-dom/client'
import { createRoot } from 'react-dom/client'

import App from './App'

import './public-path'
import './index.css'

interface QiankunProps {
  [key: string]: unknown
  container?: Element | null
  microlcApi?: MicrolcApi<BaseExtension>
}

let root: Root | undefined

function retrieveContainer(props: QiankunProps) {
  const { container } = props
  return container ? container.querySelector('#dev-portal-home-root') : document.querySelector('#dev-portal-home-root')
}

function render(props: QiankunProps) {
  const container = retrieveContainer(props)
  if (!root && container) {
    root = createRoot(container)
  }

  root?.render(<App microlcApi={props.microlcApi} />)
}

export async function bootstrap() { /* noop */ }

export function mount(props: QiankunProps): Promise<null> {
  render(props)
  return Promise.resolve(null)
}

export function unmount(): Promise<null> {
  root?.unmount()
  root = undefined
  return Promise.resolve(null)
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}
