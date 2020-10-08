[@elevio/kb-events](../README.md) › [Globals](../globals.md) › ["index"](_index_.md)

# External module: "index"

## Index

### Interfaces

* [SetupOptions](../interfaces/_index_.setupoptions.md)
* [User](../interfaces/_index_.user.md)

### Type aliases

* [SendOptions](_index_.md#sendoptions)

### Functions

* [alterEvent](_index_.md#alterevent)
* [sendNow](_index_.md#sendnow)
* [setLanguageId](_index_.md#setlanguageid)
* [setUser](_index_.md#setuser)
* [setup](_index_.md#setup)
* [track](_index_.md#track)

## Type aliases

###  SendOptions

Ƭ **SendOptions**: *object*

*Defined in [index.ts:131](https://github.com/elevio/kb-events/blob/9fb318c/src/index.ts#L131)*

Options for altering the events before they are sent.
`force_timestamp` will force the timestamp to allow backfilling of events.

#### Type declaration:

* **force_timestamp**? : *undefined | number*

## Functions

###  alterEvent

▸ **alterEvent**(`event`: [Events](_events_.md#events), `opts`: [SendOptions](_index_.md#sendoptions)): *[Events](_events_.md#events)*

*Defined in [index.ts:135](https://github.com/elevio/kb-events/blob/9fb318c/src/index.ts#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Events](_events_.md#events) |
`opts` | [SendOptions](_index_.md#sendoptions) |

**Returns:** *[Events](_events_.md#events)*

___

###  sendNow

▸ **sendNow**(`events`: Array‹[Events](_events_.md#events)›, `opts?`: [SendOptions](_index_.md#sendoptions)): *Promise‹void›*

*Defined in [index.ts:164](https://github.com/elevio/kb-events/blob/9fb318c/src/index.ts#L164)*

This sends the events without using the batching q.
It returns a promise so you can wait for it and will throw an error if it fails.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`events` | Array‹[Events](_events_.md#events)› | the array of events to send. |
`opts?` | [SendOptions](_index_.md#sendoptions) | allows you to "alter" the events before being sent  |

**Returns:** *Promise‹void›*

___

###  setLanguageId

▸ **setLanguageId**(`languageId`: string | null): *void*

*Defined in [index.ts:119](https://github.com/elevio/kb-events/blob/9fb318c/src/index.ts#L119)*

This will set the language id that articles + categories are currently displayed in.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`languageId` | string &#124; null |   |

**Returns:** *void*

___

###  setUser

▸ **setUser**(`user`: [User](../interfaces/_index_.user.md) | null): *void*

*Defined in [index.ts:111](https://github.com/elevio/kb-events/blob/9fb318c/src/index.ts#L111)*

This will set the user

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`user` | [User](../interfaces/_index_.user.md) &#124; null |   |

**Returns:** *void*

___

###  setup

▸ **setup**(`options`: [SetupOptions](../interfaces/_index_.setupoptions.md)): *void*

*Defined in [index.ts:72](https://github.com/elevio/kb-events/blob/9fb318c/src/index.ts#L72)*

Instantiates and configures the analytics sender.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [SetupOptions](../interfaces/_index_.setupoptions.md) | see [[Opts]]  |

**Returns:** *void*

___

###  track

▸ **track**(`event`: [Events](_events_.md#events), `opts?`: [SendOptions](_index_.md#sendoptions)): *void*

*Defined in [index.ts:152](https://github.com/elevio/kb-events/blob/9fb318c/src/index.ts#L152)*

This is the thing that adds the event to the dispatch queue.
This is non-blocking.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | [Events](_events_.md#events) | the event to be sent. |
`opts?` | [SendOptions](_index_.md#sendoptions) | allows you to "alter" the events before being sent  |

**Returns:** *void*
