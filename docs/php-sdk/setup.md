## Instantiating the SDK Client

Pass in the configuration array to the client:

```php
$config = [
    'client_id' => '{your_client_uuid}',
    'client_secret' => '{your_client_secret}',
    'webhook_secret' => '{your_webhook_secret}', // optional, required for request signature validation
];
$oktave = new Oktave\Client($config);
```

Or configure after construct:

```php
$oktave = new Oktave\Client()
            ->setClientID('{your_client_uuid}')
            ->setClientSecret('{your_client_secret}')
            ->setWebhookSecret('{your_webhook_secret}'); // optional, required for request signature validation
```

**Note:** if you are unsure what your `client_id`, `client_secret` or `webhook_secret` are, please go to your [Oktave account](https://app.oktave.co/account/developer){target=\_blank} and copy them.

## Multiple teams usage

An Oktave account can have multiple teams. Your can interact with all account teams with one OAuth Client.
By default the team on which the Oauth client has been created is used.

**Important** We recommend to always use the `team_id` option.

Pass in the team ID to the client:

```php
$config = [
    // ...
    'team_id' => '{your_team_uuid}' // optional, required to specify a team ID
];
$oktave = new Oktave\Client($config);
```

Or configure after construct:

```php
$oktave = new Oktave\Client($config)
            ->setTeamId('{your_team_uuid}'); // optional, required to specify a team ID
```

**Warning!** If no `team_id` is specified, the team on which the OAuth client has been declared is used by default.

**Note:** if you are unsure what your `team_id` is, please go to your [Oktave account](https://app.oktave.co/account/developer){target=\_blank} and copy it.

Reset to the default team without its ID:

```php
// set the team_id to null.
$oktave = new Oktave\Client($config)
            ->setTeamId(null);
```

**Note:** the team value can be updated at anytime, for example between resource calls.

## On-Premise Customers

If you are an on-premise customer and have your own infrastructure with your own domain, you can configure the client to use your domain:

```php
$oktave->setBaseURL('https://api.yourdomain.com');
```

Or by adding the `api_endpoint` field to the `$config` array you pass to the constructor.
