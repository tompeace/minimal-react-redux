import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { makeStore } from './store'
import Pages from './pages'
import Navigation from './components/navigation'

const store = makeStore()

export default function App(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <div className="p-4">
          <Pages />
        </div>
      </BrowserRouter>
    </Provider>
  )
}
