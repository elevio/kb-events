import { setup, track, events, sendNow } from '../../lib/index';
console.log('Hello from typescript!!!');

setup({
  companyUid: 'konami',
  // endpointURL: 'http://localhost:8000/events',
  endpointURL: 'https://events.elevio-staging.com/v1/events',
});

// Make sure we wait until the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM IS READY');

  track(events.pageViewArticle('art123', 'article title'));

  document.getElementById('positive')!.onclick = () => {
    track(
      events.articleFeedbackReaction(true, 'art_123', 'my title')
      // {
      //   force_timestamp: 1698510912962,
      // }
    );
  };

  document.getElementById('negative')!.onclick = () => {
    track(events.articleFeedbackReaction(false, 'art_123', 'my title'));
  };

  document.getElementById('sync')!.onclick = () => {
    sendNow([events.pageViewIndex()])
      .then(() => {
        console.log('event confirmed sent');
      })
      .catch(e => {
        console.log('issue sending event', e);
      });
  };
});
