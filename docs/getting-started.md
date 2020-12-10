# Getting started

Welcome to Oktave's Developer Platform! Use our APIs and SDKs to share your surveys on your websites, or by email and text messages, and retrieve responses.

## Oktave account requirements

All you need is an Enterprise Oktave account to use our APIs — Embed SDK is available for all Oktave accounts.

Some features require an Enterprise account, like Webhooks, and certain Embed modes.

## Base URL

The base URL for Oktave APIs is `https://api.oktave.co/`.

## Rate limits

Oktave APIs, are rate limited. If you are not using our PHP SDK, be sure to check the headers related to API rate limits `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `Retry-After`.

- `X-RateLimit-Limit` - The API rate limit for the current endpoint.
- `X-RateLimit-Remaining` - The remaining request count.
- `Retry-After` - The delay in seconds before retrying the request.

If the API rate limit is reached out, the response use the `429` HTTP code.

## Ready to use our APIs?

If you don't have an Oktave account, [take a quick detour to sign up](https://app.oktave.co/register){target=\_blank} first.

To use Oktave's APIs, you need to [create an OAuth 2.0 application](https://app.oktave.co/account/developer){target=\_blank} that integrates with Oktave.

The `access_token` is automatically managed with our [PHP SDK](./php-sdk/installation.md), you do not have to generate it.
