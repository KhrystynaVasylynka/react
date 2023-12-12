import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

//компонент

const Header = () => {
  return <h1>Hello world</h1>
}

const Content = () => {
  return (
      <div>
          <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quaerat quibusdam tempore recusandae autem fuga praesentium
              consequuntur, voluptas assumenda perferendis, rerum
              reprehenderit consequatur, molestias iure. Commodi fugit quasi
              accusamus aperiam corporis.
          </p>
          <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              provident aliquam labore sed fugiat dolore cum placeat?
              Blanditiis, mollitia perferendis eveniet, id veritatis ad rem,
              voluptatem reiciendis voluptas voluptate sequi.
          </p>
      </div>
  )
}

const App = () => {
  return (
      <div>
          <Header />
          <Content />
      </div>
  )
}


root.render(
  <React.StrictMode>
    <App />
</React.StrictMode>)
