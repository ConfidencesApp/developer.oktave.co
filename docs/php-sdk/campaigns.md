## Requirements

Before sending an Oktave campaign (email or text message) you **MUST have to configure it on your oktave survey**.
If you don't know how to create an email or text message campaign, [follow these instructions](https://help.oktave.co/fr/articles/2864758-partage-email){target=\_blank}

After creating the email or text message campaign, on your Oktave survey share panel, you can send it trought the API channel.
**When you select the API channel on your Oktave campaign, Oktave gives you an identifier, a UUID to be exact.**

## Recommendations

In order to prevent reaching Oktave API rate, we encourage developers to make their campaign `send` requests with multiple recipients.

> For better performance on campaign execution, you can provide a schedulation with a date, this ensure that all recipients provided accross muliple requests will be processing together.

## Send to a single recipient

```php

try {
	// For an email campaign
	$oktave->campaigns->send(YOUR_EMAIL_CAMPAIGN_API_UUID, 'email@domain.com');
} catch (\Throwable $e) {
	// ...
}

try {
	// For a text message campaign
	$oktave->campaigns->send(YOUR_SMS_CAMPAIGN_API_UUID, '+33612345789');
} catch (\Throwable $e) {
	// ...
}

```

## Send to a single recipient with custom merge map (variables)

```php

try {
	// For an email campaign
	$oktave->campaigns->send(YOUR_EMAIL_CAMPAIGN_API_UUID, [
		'email' 		=> 'email@domain.com'
		'firstname' => 'John',
		'lastname' 	=> 'Doe',
		// ...
	]);
} catch (\Throwable $e) {
	// ...
}

try {
	// For a text message campaign
	$oktave->campaigns->send(YOUR_SMS_CAMPAIGN_API_UUID, [
		'mobile' 		=> '+33612345789'
		'firstname' => 'John',
		'lastname' 	=> 'Doe',
		// ...
	]);
} catch (\Throwable $e) {
	// ...
}

```

## Send to multiple recipients

```php

try {
	// For an email campaign
	$oktave->campaigns->send(YOUR_EMAIL_CAMPAIGN_API_UUID, [
		'email1@domain.com',
		'email2@domain.com',
		// ...
	]);
} catch (\Throwable $e) {
	// ...
}

try {
	// For a text message campaign
	$oktave->campaigns->send(YOUR_SMS_CAMPAIGN_API_UUID, [
		'+33612345789',
		'+33712345689',
		// ...
	]);
} catch (\Throwable $e) {
	// ...
}

```

## Send to multiple recipients with custom merge map (variables)

```php

try {
	// For an email campaign
	$oktave->campaigns->send(YOUR_EMAIL_CAMPAIGN_API_UUID, [
		[
			'email' 		=> 'email1@domain.com'
			'firstname' => 'John',
			'lastname' 	=> 'Doe',
			// ...
		], [
			'email' 		=> 'email2@domain.com'
			'firstname' => 'Jane',
			'lastname' 	=> 'Doe',
			// ...
		]
	]);
} catch (\Throwable $e) {
	// ...
}

try {
	// For a text message campaign
	$oktave->campaigns->send(YOUR_SMS_CAMPAIGN_API_UUID, [
		[
			'mobile' 		=> '+33612345789'
			'firstname' => 'John',
			'lastname' 	=> 'Doe',
			// ...
		], [
			'mobile' 		=> '+33712345689'
			'firstname' => 'Jane',
			'lastname' 	=> 'Doe',
			// ...
		]
	]);
} catch (\Throwable $e) {
	// ...
}

```

## Schedulation

You can specify a date or a delay to send your campaign.
The date value must be type of `DateTime`, it will be converted to UTC format during the request.
The delay value must be type of `integer`.

```php

try {
	// Schedulation with a date
	$date = (new DateTime())->add(new DateInterval('P10D')); // 10 days later
	$oktave->campaigns->send(YOUR_CAMPAIGN_API_UUID, [/* ... */], $date);
} catch (\Throwable $e) {
	// ...
}

try {
	// Schedulation with a delay in seconds
	$oktave->campaigns->send(YOUR_CAMPAIGN_API_UUID, [/* ... */], 3600); // 1 hour later
} catch (\Throwable $e) {
	// ...
}

```
