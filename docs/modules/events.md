[@elevio/kb-events](../README.md) / [Exports](../modules.md) / events

# Namespace: events

## Table of contents

### Type aliases

- [Events](events.md#events)
- [SendOptions](events.md#sendoptions)

### Functions

- [alterEvent](events.md#alterevent)
- [articleFeedbackReaction](events.md#articlefeedbackreaction)
- [pageViewArticle](events.md#pageviewarticle)
- [pageViewCategory](events.md#pageviewcategory)
- [pageViewIndex](events.md#pageviewindex)
- [searchClick](events.md#searchclick)
- [searchQuery](events.md#searchquery)

## Type aliases

### Events

Ƭ **Events**: *EventsUnion*<*typeof* [*pageViewIndex*](events.md#pageviewindex) \| *typeof* [*pageViewArticle*](events.md#pageviewarticle) \| *typeof* [*pageViewCategory*](events.md#pageviewcategory) \| *typeof* [*searchQuery*](events.md#searchquery) \| *typeof* [*searchClick*](events.md#searchclick) \| *typeof* [*articleFeedbackReaction*](events.md#articlefeedbackreaction)\>

Defined in: [events.ts:123](https://github.com/elevio/kb-events/blob/3bb655a/src/events.ts#L123)

___

### SendOptions

Ƭ **SendOptions**: *object*

Options for altering the events before they are sent.
`forceTimestamp` will force the timestamp to allow backfilling of events.
`customAttributes` allows you to pass custom event data, for your own debugging purposes.

#### Type declaration:

Name | Type |
:------ | :------ |
`customAttributes`? | CustomAttributes |
`forceTimestamp`? | *number* |

Defined in: [events.ts:137](https://github.com/elevio/kb-events/blob/3bb655a/src/events.ts#L137)

## Functions

### alterEvent

▸ **alterEvent**(`event`: [*Events*](events.md#events), `opts`: [*SendOptions*](events.md#sendoptions)): [*Events*](events.md#events)

Alters a given event with optional parameters before being sent.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | [*Events*](events.md#events) | the event to be sent   |
`opts` | [*SendOptions*](events.md#sendoptions) | the optional parameters    |

**Returns:** [*Events*](events.md#events)

Defined in: [events.ts:109](https://github.com/elevio/kb-events/blob/3bb655a/src/events.ts#L109)

___

### articleFeedbackReaction

▸ **articleFeedbackReaction**(`data`: { `articleId`: *string* ; `articleTitle`: *string* ; `isPositive`: *boolean*  }): *EventWithContext*<*article_feedback_reaction*, { `event_ctx_id`: *string* ; `event_ctx_reaction`: *number* ; `event_ctx_title`: *string*  }\>

Triggered when article feedback reaction is submited.

#### Parameters:

Name | Type |
:------ | :------ |
`data` | *object* |
`data.articleId` | *string* |
`data.articleTitle` | *string* |
`data.isPositive` | *boolean* |

**Returns:** *EventWithContext*<*article_feedback_reaction*, { `event_ctx_id`: *string* ; `event_ctx_reaction`: *number* ; `event_ctx_title`: *string*  }\>

Defined in: [events.ts:92](https://github.com/elevio/kb-events/blob/3bb655a/src/events.ts#L92)

___

### pageViewArticle

▸ **pageViewArticle**(`data`: { `articleId`: *string* ; `articleTitle`: *string*  }): *EventWithContext*<*page_view_article*, { `event_ctx_id`: *string* ; `event_ctx_title`: *string*  }\>

Triggered when an article page is viewed in the knowledge base.

#### Parameters:

Name | Type |
:------ | :------ |
`data` | *object* |
`data.articleId` | *string* |
`data.articleTitle` | *string* |

**Returns:** *EventWithContext*<*page_view_article*, { `event_ctx_id`: *string* ; `event_ctx_title`: *string*  }\>

Defined in: [events.ts:16](https://github.com/elevio/kb-events/blob/3bb655a/src/events.ts#L16)

___

### pageViewCategory

▸ **pageViewCategory**(`data`: { `categoryId`: *string* ; `categoryTitle`: *string*  }): *EventWithContext*<*page_view_category*, { `event_ctx_categoryId`: *string* ; `event_ctx_title`: *string*  }\>

Triggered when a category page is viewed in the knowledge base.

#### Parameters:

Name | Type |
:------ | :------ |
`data` | *object* |
`data.categoryId` | *string* |
`data.categoryTitle` | *string* |

**Returns:** *EventWithContext*<*page_view_category*, { `event_ctx_categoryId`: *string* ; `event_ctx_title`: *string*  }\>

Defined in: [events.ts:32](https://github.com/elevio/kb-events/blob/3bb655a/src/events.ts#L32)

___

### pageViewIndex

▸ **pageViewIndex**(): *Event*<*page_view_index*\>

Triggered when the the home page is viewed in the knowledge base.

**Returns:** *Event*<*page_view_index*\>

Defined in: [events.ts:6](https://github.com/elevio/kb-events/blob/3bb655a/src/events.ts#L6)

___

### searchClick

▸ **searchClick**(`data`: { `articleId`: *string* ; `articleTitle`: *string* ; `resultIndex`: *number* ; `searchTerm`: *string*  }): *EventWithContext*<*search_click*, { `event_ctx_id`: *string* ; `event_ctx_index`: *number* ; `event_ctx_query`: *string* ; `event_ctx_title`: *string*  }\>

Triggered when a user clicks on a search result.

#### Parameters:

Name | Type |
:------ | :------ |
`data` | *object* |
`data.articleId` | *string* |
`data.articleTitle` | *string* |
`data.resultIndex` | *number* |
`data.searchTerm` | *string* |

**Returns:** *EventWithContext*<*search_click*, { `event_ctx_id`: *string* ; `event_ctx_index`: *number* ; `event_ctx_query`: *string* ; `event_ctx_title`: *string*  }\>

Defined in: [events.ts:70](https://github.com/elevio/kb-events/blob/3bb655a/src/events.ts#L70)

___

### searchQuery

▸ **searchQuery**(`data`: { `articleIds`: *string*[] ; `numberResults`: *number* ; `searchTerm`: *string*  }): *EventWithContext*<*search_query*, { `event_ctx_articleIds`: *string*[] ; `event_ctx_queryTerm`: *string* ; `event_ctx_totalResults`: *number*  }\>

Triggered when a search has been completed.

#### Parameters:

Name | Type |
:------ | :------ |
`data` | *object* |
`data.articleIds` | *string*[] |
`data.numberResults` | *number* |
`data.searchTerm` | *string* |

**Returns:** *EventWithContext*<*search_query*, { `event_ctx_articleIds`: *string*[] ; `event_ctx_queryTerm`: *string* ; `event_ctx_totalResults`: *number*  }\>

Defined in: [events.ts:49](https://github.com/elevio/kb-events/blob/3bb655a/src/events.ts#L49)
