# Webhook

Oktave webhooks allow you to listen events on your application by receiving
incoming requests sent by Oktave application. Requests use the `POST HTTP` method and data are formatted using `JSON`.

## Configuration

Oktave webhooks can be configured on your survey or account configuration page.

> **About CSRF protection**
>
> If you have a CSRF protection on your application, you should disable it for your webhook handler route.

### Validating webhook origin

Oktave webhooks are always signed using your webhook secret key (available on your account page). This allows you to validate that the events you receive are really sent by Oktave application. **You SHOULD use the signature to verify provenance of webhooks**.

Here is an example of signature validation using our [PHP SDK](../php-sdk/installation.md).

```php
$config = [
    'webhook_secret' => '{your_webhook_secret}',
		// Other options not required for webhook validation
];
$oktave = new Oktave\Client($config);
```

```php
// return true if the request signature is valid
$oktave->webhooks->verifySignatureFromGlobals();
```

> More than signature verification, **you should also check** that the received **event is not too old** or that you do **not already received** it.
