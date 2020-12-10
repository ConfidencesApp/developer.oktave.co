## Available resources

For now, there are 3 resources avaible on the Oktave PHP SDK.

- `BlacklistItems` - Allow to retrieve all blacklist items for a given team
- `Campaigns` - To send email and text message campaigns to your contacts
- `Webhooks` - To validate your inbound webhook HTTP requests

## Pagination

To return a list of your resources without specific pagination values

```php
// return a list of your blacklist items
$oktave->blacklistItems->all();
```

To return a paginated list of your resources

```php
// return a list of your paginated blacklist items
// items per page accepted values : 10, 20, 50, 100

$result = $oktave->blacklistItems->perPage(20)->page(5)->all();
$result->data() // contains the ressource collection
$result->meta() // contains the current pagination meta

/* [ 'current_page' => 5, 'per_page' => 20, 'total' => 95 ] */
```

## Single Resource by ID

Fetch a Resource by ID:

```php
$oktave->blacklistItems->get($blacklistItemID);
```

## Handling Exceptions

Aside from errors that may occur due to the call, there may be other Exceptions thrown. To handle them, simply wrap your call in a try catch block:

```php
try {
    $oktave->blacklistItems->all();
} catch (Exception $e) {
    // do something with $e
}
```

Internally, there are several custom Exceptions which may be raised - see the [Exceptions](https://github.com/ConfidencesApp/oktave-sdk-php/tree/master/src/Exceptions){target=\_blank} directory for more information.
