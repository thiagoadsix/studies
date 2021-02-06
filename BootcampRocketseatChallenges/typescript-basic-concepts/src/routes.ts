import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: 'thiago@email.com',
    password: '12345789',
    techs: ['Node.js', 'React.js', {
      title: 'Node.js',
      experience: 75
    }]
  })
  return res.json({ msg: 'Hello World!' })
}