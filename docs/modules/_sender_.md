[@elevio/events](../README.md) › [Globals](../globals.md) › ["sender"](_sender_.md)

# External module: "sender"

## Index

### Variables

* [ENDPOINT_URL](_sender_.md#const-endpoint_url)
* [TYPE](_sender_.md#const-type)

### Functions

* [XMLHttpSender](_sender_.md#xmlhttpsender)
* [beaconSender](_sender_.md#beaconsender)
* [formatData](_sender_.md#formatdata)
* [getSender](_sender_.md#getsender)
* [promiseSender](_sender_.md#promisesender)

## Variables

### `Const` ENDPOINT_URL

• **ENDPOINT_URL**: *"https://events.elev.io/v1/events"* = "https://events.elev.io/v1/events"

*Defined in [sender.ts:5](https://github.com/elevio/elevio-events/blob/e13b493/src/sender.ts#L5)*

___

### `Const` TYPE

• **TYPE**: *"web-kb-event-2"* = "web-kb-event-2"

*Defined in [sender.ts:4](https://github.com/elevio/elevio-events/blob/e13b493/src/sender.ts#L4)*

## Functions

###  XMLHttpSender

▸ **XMLHttpSender**(`events`: Array‹[Events](_events_.md#events)›, `isSync`: boolean): *void*

*Defined in [sender.ts:32](https://github.com/elevio/elevio-events/blob/e13b493/src/sender.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`events` | Array‹[Events](_events_.md#events)› |
`isSync` | boolean |

**Returns:** *void*

___

###  beaconSender

▸ **beaconSender**(`events`: Array‹[Events](_events_.md#events)›): *void*

*Defined in [sender.ts:15](https://github.com/elevio/elevio-events/blob/e13b493/src/sender.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`events` | Array‹[Events](_events_.md#events)› |

**Returns:** *void*

___

###  formatData

▸ **formatData**(`events`: Array‹[Events](_events_.md#events)›): *object*

*Defined in [sender.ts:7](https://github.com/elevio/elevio-events/blob/e13b493/src/sender.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`events` | Array‹[Events](_events_.md#events)› |

**Returns:** *object*

* **events**: *object & [BaseEvent](../interfaces/_types_.baseevent.md) | object & [BaseEvent](../interfaces/_types_.baseevent.md) & object | object & [BaseEvent](../interfaces/_types_.baseevent.md) & object | object & [BaseEvent](../interfaces/_types_.baseevent.md) & object | object & [BaseEvent](../interfaces/_types_.baseevent.md) & object | object & [BaseEvent](../interfaces/_types_.baseevent.md) & object[]*

* **type**: *string* = TYPE

___

###  getSender

▸ **getSender**(): *typeof XMLHttpSender*

*Defined in [sender.ts:90](https://github.com/elevio/elevio-events/blob/e13b493/src/sender.ts#L90)*

Automatically choose the best way to send events.

**Returns:** *typeof XMLHttpSender*

___

###  promiseSender

▸ **promiseSender**(`events`: Array‹[Events](_events_.md#events)›): *Promise‹void›*

*Defined in [sender.ts:55](https://github.com/elevio/elevio-events/blob/e13b493/src/sender.ts#L55)*

This sends the array of events to the server but returns a promise so you can
wait to make sure they get sent correctly.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`events` | Array‹[Events](_events_.md#events)› | the array of events to send.  |

**Returns:** *Promise‹void›*
