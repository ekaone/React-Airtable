Airtable

## Issue Using in browser

`TypeError: Failed to execute 'fetch' on 'Window': Illegal invocation`

Solution open /node_modules/airtable/lib/fetch.js, on line 8, change
```
typeof window === 'undefined' ? node_fetch_1.default : fetch;
```
to
```
typeof window === 'undefined' ? node_fetch_1.default : window.fetch.bind(window));
```