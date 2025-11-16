import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from '@/components/ui/provider'

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = createRoot(rootElement)
  root.render(
    <Provider>
      <App />
    </Provider>,
  )
} else {
  console.error('The element #root was not found in index.html')
}
