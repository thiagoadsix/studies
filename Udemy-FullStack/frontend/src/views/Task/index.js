import React, { useState, useEffect, useMemo } from 'react'
import { format } from 'date-fns'
import { Redirect } from 'react-router-dom'
import { Container, Form, TypeIcons, Input, TextArea, Options, Save } from './style'

import api from '../../services/api'
import isConnected from '../../utils/isConnected'

import typeIcons from '../../utils/typeIcons'
import iconCalendar from '../../assets/calendar.png'
import iconClock from '../../assets/clock.png'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Task({ match }) {
  const [redirect, setRedirect] = useState(false)
  const [type, setType] = useState()
  const [id, setId] = useState()
  const [done, setDone] = useState(false)
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [date, setDate] = useState()
  const [hour, setHour] = useState()


  async function save() {
    if (!title) {
      return alert("Você precisa informar o título da tarefa")
    } else if (!description) {
      return alert("Você precisa informar a descrição da tarefa")
    } else if (!type) {
      return alert("Você precisa selecionar o tipo da tarefa")
    } else if (!date) {
      return alert("Você precisa informar a data da tarefa")
    } else if (!hour) {
      return alert("Você precisa informar a hora da tarefa")
    }

    if (match.params.id) {
      await api.put(`update/${match.params.id}`, {
        macAddress: isConnected,
        done,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
      }).then(() => setRedirect(true))
    } else {
      await api.post(`create`, {
        macAddress: isConnected,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000`
      }).then(() => setRedirect(true))
    }
  }

  async function loadTaskDetails() {
    await api.get(`filter/${match.params.id}`).then(resp => {
      setType(resp.data.type)
      setTitle(resp.data.title)
      setDone(resp.data.done)
      setDescription(resp.data.description)
      setDate(format(new Date(resp.data.when), 'yyyy-MM-dd'))
      setHour(format(new Date(resp.data.when), 'HH:mm'))
    })
  }

  async function remove() {
    const resp = window.confirm('Deseja realmente remover a tarefa?')
    if (resp === true) {
      await api.delete(`delete/${match.params.id}`).then(() => setRedirect(true))
    }
  }

  useEffect(() => {
    if(!isConnected) 
      setRedirect(true)
    loadTaskDetails()
  }, [])
  return (
    <Container>
      {redirect && <Redirect to="/" />}
      <Header />
      <Form>
        <TypeIcons>
          {
            typeIcons.map((icon, index) => (
              index > 0 &&
              <button type="button" onClick={() => setType(index)}>
                <img src={icon} alt="Type Task" className={type && type != index && 'inactive'} />
              </button>
            ))
          }
        </TypeIcons>
        <Input>
          <span>Título</span>
          <input type="text" placeholder="Nome da sua tarefa" onChange={e => setTitle(e.target.value)} value={title} />
        </Input>
        <TextArea>
          <span>Descrição</span>
          <textarea type="text" rows={5} placeholder="Detalhes da sua tarefa" onChange={e => setDescription(e.target.value)} value={description} />
        </TextArea>
        <Input>
          <span>Data</span>
          <input type="date" onChange={e => setDate(e.target.value)} value={date} />
          <img src={iconCalendar} alt="Calendar" />
        </Input>
        <Input>
          <span>Hora</span>
          <input type="time" onChange={e => setHour(e.target.value)} value={hour} />
          <img src={iconClock} alt="Clock" />
        </Input>
        <Options>
          <div>
            <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
            <span>CONCLUÍDO</span>
          </div>
          { match.params.id && <button type="button" onClick={remove} >EXCLUIR</button>}
        </Options>
        <Save>
          <button type="button" onClick={save} >SALVAR</button>
        </Save>
      </Form>
      <Footer />
    </Container>
  )
}

export default Task;