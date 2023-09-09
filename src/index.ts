import { CalendarController } from "./controllers/calendar";

const calendarController = new CalendarController("ghe.guillermina.b@gmail.com");

class Agenda {
  obtenerListaDeEventos(date_from: string, date_to: string) {
    const listOfDicts = calendarController.getEvents(date_from, date_to);
    return listOfDicts;
  }

  crearEvento(
    event_name: string,
    event_date_from: string,
    event_date_to: string
  ) {
    calendarController.addEvent(event_name, event_date_from, event_date_to);
  }
}

// Comprueba si se está ejecutando el archivo directamente (no como un módulo)
if (require.main === module) {
  const argumentos = process.argv.slice(2);

  const nombreMetodo = argumentos[0];
  const instancia = new Agenda();

  if (nombreMetodo === "obtenerListaDeEventos") {
    if (argumentos.length < 2) {
      console.error(
        "El método obtenerListaDeEventos requiere dos argumentos adicionales."
      );
      process.exit(1);
    }
    const date_from = argumentos[1];
    const date_to = argumentos[2];
    instancia.obtenerListaDeEventos(date_from, date_to);
  } else if (nombreMetodo === "crearEvento") {
    if (argumentos.length < 2) {
      console.error(
        "El método crearEvento requiere tres argumentos adicionales."
      );
      process.exit(1);
    }
    const event_name = argumentos[1];
    const date_from = argumentos[2];
    const date_to = argumentos[3];
    instancia.crearEvento(event_name, date_from, date_to);
  } else {
    console.error(
      "Método no válido. Debes proporcionar uno de los siguientes nombres de método: metodo1, metodo2"
    );
    process.exit(1);
  }
}