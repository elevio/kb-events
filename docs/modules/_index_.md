[@elevio/events](../README.md) › [Globals](../globals.md) › ["index"](_index_.md)

# External module: "index"

## Index

### Type aliases

* [Opts](_index_.md#opts)
* [User](_index_.md#user)

### Variables

* [_company_uid](_index_.md#let-_company_uid)
* [_debugMode](_index_.md#let-_debugmode)
* [_isAnonMode](_index_.md#let-_isanonmode)
* [_user](_index_.md#let-_user)
* [batch](_index_.md#let-batch)

### Functions

* [sendNow](_index_.md#sendnow)
* [setUser](_index_.md#setuser)
* [setup](_index_.md#setup)
* [track](_index_.md#track)

## Type aliases

###  Opts

Ƭ **Opts**: *object*

*Defined in [index.ts:19](https://github.com/elevio/elevio-events/blob/e13b493/src/index.ts#L19)*

#### Type declaration:

* **companyUid**: *string*

* **debugMode**? : *undefined | false | true*

* **interval**? : *undefined | number*

* **withUnload**? : *undefined | false | true*

___

###  User

Ƭ **User**: *object*

*Defined in [index.ts:9](https://github.com/elevio/elevio-events/blob/e13b493/src/index.ts#L9)*

#### Type declaration:

* **email**: *string*

* **id**? : *undefined | string*

## Variables

### `Let` _company_uid

• **_company_uid**: *string | null* = null

*Defined in [index.ts:14](https://github.com/elevio/elevio-events/blob/e13b493/src/index.ts#L14)*

___

### `Let` _debugMode

• **_debugMode**: *boolean* = false

*Defined in [index.ts:16](https://github.com/elevio/elevio-events/blob/e13b493/src/index.ts#L16)*

___

### `Let` _isAnonMode

• **_isAnonMode**: *boolean* = false

*Defined in [index.ts:15](https://github.com/elevio/elevio-events/blob/e13b493/src/index.ts#L15)*

___

### `Let` _user

• **_user**: *[User](_index_.md#user) | null* = null

*Defined in [index.ts:17](https://github.com/elevio/elevio-events/blob/e13b493/src/index.ts#L17)*

___

### `Let` batch

• **batch**: *[Batch](../classes/_batch_.batch.md) | null*

*Defined in [index.ts:8](https://github.com/elevio/elevio-events/blob/e13b493/src/index.ts#L8)*

## Functions

###  sendNow

▸ **sendNow**(`events`: Array‹[Events](_events_.md#events)›): *Promise‹void›*

*Defined in [index.ts:69](https://github.com/elevio/elevio-events/blob/e13b493/src/index.ts#L69)*

This sends the events without using the batching q.
It returns a promise so you can wait for it and will throw an error if it fails.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`events` | Array‹[Events](_events_.md#events)› | the array of events to send.  |

**Returns:** *Promise‹void›*

___

###  setUser

▸ **setUser**(`user`: [User](_index_.md#user) | null): *void*

*Defined in [index.ts:52](https://github.com/elevio/elevio-events/blob/e13b493/src/index.ts#L52)*

This will set the user

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`user` | [User](_index_.md#user) &#124; null |   |

**Returns:** *void*

___

###  setup

▸ **setup**(`__namedParameters`: object): *void*

*Defined in [index.ts:38](https://github.com/elevio/elevio-events/blob/e13b493/src/index.ts#L38)*

Instantiates and configures the analytics sender.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`companyUid` | string |
`debugMode` | undefined &#124; false &#124; true |
`interval` | undefined &#124; number |
`withUnload` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  track

▸ **track**(`event`: [Events](_events_.md#events)): *void*

*Defined in [index.ts:59](https://github.com/elevio/elevio-events/blob/e13b493/src/index.ts#L59)*

This is the thing that adds the event to the dispatch queue.

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Events](_events_.md#events) |

**Returns:** *void*
