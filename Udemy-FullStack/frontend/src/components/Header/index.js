/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import isConnected from '../../utils/isConnected'

import { Container, RightSide, LeftSide } from './style'

import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState()

  async function lateVerify() {
    await api.get(`/late/${isConnected}`)
      .then(resp => {
        setLateCount(resp.data.length)
        console.log(resp.data)
      })
  }

  useEffect(() => {
    lateVerify()
  }, [])

  async function logOut() {
    localStorage.removeItem('@todo/macAddress')
    window.location.reload()
  }

  return (
    <Container>
      <LeftSide>
        <img src={logo} alt="Logo" />
      </LeftSide>
      <RightSide>
        <Link to="/">INÍCIO</Link>
        <span className="divider" />
        <Link to="/task">NOVA TAREFA</Link>
        <span className="divider" />
        {!isConnected ? <Link to="/qrcode">SINCRONIZAR CELULAR</Link> : <button type="button" onClick={logOut}>SAIR</button>}
        {
          lateCount &&
          <>
            <span className="divider" />
            <button onClick={clickNotification} id="notification">
              <img src={bell} alt="Notification" />
              <span>{lateCount}</span>
            </button>
          </>
        }
      </RightSide>
    </Container>
  )
}

export default Header;