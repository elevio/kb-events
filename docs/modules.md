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

▸ **sendNow**(`eventArray`: [*Events*](modules/events.md#events)[], `opts?`: [*SendOptions*](modules/events.md#sendoptions)): *Promise*<*void*\>

This sends the events without using the batching q.
It returns a promise so you can wait for it and will throw an error if it fails.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`eventArray` | [*Events*](modules/events.md#events)[] | - |
`opts?` | [*SendOptions*](modules/events.md#sendoptions) | allows you to "alter" the events before being sent    |

**Returns:** *Promise*<*void*\>

Defined in: [index.ts:127](https://github.com/elevio/kb-events/blob/543de2b/src/index.ts#L127)

___

### setLanguageId

▸ **setLanguageId**(`languageId`: *string* \| *null*): *void*

This will set the language id that articles + categories are currently displayed in.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`languageId` | *string* \| *null* |     |

**Returns:** *void*

Defined in: [index.ts:105](https://github.com/elevio/kb-events/blob/543de2b/src/index.ts#L105)

___

### setUser

▸ **setUser**(`user`: User \| *null*): *void*

This will set the user

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`user` | User \| *null* |     |

**Returns:** *void*

Defined in: [index.ts:97](https://github.com/elevio/kb-events/blob/543de2b/src/index.ts#L97)

___

### setup

▸ **setup**(`options`: SetupOptions): *void*

Instantiates and configures the analytics sender.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | SetupOptions | see [[Opts]]    |

**Returns:** *void*

Defined in: [index.ts:59](https://github.com/elevio/kb-events/blob/543de2b/src/index.ts#L59)

___

### track

▸ **track**(`event`: [*Events*](modules/events.md#events), `opts?`: [*SendOptions*](modules/events.md#sendoptions)): *void*

This is the thing that adds the event to the dispatch queue.
This is non-blocking.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`event` | [*Events*](modules/events.md#events) | the event to be sent.   |
`opts?` | [*SendOptions*](modules/events.md#sendoptions) | allows you to "alter" the events before being sent    |

**Returns:** *void*

Defined in: [index.ts:115](https://github.com/elevio/kb-events/blob/543de2b/src/index.ts#L115)
