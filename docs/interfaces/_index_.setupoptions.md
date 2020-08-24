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
* [languageId](_index_.setupoptions.md#optional-languageid)
* [withUnload](_index_.setupoptions.md#optional-withunload)

## Properties

###  companyUid

• **companyUid**: *string*

*Defined in [index.ts:42](https://github.com/elevio/kb-events/blob/5af97fd/src/index.ts#L42)*

The companyUid from Elevio

___

### `Optional` debugMode

• **debugMode**? : *undefined | false | true*

*Defined in [index.ts:51](https://github.com/elevio/kb-events/blob/5af97fd/src/index.ts#L51)*

Test the events by printing them out

___

### `Optional` endpointURL

• **endpointURL**? : *undefined | string*

*Defined in [index.ts:54](https://github.com/elevio/kb-events/blob/5af97fd/src/index.ts#L54)*

Allows you to override where the events are sent, useful for testing purposes

___

### `Optional` eventType

• **eventType**? : *undefined | string*

*Defined in [index.ts:57](https://github.com/elevio/kb-events/blob/5af97fd/src/index.ts#L57)*

Allows you to set a custom event type, generally not used

___

### `Optional` interval

• **interval**? : *undefined | number*

*Defined in [index.ts:45](https://github.com/elevio/kb-events/blob/5af97fd/src/index.ts#L45)*

How often to send events in ms, default to 500ms

___

### `Optional` languageId

• **languageId**? : *undefined | string*

*Defined in [index.ts:60](https://github.com/elevio/kb-events/blob/5af97fd/src/index.ts#L60)*

See: setLanguageId, just sets the langauge the user is veiwing Elevio content in.

___

### `Optional` withUnload

• **withUnload**? : *undefined | false | true*

*Defined in [index.ts:48](https://github.com/elevio/kb-events/blob/5af97fd/src/index.ts#L48)*

Should we try to send the events before the page unloads, default to `true`
