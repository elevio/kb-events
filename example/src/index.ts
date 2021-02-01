import { setup, track, events, sendNow } from '../../lib/index';
console.log('Hello from typescript!!!');

setup({
  companyUid: 'konami',
  // endpointURL: 'http://localhost:8000/events',
  endpointURL: 'https://events.elevio-staging.com/v1/events',
});

// Make sure we wait until the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM IS READY');

  track(
    events.pageViewArticle({
      articleId: 'art123',
      articleTitle: 'article title',
    }),
    {customAttributes: {correlationId: "1234"}}
  );

  document.getElementById('positive')!.onclick = () => {
    track(
      events.articleFeedbackReaction({
        isPositive: true,
        articleId: 'art_123',
        articleTitle: 'my title',
      }),
      {
        forceTimestamp: 1698510912962,
        customAttributes: {
          black: 'cat',
        },
      }
    );
  };

  document.getElementById('negative')!.onclick = () => {
    track(
      events.articleFeedbackReaction({
        isPositive: false,
        articleId: 'art_123',
        articleTitle: 'my title',
      })
    );
  };

  document.getElementById('sync')!.onclick = () => {
    sendNow([events.pageViewIndex()], {customAttributes: {correlationId: "1234"}})
      .then(() => {
        console.log('event confirmed sent');
      })
      .catch((e) => {
        console.log('issue sending event', e);
      });
  };
});
