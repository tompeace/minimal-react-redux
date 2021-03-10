import { Suspense, lazy } from 'react'
import { Route } from 'react-router-dom'

const routes = [
  ['/', lazy(() => import('./home'))],
  ['/about', lazy(() => import('./about'))]
]

export default function Pages(props) {
  return (
    <Suspense fallback={''}>
      {routes.map(([path, component]) => (
        <Route
          exact
          key={path}
          path={path} 
          component={component}
        />
      ))}
    </Suspense>
  )
}
