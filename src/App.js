import React, { Component } from 'react'
import List from './components/List'
import Form from './components/Form'
import styled from 'styled-components'
import store from './store/index.js'
import { observer } from 'mobx-react'

const Div = styled.div`
  text-align: center;
  margin: 30px auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Buttons = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto 30px;
  justify-content: space-around;
`
const Content = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 20px;
  width: 100%;
  height: 80vh;
`
document.addEventListener('keydown', (e) => {
  if(e.key==="Escape" || e.key==="Esc") store.zeroingWorker()
})


const App = observer(class extends Component {
  render() {
    return (
      <Div className="app">
        <Buttons>
          <button onClick={store.addWorker}>Добавить рабочего</button>
          <button onClick={store.deleteWorker} disabled={(store.worker.id === null) && !(store.worker.id < store.maxId) || !store.data.length}>Удалить рабочего</button>
        </Buttons>
        <Content>
          <List />
          <Form />
        </Content>
      </Div>
    )
  }
})

export default App