[@elevio/kb-events](README.md) / Exports

# @elevio/kb-events

## Table of contents

### Namespaces

- [events](modules/events.md)

### Functions

- [sendNow](modules.md#sendnow)
- [setLanguageId](modules.md#setlanguageid)
- [setUser](modules.md#setuser)
- [setup](modules.md#setup)
- [track](modules.md#track)

## Functions

### sendNow

▸ **sendNow**(`events`: [*Events*](modules/events.md#events)[], `opts?`: SendOptions): *Promise*<*void*\>

This sends the events without using the batching q.
It returns a promise so you can wait for it and will throw an error if it fails.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`events` | [*Events*](modules/events.md#events)[] | the array of events to send.   |
`opts?` | SendOptions | allows you to "alter" the events before being sent    |

**Returns:** *Promise*<*void*\>

Defined in: [index.ts:150](https://github.com/elevio/kb-events/blob/381188b/src/index.ts#L150)

___

### setLanguageId

▸ **setLanguageId**(`languageId`: *string* \| *null*): *void*

This will set the language id that articles + categories are currently displayed in.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`languageId` | *string* \| *null* |     |

**Returns:** *void*

Defined in: [index.ts:106](https://github.com/elevio/kb-events/blob/381188b/src/index.ts#L106)

___

### setUser

▸ **setUser**(`user`: User \| *null*): *void*

This will set the user

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`user` | User \| *null* |     |

**Returns:** *void*

Defined in: [index.ts:98](https://github.com/elevio/kb-events/blob/381188b/src/index.ts#L98)

___

### setup

▸ **setup**(`options`: SetupOptions): *void*

Instantiates and configures the analytics sender.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | SetupOptions | see [[Opts]]    |

**Returns:** *void*

Defined in: [index.ts:60](https://github.com/elevio/kb-events/blob/381188b/src/index.ts#L60)

___

### track

▸ **track**(`event`: [*Events*](modules/events.md#events), `opts?`: SendOptions): *void*

This is the thing that adds the event to the dispatch queue.
This is non-blocking.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`event` | [*Events*](modules/events.md#events) | the event to be sent.   |
`opts?` | SendOptions | allows you to "alter" the events before being sent    |

**Returns:** *void*

Defined in: [index.ts:138](https://github.com/elevio/kb-events/blob/381188b/src/index.ts#L138)
