import * as exc from 'models/exceptions/index';
import Messages from 'models/enums/messages';

export default class Reservation {
  private roomNumber: number;
  private checkIn: Date;
  private checkOut: Date;

  constructor(roomNumber: number, checkIn: Date, checkOut: Date) {
    this.roomNumber = roomNumber;
    this.checkIn = checkIn;
    this.checkOut = checkOut;
  }

  public duration(): number {
    return this.checkOut.getDate() - this.checkIn.getDate();
  }

  public updateDates(checkIn: Date, checkOut: Date): void {
    const now = new Date();
    if (
      checkIn.getTime() < now.getTime() &&
      checkOut.getTime() < now.getTime()
    ) {
      throw new exc.IllegalArgumentException(
        Messages.RESERVATION_MUST_BE_FUTURE_DATES,
      );
    }
    if (checkOut.getTime() < checkIn.getTime()) {
      throw new exc.IllegalArgumentException(Messages.CHECKOUT_MUST_BE_AFTER);
    }
    this.checkIn = checkIn;
    this.checkOut = checkOut;
  }

  public toString(): string {
    return `
    Room: ${this.roomNumber}, 
    check-in: ${this.checkIn}, 
    check-out: ${this.checkOut}`;
  }
}
