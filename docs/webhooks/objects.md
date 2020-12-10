## Objects

Here is all the objects structure that can be received through webhooks :

- [`Answer`](#answer): contains an answer to a question of the survey.
- [`Blacklist Item`](#blacklist-item): contains a recipient who was blacklisted from survey sending (email or text message).
- [`Campaign`](#campaign): contains a survey campaign which allow to share the survey through channels.
- [`Text Message Campaign`](#text-message-campaign): contains a text message campaign which allow to send simple text message.
- [`Choice`](#choice): contains a choice from a survey question (MCQ, Picture or Rank).
- [`Comment`](#comment): contains a comment to an incident object.
- [`Component`](#component): contains a survey question.
- [`Field`](#field): contains a field from a survey question.
- [`Grid Item`](#grid-item): contains one grid item from a survey question when component has grid.
- [`Incident`](#incident): contains an incident triggered from survey alerts configuration.
- [`Response`](#response): contains a response to the survey.
- [`User Agent`](#user-agent): contains the user agent data.

> **About object properties typing**
>
> Some property are `optional`, marked with `?` after the type hint, which means the property can be absent from payload.
> Some property contains a `list` of object, marked with `*` after the type hint.
> Some property can have `null` as a value, marked with `null` type hint.

> **About datetime of objects**
>
> All datetime are given as `timestamp` using UTC+00:00 Timezone.

### Answer

- `id` `[UUID]`: the answer ID.
- `response_id` `[UUID]`: the response ID.
- `is_embedded` `[boolean]`: if the answer was created before the survey opening (in an email for example).
- `is_ignored` `[boolean]`: if the user choose to ignore the question (if as true value, none value of answer will be given, such as `as_string`, `comment`, `number`...).
- `component` [`[Component]`](#component): the component this answer is for.
- `grid_item` [`[GridItem?]`](#grid-item): the component this answer is for (defined if `component.has_grid` is true).
- `created_at` `[timestamp]`: the creation datetime.
- `updated_at` `[timestamp]`: the last update datetime.
- `comment` `[string?]`: the comment (defined when not ignored and component allows comment and if comment is defined).
- `as_string` `[string?]`: the human readable string representation of this answer (defined when not ignored).
- `text` `[string|null?]`: a textual answer (when not ignored and `component.component_type` is `short-answer`).
- `choices` [`[Choice*?]`](#choice): a list of choices (when `component.component_type` is `mcq`, `mcq-picture` or `rank`). When `component.component_type` is `rank`, the list will be ordered by choice rank instead of position.
- `number` `[int|null?]`: a number answer (when `component.component_type` is `rating`, `nps` or `smiley`).
- `fields` [`[Field*?]`](#field): a list of fields (when `component.component_type` is `form`).

### Blacklist Item

- `id` `[UUID]`: the blacklist item ID.
- `recipient_type` `[string]`: the type of the recipient column (`email` or `mobile`).
- `recipient` `[string]`: the email address or phone number.
- `campaign` [[`Campaign`](#campaign)|[`Text Message Campaign`](#text-message-campaign)]: the related campaign object.
- `created_at` `[timestamp]`: the creation datetime.
- `updated_at` `[timestamp]`: the last update datetime.
- `status [string]`: the reason this recipient was added to the blacklist (`soft_bounced`, `hard_bounced` or `unsubscribed`).
- `bounce_reason [string?]`: the reason it was soft bounced or hard bounced (defined when status is `soft_bounced` or `hard_bounced`).
- `soft_bounced_at [timestamp?]`: the soft bounce datetime (defined when status is `soft_bounced` or `hard_bounced`).
- `hard_bounced_at [timestamp?]`: the hard bounce datetime (defined when status is `soft_bounced` or `hard_bounced`).
- `unsubscribed_at [timestamp?]`: the unsubscribe datetime (defined when status is `unsubscribed`).

### Campaign

- `id` `[UUID]`: the campaign ID.
- `token` `[string]`: the unique token.
- `channel` `[string]`: the channel (`url`, `email`, `sms`, `keyword`, `kiosk`, `iframe`, `qrcode`, `facebook`, `popin`).
- `survey_id` `[UUID]`: the survey ID.
- `survey_name` `[string|null]`: the survey name.

### Text Message Campaign

- `id` `[UUID]`: the campaign ID.
- `name` `[string]`: the campaign name.
- `sender` `[string]`: the text message sender.
- `text_message` `[string]`: the text message content.

### Choice

- `id` `[UUID]`: the choice ID.
- `text` `[string|null]`: the textual content. When `is_other` is `true`, this is the content written by the user.
- `is_other` `[boolean]`: if the choice corresponds to an other selection written by the user.
- `rank` `[int?]`: the rank of this choice in list (when related `component.component_type` is `rank`).

### Comment

- `id` `[UUID]`: the comment ID.
- `status` `[string]`: describes the incident status at this comment step (see [`Incident`](#incident) `latest_status` field).
- `body` `[string]`: the content of the comment.
- `incident_id` `[UUID]`: the parent incident ID.
- `solver` `[string]`: the name/pseudo of the comment's author.
- `created_at` `[timestamp]`: the creation datetime.
- `updated_at` `[timestamp]`: the last update datetime.

### Component

- `id` `[UUID]`: the component ID.
- `required` `[boolean]`: If an answer is required.
- `title` `[string|null]`: the component title.
- `position` `[int]`: the position in the survey.
- `component_type` `[string]`: the type (`short-answer`, `mcq`, `mcq-picture`, `rank`, `rating`, `nps`, `smiley`, `form`).
- `type_changed` `[boolean]`: if the type changed since the answer has been created (defined when nested in answer).
- `has_grid` `[boolean]`: if the component uses grid item.
- `multiple_answers` `[boolean?]`: if the component allows multiple choices (when `component.component_type` is `mcq`, `mcq-picture` or `rank`).
- `min_answers` `[int?]`: the number of minimum choices (defined when `multiple_answers` is `true`).
- `max_answers` `[int?]`: the number of maximum choices (defined when `multiple_answers` is `true`).
- `shape` `[string?]`: the icons used to display the list of values (when `component.component_type` is `rating`, `nps` or `smiley`).
- `minimum` `[int?]`: the minimum value (when `component.component_type` is `rating` or `nps`).
- `maximum` `[int?]`: the maximum value (when `component.component_type` is `rating` or `nps`).
- `possible_values` `[int*?]`: the possible values (when `component.component_type` is `smiley`).

### Field

- `id` `[UUID]`: the choice ID (because a field is just a choice related to a form component).
- `required` `[boolean]`: if the field is required.
- `type` `[string]`: the type to validate (`text`, `number`, `email`, `phone`, `url`, `date`).
- `text` `[string]`: the title of the field.
- `value` `[string|null]`: an answer to the field.

### Grid Item

- `id` `[UUID]`: the grid item ID.
- `text` `[string|null]`: the component text.

### Incident

- `id` `[UUID]`: the incident ID.
- `latest_status` `[string]`: the last status of the incident.
  - `new` means it has never been commented.
  - `opened` means it has been commented but is still opened.
  - `solved` means it is solved.
  - `archived` means it has been archived.
- `title` `[string]`: the raw title of the incident (raw because it is not merged with response data like in email version of incident).
- `body` `[string]`: the raw body of the incident (raw because it is not merged with response data like in email version of incident).
- `comments_count` `[int]`: the number of comment on this incident.
- `comments` [`[Comment*]`](#comment): the related comment objects.
- `response` [`[Response]`](#response): the related response object which triggered the incident.
- `created_at` `[timestamp]`: the creation datetime.
- `updated_at` `[timestamp]`: the last update datetime.

### Response

- `id` `[UUID]`: the response ID.
- `campaign` [`[Campaign]`](#campaign): the related campaign object.
- `user_agent` [`[User Agent?]`](#user-agent): the related user agent object.
- `status` `[string]`: the status (`opened`, `started`, `completed`).
- `language` `[string]`: the selected language by the user or the default language of survey.
- `unique_identifier` `[string|null]`: the unique identifier for this response.
- `contact_id` `[string|null]`: the internal contact ID (defined when campaign is with channel `email` or `sms`).
- `sequence_id` `[string|null]`: the sending sequence ID (defined when campaign is with channel `email` or `sms`).
- `merge_fields` `[Object]`: The merge map data as a key-value pair hash. Key are in snake case.
- `created_at` `[timestamp]`: the creation datetime.
- `updated_at` `[timestamp]`: the last update datetime.
- `started_at` `[timestamp|null]`: the start datetime (defined when the status is `started` or `completed`).
- `completed_at` `[timestamp|null]`: the completion datetime (defined when the status is `completed`).
- `answers` [`[Answer*]`](#answer): the related answers objects.

### User Agent

- `browser` `[string]`: the browser name (ex. Chrome).
- `browser_version` `[string]`: the browser version number.
- `os` `[string]`: the Operating System name (ex. macOS).
- `os_version` `[string]`: the Operating System version number.
- `device_name` `[string]`: the device name (ex. iPhone).
- `device_type` `[string]`: the device type (ex. Mobile Phone).
- `ip_address` `[string]`: the IP address (ex. 127.0.0.1).
