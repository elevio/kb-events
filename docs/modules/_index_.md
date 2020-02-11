[@elevio/kb-events](../README.md) › [Globals](../globals.md) › ["index"](_index_.md)

# External module: "index"

## Index

### Interfaces

* [SetupOptions](../interfaces/_index_.setupoptions.md)
* [User](../interfaces/_index_.user.md)

### Functions

* [sendNow](_index_.md#sendnow)
* [setUser](_index_.md#setuser)
* [setup](_index_.md#setup)
* [track](_index_.md#track)

## Functions

###  sendNow

▸ **sendNow**(`events`: Array‹[Events](_events_.md#events)›): *Promise‹void›*

*Defined in [index.ts:119](https://github.com/elevio/kb-events/blob/4fe81c3/src/index.ts#L119)*

This sends the events without using the batching q.
It returns a promise so you can wait for it and will throw an error if it fails.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`events` | Array‹[Events](_events_.md#events)› | the array of events to send.  |

**Returns:** *Promise‹void›*

___

###  setUser

▸ **setUser**(`user`: [User](../interfaces/_index_.user.md) | null): *void*

*Defined in [index.ts:102](https://github.com/elevio/kb-events/blob/4fe81c3/src/index.ts#L102)*

This will set the user

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`user` | [User](../interfaces/_index_.user.md) &#124; null |   |

**Returns:** *void*

___

###  setup

▸ **setup**(`options`: [SetupOptions](../interfaces/_index_.setupoptions.md)): *void*

*Defined in [index.ts:65](https://github.com/elevio/kb-events/blob/4fe81c3/src/index.ts#L65)*

Instantiates and configures the analytics sender.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [SetupOptions](../interfaces/_index_.setupoptions.md) | see [[Opts]]  |

**Returns:** *void*

___

###  track

▸ **track**(`event`: [Events](_events_.md#events)): *void*

*Defined in [index.ts:109](https://github.com/elevio/kb-events/blob/4fe81c3/src/index.ts#L109)*

This is the thing that adds the event to the dispatch queue.

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Events](_events_.md#events) |

**Returns:** *void*
