import { EventEmitter } from "events";

export class Restaurant extends EventEmitter {
  constructor() {
    super();

    this.open = () => {
      this.emit("open", "Otwarcie restauracji");
    };

    this.close = () => {
      this.emit("close", "Zamknięcie restauracji");
    };
    this.reserveTable = () => {
      this.emit("reserveTable", "Stolik został zarezerwowwany na teraz");
    };
    this.cancelTableReservation = () => {
      this.emit("cancelTable", "Odwołano rezerwacje stolika");
    };
    this.takeTableWithoutReservawtion = () => {
      this.emit("takeTable", "Stolik bez rezerwacji");
    };
    this.markTableAsBroken = () => {
      this.emit("tableBroken", "Stolik się zepsuł");
    };
    this.cleanupTable = () => {
      this.emit("cleanupTable", "Czyszczenie stolika");
    };
  }
}
