[@elevio/kb-events](../README.md) › [Globals](../globals.md) › ["pageStats"](_pagestats_.md)

# External module: "pageStats"

## Index

### Variables

* [isIframe](_pagestats_.md#const-isiframe)
* [language](_pagestats_.md#const-language)
* [referrer](_pagestats_.md#const-referrer)
* [timezoneOffset](_pagestats_.md#const-timezoneoffset)
* [timezoneString](_pagestats_.md#const-timezonestring)

### Functions

* [getAll](_pagestats_.md#getall)

## Variables

### `Const` isIframe

• **isIframe**: *(Anonymous function)* = memoize(() => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
})

*Defined in [pageStats.ts:27](https://github.com/elevio/kb-events/blob/11baa8d/src/pageStats.ts#L27)*

___

### `Const` language

• **language**: *string* = window.navigator.userLanguage || window.navigator.language

*Defined in [pageStats.ts:4](https://github.com/elevio/kb-events/blob/11baa8d/src/pageStats.ts#L4)*

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

*Defined in [pageStats.ts:8](https://github.com/elevio/kb-events/blob/11baa8d/src/pageStats.ts#L8)*

___

### `Const` timezoneOffset

• **timezoneOffset**: *number* = new Date().getTimezoneOffset()

*Defined in [pageStats.ts:35](https://github.com/elevio/kb-events/blob/11baa8d/src/pageStats.ts#L35)*

___

### `Const` timezoneString

• **timezoneString**: *string* = String(String(new Date()).split('(')[1]).split(')')[0]

*Defined in [pageStats.ts:37](https://github.com/elevio/kb-events/blob/11baa8d/src/pageStats.ts#L37)*

## Functions

###  getAll

▸ **getAll**(): *object*

*Defined in [pageStats.ts:40](https://github.com/elevio/kb-events/blob/11baa8d/src/pageStats.ts#L40)*

**Returns:** *object*

* **app_lang**: *null | string* = _languageId

* **customer_uid**: *string* = getConfig().companyUid

* **page_document_size_height**: *number* = docHeight

* **page_document_size_width**: *number* = docWidth

* **page_is_iframe**: *boolean* = isIframe()

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
