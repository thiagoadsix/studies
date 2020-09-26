import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import Qr from 'qrcode.react'

import api from '../../services/api'

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'

import { Container, ValidationCode, Content, QrCodeArea } from './style'


function QrCode() {
  const [mac, setMac] = useState()
  const [redirect, setRedirect] = useState(false)

  async function saveMac() {
    if(!mac) {
      alert('Você precisa informar o número para sicronização.')
    } else {
      await localStorage.setItem('@todo/macAddress', mac)
      setRedirect(true)
      window.location.reload()
    }
  }

  return (
    <Container>
      { redirect && <Redirect to="/" /> }
      <Header />
      <Content>
        <h1>CAPTURE O QRCODE PELO APP</h1>
        <QrCodeArea>
          <Qr value='getmacAddress' size={350} />
        </QrCodeArea>
        <ValidationCode>
          <span>Digite a numeração que apareceu no seu celular</span>
          <input type="text" onChange={e => setMac(e.target.value)} value={mac} />
          <button type="button" onClick={saveMac}>SICRONIZAR</button>
        </ValidationCode>
        <p>Suas atividades serão sicronizadas com o seu celular</p>
      </Content>
      <Footer />
    </Container>
  )
}

export default QrCode;