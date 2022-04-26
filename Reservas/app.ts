import Reservation from './models/entities/reservation';

const reservation = new Reservation(
  12,
  new Date('2022/12/24'),
  new Date('2022/12/29'),
);

console.log(reservation);
console.log(reservation.duration());
