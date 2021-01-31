import { setup } from './index';
import {
  pageViewIndex,
  pageViewArticle,
  pageViewCategory,
  searchQuery,
  searchClick,
  articleFeedbackReaction,
} from './events';

describe('events', () => {
  beforeEach(() => {
    setup({
      companyUid: 'company_123',
    });
  });

  it('pageViewIndex', () => {
    const e = pageViewIndex();
    expect(e).toMatchObject({
      event_name: 'page_view_index',
    });
  });

  it('pageViewArticle', () => {
    const e = pageViewArticle({
      articleId: 'article123',
      articleTitle: 'article title',
    });
    expect(e).toMatchObject({
      event_name: 'page_view_article',
      event_ctx_id: 'article123',
      event_ctx_title: 'article title',
    });
  });

  it('pageViewCategory', () => {
    const e = pageViewCategory({
      categoryId: 'category123',
      categoryTitle: 'category title',
    });
    expect(e).toMatchObject({
      event_name: 'page_view_category',
      event_ctx_categoryId: 'category123',
      event_ctx_title: 'category title',
    });
  });

  it('searchQuery', () => {
    const e = searchQuery({
      searchTerm: 'my search term',
      numberResults: 4,
      articleIds: ['art123'],
    });

    expect(e).toMatchObject({
      event_name: 'search_query',
      event_ctx_queryTerm: 'my search term',
      event_ctx_totalResults: 4,
      event_ctx_articleIds: ['art123'],
    });
  });

  it('searchClick', () => {
    const e = searchClick({
      searchTerm: 'my search term',
      resultIndex: 2,
      articleId: 'article123',
      articleTitle: 'my article title',
    });

    expect(e).toMatchObject({
      event_name: 'search_click',
      event_ctx_id: 'article123',
      event_ctx_index: 2,
      event_ctx_title: 'my article title',
    });
  });

  it('articleFeedbackReaction', () => {
    const e = articleFeedbackReaction({
      isPositive: true,
      articleId: 'art456',
      articleTitle: 'my article title',
    });
    expect(e).toMatchObject({
      event_name: 'article_feedback_reaction',
      event_ctx_id: 'art456',
      event_ctx_title: 'my article title',
      event_ctx_reaction: 1,
    });
  });

  it('Addes customAttributes', () => {
    const e = articleFeedbackReaction(
      {
        isPositive: true,
        articleId: 'art456',
        articleTitle: 'my article title',
      },
      { myCustomThing: 'elmo' }
    );
    expect(e).toMatchObject({
      custom_attributes: {
        myCustomThing: 'elmo',
      },
    });
  });
});
