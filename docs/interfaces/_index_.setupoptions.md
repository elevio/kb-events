[@elevio/kb-events](../README.md) › [Globals](../globals.md) › ["index"](../modules/_index_.md) › [SetupOptions](_index_.setupoptions.md)

# Interface: SetupOptions

## Hierarchy

* **SetupOptions**

## Index

### Properties

* [companyUid](_index_.setupoptions.md#companyuid)
* [debugMode](_index_.setupoptions.md#optional-debugmode)
* [endpointURL](_index_.setupoptions.md#optional-endpointurl)
* [eventType](_index_.setupoptions.md#optional-eventtype)
* [interval](_index_.setupoptions.md#optional-interval)
* [withUnload](_index_.setupoptions.md#optional-withunload)

## Properties

###  companyUid

• **companyUid**: *string*

*Defined in [index.ts:38](https://github.com/elevio/kb-events/blob/b56fb39/src/index.ts#L38)*

The companyUid from Elevio

___

### `Optional` debugMode

• **debugMode**? : *undefined | false | true*

*Defined in [index.ts:47](https://github.com/elevio/kb-events/blob/b56fb39/src/index.ts#L47)*

Test the events by printing them out

___

### `Optional` endpointURL

• **endpointURL**? : *undefined | string*

*Defined in [index.ts:50](https://github.com/elevio/kb-events/blob/b56fb39/src/index.ts#L50)*

Allows you to override where the events are sent, useful for testing purposes

___

### `Optional` eventType

• **eventType**? : *undefined | string*

*Defined in [index.ts:53](https://github.com/elevio/kb-events/blob/b56fb39/src/index.ts#L53)*

Allows you to set a custom event type, generally not used

___

### `Optional` interval

• **interval**? : *undefined | number*

*Defined in [index.ts:41](https://github.com/elevio/kb-events/blob/b56fb39/src/index.ts#L41)*

How often to send events in ms, default to 500ms

___

### `Optional` withUnload

• **withUnload**? : *undefined | false | true*

*Defined in [index.ts:44](https://github.com/elevio/kb-events/blob/b56fb39/src/index.ts#L44)*

Should we try to send the events before the page unloads, default to `true`
