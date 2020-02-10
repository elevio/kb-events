[@elevio/events](../README.md) › [Globals](../globals.md) › ["pageStats"](_pagestats_.md)

# External module: "pageStats"

## Index

### Variables

* [language](_pagestats_.md#const-language)
* [timezoneOffset](_pagestats_.md#const-timezoneoffset)
* [timezoneString](_pagestats_.md#const-timezonestring)

### Functions

* [getAll](_pagestats_.md#getall)
* [referrer](_pagestats_.md#const-referrer)

## Variables

### `Const` language

• **language**: *string* = window.navigator.userLanguage || window.navigator.language

*Defined in [pageStats.ts:3](https://github.com/elevio/elevio-events/blob/e13b493/src/pageStats.ts#L3)*

___

### `Const` timezoneOffset

• **timezoneOffset**: *number* = new Date().getTimezoneOffset()

*Defined in [pageStats.ts:26](https://github.com/elevio/elevio-events/blob/e13b493/src/pageStats.ts#L26)*

___

### `Const` timezoneString

• **timezoneString**: *string* = String(String(new Date()).split('(')[1]).split(
  ')'
)[0]

*Defined in [pageStats.ts:28](https://github.com/elevio/elevio-events/blob/e13b493/src/pageStats.ts#L28)*

## Functions

###  getAll

▸ **getAll**(): *object*

*Defined in [pageStats.ts:33](https://github.com/elevio/elevio-events/blob/e13b493/src/pageStats.ts#L33)*

**Returns:** *object*

* **customer_uid**: *string* = _company_uid

* **page_document_size_height**: *number* = docHeight

* **page_document_size_width**: *number* = docWidth

* **page_language**: *string* = language

* **page_page_offset_left**: *number* = Math.max(
      window.pageXOffset || document.body.scrollLeft || 0
    )

* **page_page_offset_top**: *number* = Math.max(
      window.pageYOffset || document.body.scrollTop || 0
    )

* **page_referrer**: *undefined | string* = _isAnonMode ? undefined : referrer()

* **page_timezone_offset**: *number* = timezoneOffset

* **page_timezone_string**: *string* = timezoneString

* **page_title**: *string* = window.document.title

* **page_url**: *undefined | string* = _isAnonMode ? undefined : window.location.href

* **page_viewport_height**: *number* = window.innerHeight

* **page_viewport_width**: *number* = window.innerWidth

* **timestamp_created**: *number* = Date.now()

* **user_email**: *undefined | string* = _user ? _user.email : undefined

* **user_uid**: *undefined | string* = _user ? _user.id : undefined

___

### `Const` referrer

▸ **referrer**(): *string*

*Defined in [pageStats.ts:7](https://github.com/elevio/elevio-events/blob/e13b493/src/pageStats.ts#L7)*

**Returns:** *string*
