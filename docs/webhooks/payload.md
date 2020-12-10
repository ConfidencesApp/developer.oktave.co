## Payload structure

The `JSON` payload content will always have the same root structure:

- `id [UUID]`: The ID of the request (difference the multiple event request attempt).
- `event_id [UUID]`: The ID of the event.
- `timestamp [timestamp]`: The creation datetime of event.
- `type [string]`: The type of the event (see [**Events**](events.md) section).
- `is_test [boolean]`: Tells if this event is a test.
- `data [Object]`: The object this event is about (see [**Events**](events.md) section to know which object will be in it).
