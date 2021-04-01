import { Provider } from 'react-redux'
import { store } from '../src/store'
import { render as rtlRender } from '@testing-library/react'

function render(ui, options = {}) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }