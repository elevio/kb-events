[@elevio/kb-events](../README.md) › [Globals](../globals.md) › ["batch"](../modules/_batch_.md) › [Batch](_batch_.batch.md)

# Class: Batch

## Hierarchy

* **Batch**

## Index

### Constructors

* [constructor](_batch_.batch.md#constructor)

### Properties

* [_intervalTime](_batch_.batch.md#private-_intervaltime)
* [_timer](_batch_.batch.md#_timer)
* [handler](_batch_.batch.md#handler)
* [queue](_batch_.batch.md#queue)

### Methods

* [addEvent](_batch_.batch.md#addevent)
* [cancelTimer](_batch_.batch.md#canceltimer)
* [flush](_batch_.batch.md#flush)
* [startTimer](_batch_.batch.md#starttimer)

## Constructors

###  constructor

\+ **new Batch**(`opts`: [ConstructorOpts](../modules/_batch_.md#constructoropts)): *[Batch](_batch_.batch.md)*

*Defined in [batch.ts:20](https://github.com/elevio/kb-events/blob/abf46bc/src/batch.ts#L20)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [ConstructorOpts](../modules/_batch_.md#constructoropts) | allows us to change the behavior of the batching. NOTE: all options contain defaults.  |

**Returns:** *[Batch](_batch_.batch.md)*

## Properties

### `Private` _intervalTime

• **_intervalTime**: *number*

*Defined in [batch.ts:19](https://github.com/elevio/kb-events/blob/abf46bc/src/batch.ts#L19)*

___

###  _timer

• **_timer**: *undefined | number*

*Defined in [batch.ts:20](https://github.com/elevio/kb-events/blob/abf46bc/src/batch.ts#L20)*

___

###  handler

• **handler**: *function*

*Defined in [batch.ts:18](https://github.com/elevio/kb-events/blob/abf46bc/src/batch.ts#L18)*

Accepts an array of events and 'handles' them.

#### Type declaration:

▸ (`events`: Array‹[Events](../modules/_events_.md#events)›, `isSync`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`events` | Array‹[Events](../modules/_events_.md#events)› |
`isSync` | boolean |

___

###  queue

• **queue**: *Array‹[Events](../modules/_events_.md#events)›* = []

*Defined in [batch.ts:13](https://github.com/elevio/kb-events/blob/abf46bc/src/batch.ts#L13)*

The list of events that are to be sent.

## Methods

###  addEvent

▸ **addEvent**(`event`: [Events](../modules/_events_.md#events)): *void*

*Defined in [batch.ts:55](https://github.com/elevio/kb-events/blob/abf46bc/src/batch.ts#L55)*

Adds an event the the queue

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | [Events](../modules/_events_.md#events) | The event to add to the queue.  |

**Returns:** *void*

___

###  cancelTimer

▸ **cancelTimer**(): *void*

*Defined in [batch.ts:46](https://github.com/elevio/kb-events/blob/abf46bc/src/batch.ts#L46)*

**Returns:** *void*

___

###  flush

▸ **flush**(`isSync`: boolean): *void*

*Defined in [batch.ts:63](https://github.com/elevio/kb-events/blob/abf46bc/src/batch.ts#L63)*

Sends all of the current queue to the 'handler' func.

**Parameters:**

Name | Type |
------ | ------ |
`isSync` | boolean |

**Returns:** *void*

___

###  startTimer

▸ **startTimer**(): *void*

*Defined in [batch.ts:36](https://github.com/elevio/kb-events/blob/abf46bc/src/batch.ts#L36)*

**Returns:** *void*
