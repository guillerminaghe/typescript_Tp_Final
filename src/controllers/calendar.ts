import { CalendarModel } from "../models/calendar";

export class CalendarController {
  private model: CalendarModel;

  constructor(calendarId: string) {
    this.model = new CalendarModel(calendarId);
  }

  getEvents(date_from: string, date_to: string) {
    return this.model.listEvents(date_from, date_to);
  }

  addEvent(event_name: string, event_date_from: string, event_date_to: string) {
    this.model.insertEvent(event_name, event_date_from, event_date_to);
  }
}
