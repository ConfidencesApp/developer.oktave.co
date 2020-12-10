## Events

Oktave webhooks can dispatch the following events.

### `response.started`

When someone started responding to one of your survey. The `data` will contains a [`Reponse`](objects.md#response) object.

> Some [`Answer`](objects.md#answer) can be present (when answered from email content)

### `response.completed`

When someone finished completing one of your survey. The `data` will contains a [`Reponse`](objects.md#response) object.

> All [`Answer`](objects.md#answer) are available

### `answer.saved`

When someone answer to one of the questions of your survey. The `data` will contains an [`Answer`](objects.md#answer) object.

> This event is very limited in its data structure.

### `blacklist_item.created`

When one of your survey campaign's contact is bounced or unsubscribed.
The `data` will contains a [`Blacklist Item`](objects.md#blacklist-item) object.

> This event won't be emitted on a manual import of blacklist items

### `incident.created`

When one of your survey triggered a new incident from configured survey's alerts. The `data` will contains an [`Incident`](objects.md#incident) object.

> The incident center is an on-demande feature.

### `incident.updated`

When one of your incident is updated (a comment is created on it). The `data` will contains an [`Incident`](objects.md#incident) object.

> The incident center is an on-demande feature.
