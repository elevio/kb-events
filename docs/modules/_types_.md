[@elevio/kb-events](../README.md) › [Globals](../globals.md) › ["types"](_types_.md)

# External module: "types"

## Index

### Interfaces

* [BaseEvent](../interfaces/_types_.baseevent.md)

### Type aliases

* [BaseContext](_types_.md#basecontext)
* [Event](_types_.md#event)
* [EventWithContext](_types_.md#eventwithcontext)
* [EventsUnion](_types_.md#eventsunion)
* [FunctionType](_types_.md#functiontype)

### Functions

* [createEvent](_types_.md#createevent)

## Type aliases

###  BaseContext

Ƭ **BaseContext**: *object*

*Defined in [types.ts:43](https://github.com/elevio/kb-events/blob/11baa8d/src/types.ts#L43)*

#### Type declaration:

* \[ **T**: *string*\]: string | object | undefined | number

* **custom_attributes**? : *string | object | number*

___

###  Event

Ƭ **Event**: *object & [BaseEvent](../interfaces/_types_.baseevent.md)*

*Defined in [types.ts:31](https://github.com/elevio/kb-events/blob/11baa8d/src/types.ts#L31)*

___

###  EventWithContext

Ƭ **EventWithContext**: *[Event](_types_.md#event)‹T› & C*

*Defined in [types.ts:36](https://github.com/elevio/kb-events/blob/11baa8d/src/types.ts#L36)*

___

###  EventsUnion

Ƭ **EventsUnion**: *ReturnType‹A›*

*Defined in [types.ts:41](https://github.com/elevio/kb-events/blob/11baa8d/src/types.ts#L41)*

___

###  FunctionType

Ƭ **FunctionType**: *function*

*Defined in [types.ts:38](https://github.com/elevio/kb-events/blob/11baa8d/src/types.ts#L38)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

## Functions

###  createEvent

▸ **createEvent**<**T**>(`eventName`: T): *[Event](_types_.md#event)‹T›*

*Defined in [types.ts:50](https://github.com/elevio/kb-events/blob/11baa8d/src/types.ts#L50)*

**Type parameters:**

▪ **T**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | T |

**Returns:** *[Event](_types_.md#event)‹T›*

▸ **createEvent**<**T**, **C**>(`eventName`: T, `context`: C): *[EventWithContext](_types_.md#eventwithcontext)‹T, C›*

*Defined in [types.ts:51](https://github.com/elevio/kb-events/blob/11baa8d/src/types.ts#L51)*

**Type parameters:**

▪ **T**: *string*

▪ **C**: *[BaseContext](_types_.md#basecontext)*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | T |
`context` | C |

**Returns:** *[EventWithContext](_types_.md#eventwithcontext)‹T, C›*
