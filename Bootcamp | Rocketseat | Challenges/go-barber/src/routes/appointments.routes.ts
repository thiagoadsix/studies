import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';

import AppointmentRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentRepository = new AppointmentRepository();

appointmentsRouter.get('/', (req, res) => {
  const appointment = appointmentRepository.all();

  return res.json(appointment);
});

appointmentsRouter.post('/', (req, res) => {
  const { provider, date } = req.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointmentRepository.findByDate(
    parsedDate,
  );

  if (findAppointmentInSameDate) {
    return res
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  const appointment = appointmentRepository.create({
    provider,
    date: parsedDate,
  });

  return res.json(appointment);
});

export default appointmentsRouter;
