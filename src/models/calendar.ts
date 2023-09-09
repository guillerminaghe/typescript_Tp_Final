import { google } from "googleapis";
import { calendar_v3 } from "googleapis/build/src/apis/calendar";
const credentials = require("../../credentials.json");

const SCOPES = "https://www.googleapis.com/auth/calendar";

export class CalendarModel {
  private calendarId: string;

  constructor(calendarId: string) {
    this.calendarId = calendarId;
  }

  insertEvent(
    event_name: string,
    event_date_from: string,
    event_date_to: string
  ) {
    try { 
      const auth = new google.auth.JWT(
        credentials.client_email,
        null,
        credentials.private_key,
        SCOPES
      );
      const calendar = google.calendar({ version: "v3", auth });

      const [dateFrom, timeFrom] = event_date_from.split(" ");
      const [year_from, month_from, day_from] = dateFrom.split("-").map(Number);
      const [hour_from, min_from] = timeFrom.split(":").map(Number);
      const dateTimeFrom = new Date(
        year_from,
        month_from - 1,
        day_from,
        hour_from,
        min_from
      );

      const [dateTo, timeTo] = event_date_to.split(" ");
      const [year_to, month_to, day_to] = dateTo.split("-").map(Number);
      const [hour_to, min_to] = timeTo.split(":").map(Number);
      const dateTimeTo = new Date(
        year_to,
        month_to - 1,
        day_to,
        hour_to,
        min_to
      );

      const event: calendar_v3.Schema$Event = {
        summary: event_name,
        description: event_name,
        start: {
          dateTime: dateTimeFrom.toISOString(),
          timeZone: "GMT-0300",
        },
        end: {
          dateTime: dateTimeTo.toISOString(),
          timeZone: "GMT-0300",
        },
      };

      const response = calendar.events.insert({
        calendarId: this.calendarId,
        requestBody: event,
      });
      console.log(`Evento creado con exito`);
    } catch (error) {
      console.error("Error al obtener eventos:", error);
    }
  }

  listEvents(date_from: string, date_to: string) {
    try {
      const auth = new google.auth.JWT(
        credentials.client_email,
        null,
        credentials.private_key,
        SCOPES
      );
      const calendar = google.calendar({ version: "v3", auth });

      const [year_from, month_from, day_from] = date_from
        .split("-")
        .map(Number);
      const from = new Date(year_from, month_from - 1, day_from);
      from.setHours(0, 0, 1, 0);

      const [year_to, month_to, day_to] = date_to.split("-").map(Number);
      const to = new Date(year_to, month_to - 1, day_to);
      to.setHours(23, 59, 0, 0);

      const events = calendar.events.list({
        auth: auth,
        calendarId: this.calendarId,
        timeMin: from.toISOString(),
        timeMax: to.toISOString(),
      });

      console.log(`Event List: `);
      events.then((events) => {
        events.data.items?.forEach((event) => {
          console.log(`${event.start?.dateTime} - ${event.summary}`);
        });
      });
    } catch (error) {
      console.error("Error al obtener eventos:", error);
    }
  }
}
