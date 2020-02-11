[@elevio/kb-events](../README.md) › [Globals](../globals.md) › ["sender"](_sender_.md)

# External module: "sender"

## Index

### Functions

* [XMLHttpSender](_sender_.md#xmlhttpsender)
* [beaconSender](_sender_.md#beaconsender)
* [formatData](_sender_.md#formatdata)
* [getSender](_sender_.md#getsender)
* [promiseSender](_sender_.md#promisesender)

## Functions

###  XMLHttpSender

▸ **XMLHttpSender**(`events`: Array‹[Events](_events_.md#events)›, `isSync`: boolean): *void*

*Defined in [sender.ts:26](https://github.com/elevio/kb-events/blob/77e5091/src/sender.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`events` | Array‹[Events](_events_.md#events)› |
`isSync` | boolean |

**Returns:** *void*

___

###  beaconSender

▸ **beaconSender**(`events`: Array‹[Events](_events_.md#events)›): *void*

*Defined in [sender.ts:12](https://github.com/elevio/kb-events/blob/77e5091/src/sender.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`events` | Array‹[Events](_events_.md#events)› |

**Returns:** *void*

___

###  formatData

▸ **formatData**(`events`: Array‹[Events](_events_.md#events)›): *string*

*Defined in [sender.ts:4](https://github.com/elevio/kb-events/blob/77e5091/src/sender.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`events` | Array‹[Events](_events_.md#events)› |

**Returns:** *string*

___

###  getSender

▸ **getSender**(): *typeof XMLHttpSender*

*Defined in [sender.ts:81](https://github.com/elevio/kb-events/blob/77e5091/src/sender.ts#L81)*

Automatically choose the best way to send events.

**Returns:** *typeof XMLHttpSender*

___

###  promiseSender

▸ **promiseSender**(`events`: Array‹[Events](_events_.md#events)›): *Promise‹void›*

*Defined in [sender.ts:49](https://github.com/elevio/kb-events/blob/77e5091/src/sender.ts#L49)*

This sends the array of events to the server but returns a promise so you can
wait to make sure they get sent correctly.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`events` | Array‹[Events](_events_.md#events)› | the array of events to send.  |

**Returns:** *Promise‹void›*
