import { createEvent, EventsUnion } from './types';

/**
 * Triggered when the the home page is viewed in the knowledge base.
 */
export function pageViewIndex() {
  return createEvent('page_view_index');
}

/**
 * Triggered when an article page is viewed in the knowledge base.
 *
 * @param articleId id of the article being viewed.
 * @param articleTitle title of the article being viewed.
 */
export function pageViewArticle(articleId: string, articleTitle: string) {
  return createEvent('page_view_article', {
    event_ctx_id: articleId,
    event_ctx_title: articleTitle,
  });
}

/**
 * Triggered when a category page is viewed in the knowledge base.
 *
 * @param categoryId id of the category being viewed.
 * @param categoryTitle title of the category being viewed.
 */
export function pageViewCategory(categoryId: string, categoryTitle: string) {
  return createEvent('page_view_category', {
    event_ctx_categoryId: categoryId,
    event_ctx_title: categoryTitle,
  });
}

/**
 * Triggered when a search has been completed.
 *
 * @param searchTerm the 'term' that has been searched for. NOTE: only the first 255 characters will be submitted.
 * @param numberResults the number of results returned.
 */
export function searchQuery(searchTerm: string, numberResults: number) {
  const filteredTerm = searchTerm.substring(0, 255);
  return createEvent('search_query', {
    event_ctx_queryTerm: filteredTerm,
    event_ctx_totalResults: numberResults,
  });
}

/**
 * Triggered when a user clicks on a search result.
 *
 * @param searchTerm the 'term' that has been searched for.
 * @param resultIndex the index of the search result that has been clicked on.
 * @param articleId the id of the article relating to the search result.
 * @param articleTitle the title of the article relating to the search result.
 */
export function searchClick(
  searchTerm: string,
  resultIndex: number,
  articleId: string,
  articleTitle: string
) {
  const filteredTerm = searchTerm.substring(0, 255);
  return createEvent('search_click', {
    event_ctx_query: filteredTerm,
    event_ctx_id: articleId,
    event_ctx_index: resultIndex,
    event_ctx_title: articleTitle,
  });
}

/**
 * Triggered when article feedback reaction is submited.
 *
 * @param isPositive use true if feedback is positive, or false if the feedback is negative.
 * @param articleId the id of the article relating to the feedback.
 * @param articleTitle the title of the article relating to the feedback.
 */
export function articleFeedbackReaction(
  isPositive: boolean,
  articleId: string,
  articleTitle: string
) {
  return createEvent('article_feedback_reaction', {
    event_ctx_id: articleId,
    event_ctx_reaction: isPositive ? 1 : 0, // 1 is positive, 0 is negative.
    event_ctx_title: articleTitle,
  });
}

export type Events = EventsUnion<
  | typeof pageViewIndex
  | typeof pageViewArticle
  | typeof pageViewCategory
  | typeof searchQuery
  | typeof searchClick
  | typeof articleFeedbackReaction
>;
