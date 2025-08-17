// Interface describing an Attendee entity
export interface Attendee {
  id?: number;            // Optional - server assigns
  eventId: number;        // FK to Event.id
  name: string;           // Attendee name
  email: string;          // Attendee email
}
