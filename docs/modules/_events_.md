[@elevio/kb-events](../README.md) › [Globals](../globals.md) › ["events"](_events_.md)

# External module: "events"

## Index

### Type aliases

* [Events](_events_.md#events)

### Functions

* [articleFeedbackReaction](_events_.md#articlefeedbackreaction)
* [pageViewArticle](_events_.md#pageviewarticle)
* [pageViewCategory](_events_.md#pageviewcategory)
* [pageViewIndex](_events_.md#pageviewindex)
* [searchClick](_events_.md#searchclick)
* [searchQuery](_events_.md#searchquery)

## Type aliases

###  Events

Ƭ **Events**: *[EventsUnion](_types_.md#eventsunion)‹typeof pageViewIndex | typeof pageViewArticle | typeof pageViewCategory | typeof searchQuery | typeof searchClick | typeof articleFeedbackReaction›*

*Defined in [events.ts:98](https://github.com/elevio/kb-events/blob/9fb318c/src/events.ts#L98)*

## Functions

###  articleFeedbackReaction

▸ **articleFeedbackReaction**(`isPositive`: boolean, `articleId`: string, `articleTitle`: string): *object & [BaseEvent](../interfaces/_types_.baseevent.md) & object*

*Defined in [events.ts:86](https://github.com/elevio/kb-events/blob/9fb318c/src/events.ts#L86)*

Triggered when article feedback reaction is submited.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isPositive` | boolean | use true if feedback is positive, or false if the feedback is negative. |
`articleId` | string | the id of the article relating to the feedback. |
`articleTitle` | string | the title of the article relating to the feedback.  |

**Returns:** *object & [BaseEvent](../interfaces/_types_.baseevent.md) & object*

___

###  pageViewArticle

▸ **pageViewArticle**(`articleId`: string, `articleTitle`: string): *object & [BaseEvent](../interfaces/_types_.baseevent.md) & object*

*Defined in [events.ts:16](https://github.com/elevio/kb-events/blob/9fb318c/src/events.ts#L16)*

Triggered when an article page is viewed in the knowledge base.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`articleId` | string | id of the article being viewed. |
`articleTitle` | string | title of the article being viewed.  |

**Returns:** *object & [BaseEvent](../interfaces/_types_.baseevent.md) & object*

___

###  pageViewCategory

▸ **pageViewCategory**(`categoryId`: string, `categoryTitle`: string): *object & [BaseEvent](../interfaces/_types_.baseevent.md) & object*

*Defined in [events.ts:29](https://github.com/elevio/kb-events/blob/9fb318c/src/events.ts#L29)*

Triggered when a category page is viewed in the knowledge base.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`categoryId` | string | id of the category being viewed. |
`categoryTitle` | string | title of the category being viewed.  |

**Returns:** *object & [BaseEvent](../interfaces/_types_.baseevent.md) & object*

___

###  pageViewIndex

▸ **pageViewIndex**(): *object & [BaseEvent](../interfaces/_types_.baseevent.md)*

*Defined in [events.ts:6](https://github.com/elevio/kb-events/blob/9fb318c/src/events.ts#L6)*

Triggered when the the home page is viewed in the knowledge base.

**Returns:** *object & [BaseEvent](../interfaces/_types_.baseevent.md)*

___

###  searchClick

▸ **searchClick**(`searchTerm`: string, `resultIndex`: number, `articleId`: string, `articleTitle`: string): *object & [BaseEvent](../interfaces/_types_.baseevent.md) & object*

*Defined in [events.ts:64](https://github.com/elevio/kb-events/blob/9fb318c/src/events.ts#L64)*

Triggered when a user clicks on a search result.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchTerm` | string | the 'term' that has been searched for. |
`resultIndex` | number | the index of the search result that has been clicked on. |
`articleId` | string | the id of the article relating to the search result. |
`articleTitle` | string | the title of the article relating to the search result.  |

**Returns:** *object & [BaseEvent](../interfaces/_types_.baseevent.md) & object*

___

###  searchQuery

▸ **searchQuery**(`searchTerm`: string, `numberResults`: number, `articleIds`: Array‹string›): *object & [BaseEvent](../interfaces/_types_.baseevent.md) & object*

*Defined in [events.ts:43](https://github.com/elevio/kb-events/blob/9fb318c/src/events.ts#L43)*

Triggered when a search has been completed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchTerm` | string | the 'term' that has been searched for. NOTE: only the first 255 characters will be submitted. |
`numberResults` | number | the number of results returned. |
`articleIds` | Array‹string› | the array of articles returned by the search query.  |

**Returns:** *object & [BaseEvent](../interfaces/_types_.baseevent.md) & object*
