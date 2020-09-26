import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom'

import api from '../../services/api'
import isConnected from '../../utils/isConnected'

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import FilterCard from '../../components/FilterCard/index'
import TaskCard from '../../components/TaskCard/index'

import { Container, FilterArea, Content, Title } from './style'


function Home() {
  const [filterActivated, setFilterActivated] = useState('all')
  const [tasks, setTasks] = useState([])
  const [redirect, setRedirect] = useState(false)

  async function loadTasks() {
    await api.get(`${filterActivated}/${isConnected}`)
      .then(resp => {
        setTasks(resp.data)
      })
  }

  function notification() {
    setFilterActivated('late')
  }

  useEffect(() => {
    loadTasks()
    if(!isConnected)
      setRedirect(true)
  }, [filterActivated])

  return (
    <Container>
      { redirect && <Redirect to="/qrcode"/> }
      <Header clickNotification={notification} />
      <FilterArea>
        <button type="button" onClick={() => setFilterActivated("all")}>
          <FilterCard title="Todos" activated={filterActivated === 'all'} />
        </button>
        <button type="button" onClick={() => setFilterActivated("today")} >
          <FilterCard title="Hoje" activated={filterActivated === 'today'} />
        </button>
        <button type="button" onClick={() => setFilterActivated("weekly")} >
          <FilterCard title="Semana" activated={filterActivated === 'weekly'} />
        </button>
        <button type="button" onClick={() => setFilterActivated("monthly")} >
          <FilterCard title="Mês" activated={filterActivated === 'monthly'} />
        </button>
        <button type="button" onClick={() => setFilterActivated("annually")} >
          <FilterCard title="Ano" activated={filterActivated === 'annually'} />
        </button>
      </FilterArea>
      <Title>
        <h3>{filterActivated == "late" ? "TAREFAS ATRASADAS" : "TAREFAS"}</h3>
      </Title>
      <Content>
        {
          tasks.map(task => (
            <Link to={`/task/${task._id}`}>
              <TaskCard type={task.type} title={task.title} when={task.when} done={task.done}></TaskCard>
            </Link>
          ))
        }
      </Content>
      <Footer />
    </Container>
  )
}

export default Home;
