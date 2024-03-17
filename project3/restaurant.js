import { EventEmitter } from "events";

export class Restaurant extends EventEmitter {
  constructor() {
    super();
  }
  open() {
    this.emit("open", "Otwarcie restauracji");
  }

  close() {
    this.emit("close", "Zamknięcie restauracji");
  }
  reserveTable() {
    this.emit("tableCountChange", {
      count: -1,
      message: "Stolik został zarezerwowwany na teraz",
    });
  }
  cancelTableReservation() {
    this.emit("tableCountChange", {
      count: 1,
      message: "Odwołano rezerwacje stolika",
    });
  }
  takeTableWithoutReservawtion() {
    this.emit("tableCountChange", {
      count: -1,
      message: "Stolik bez rezerwacji",
    });
  }
  markTableAsBroken() {
    this.emit("tableCountChange", { count: -1, message: "Stolik się zepsuł" });
  }
  cleanupTable() {
    this.emit("tableCountChange", { count: 1, message: "Czyszczenie stolika" });
  }
}
