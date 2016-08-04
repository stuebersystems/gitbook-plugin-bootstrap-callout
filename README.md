# Gitbook Callout Plugin [![npm version](https://badge.fury.io/js/gitbook-plugin-bootstrap-callout.svg)](https://badge.fury.io/js/gitbook-plugin-bootstrap-callout)

This plugin creates [Bootstrap](https://getbootstrap.com/) like callouts for your GitBook. All three GitBook themes (White, Sepia, Night) are supported. This project took heavy inspiration from https://github.com/gubler/gitbook-plugin-callouts.

## Usage

### Installation

Add the plugin to your `book.json`:

```
{
	"plugins" : [ "bootstrap-callout" ]
}		
```

### Create callouts

Callouts are an extension of markdown blockquotes. All callouts must start with a h4 header, the callout type, and a title. The format for this is:

For Markdown:

```
> #### type::Title
>
> Content
```

Supported callouts are:

- `> #### primary::Title`
- `> #### success::Title`
- `> #### danger::Title`
- `> #### warning::Title`
- `> #### info::Title`

If you leave out the type a default callout is used.

```
> #### Title
>
> Content
```

Callouts are case-insensitive.

## Screenshots

The callouts in action (White theme):

![Screenshots](https://raw.githubusercontent.com/stuebersystems/gitbook-plugin-bootstrap-callout/master/screenshots.png)

## Changelog

* 0.1.0 Releases:
  * 0.1.0 First release
  * 0.1.1 Some text changes
