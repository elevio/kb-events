[@elevio/kb-events](../README.md) › [Globals](../globals.md) › ["pageStats"](_pagestats_.md)

# External module: "pageStats"

## Index

### Variables

* [language](_pagestats_.md#const-language)
* [referrer](_pagestats_.md#const-referrer)
* [timezoneOffset](_pagestats_.md#const-timezoneoffset)
* [timezoneString](_pagestats_.md#const-timezonestring)

### Functions

* [getAll](_pagestats_.md#getall)

## Variables

### `Const` language

• **language**: *string* = window.navigator.userLanguage || window.navigator.language

*Defined in [pageStats.ts:4](https://github.com/elevio/kb-events/blob/4fe81c3/src/pageStats.ts#L4)*

___

### `Const` referrer

• **referrer**: *(Anonymous function)* = memoize(() => {
  let referrerStr = '';
  try {
    referrerStr = window.top.document.referrer;
  } catch (e) {
    if (window.parent) {
      try {
        referrerStr = window.parent.document.referrer;
      } catch (e1) {
        referrerStr = '';
      }
    }
  }
  if (referrerStr === '') {
    referrerStr = window.document.referrer;
  }
  return referrerStr;
})

*Defined in [pageStats.ts:8](https://github.com/elevio/kb-events/blob/4fe81c3/src/pageStats.ts#L8)*

___

### `Const` timezoneOffset

• **timezoneOffset**: *number* = new Date().getTimezoneOffset()

*Defined in [pageStats.ts:29](https://github.com/elevio/kb-events/blob/4fe81c3/src/pageStats.ts#L29)*

___

### `Const` timezoneString

• **timezoneString**: *string* = String(String(new Date()).split('(')[1]).split(
  ')'
)[0]

*Defined in [pageStats.ts:31](https://github.com/elevio/kb-events/blob/4fe81c3/src/pageStats.ts#L31)*

## Functions

###  getAll

▸ **getAll**(): *object*

*Defined in [pageStats.ts:36](https://github.com/elevio/kb-events/blob/4fe81c3/src/pageStats.ts#L36)*

**Returns:** *object*

* **customer_uid**: *string* = getConfig().companyUid

* **page_document_size_height**: *number* = docHeight

* **page_document_size_width**: *number* = docWidth

* **page_language**: *string* = language

* **page_page_offset_left**: *number* = Math.max(
      window.pageXOffset || document.body.scrollLeft || 0
    )

* **page_page_offset_top**: *number* = Math.max(
      window.pageYOffset || document.body.scrollTop || 0
    )

* **page_referrer**: *undefined | string* = getConfig().isAnonMode ? undefined : referrer()

* **page_timezone_offset**: *number* = timezoneOffset

* **page_timezone_string**: *string* = timezoneString

* **page_title**: *string* = window.document.title

* **page_url**: *undefined | string* = getConfig().isAnonMode ? undefined : window.location.href

* **page_viewport_height**: *number* = window.innerHeight

* **page_viewport_width**: *number* = window.innerWidth

* **timestamp_created**: *number* = Date.now()

* **user_email**: *undefined | string* = _user ? _user.email : undefined

* **user_uid**: *undefined | string* = _user ? _user.id : undefined
