## Webhook request verification

To verify a webhook request signature

```php

// return true if the request signature is valid
$oktave->webhooks->verifySignatureFromGlobals();

```

This method use global variables to validate the webhook signature.
The following global variables are used :

- `$_SERVER['HTTP_OKTAVE_EVENT_ID']`
- `$_SERVER['HTTP_OKTAVE_TIMESTAMP']`
- `$_SERVER['HTTP_OKTAVE_SIGNATURE']`

You can manually check the webhook request like this :

```php

$eventID = isset($_SERVER['HTTP_OKTAVE_EVENT_ID']) ? $_SERVER['HTTP_OKTAVE_EVENT_ID'] : null;
$requestTimestamp = isset($_SERVER['HTTP_OKTAVE_TIMESTAMP']) ? (int) $_SERVER['HTTP_OKTAVE_TIMESTAMP'] : null;
$signature = isset($_SERVER['HTTP_OKTAVE_SIGNATURE']) ? $_SERVER['HTTP_OKTAVE_SIGNATURE'] : null;

// return true if the request signature is valid
$oktave->webhooks->verifySignature($eventID, $requestTimestamp, $signature);

```
