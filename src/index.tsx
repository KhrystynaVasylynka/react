import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

//компонент

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, ex repellat impedit consectetur molestias omnis ducimus fugiat facere, mollitia officiis repellendus eum, quibusdam debitis quae illum. Odit repudiandae in id!</p>
    </div>
  )
}
root.render(
  <React.StrictMode>
  <App />
</React.StrictMode>)
