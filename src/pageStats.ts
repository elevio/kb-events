import { getConfig, _user } from './index';
import { memoize } from './utils';

const language: string =
  // @ts-ignore userLanguage is just for IE11
  window.navigator.userLanguage || window.navigator.language;

const referrer = memoize(() => {
  let referrerStr = '';
  try {
    referrerStr = window.top.document.referrer;
  } catch (e) {
    if (window.parent) {
      try {
        referrerStr = window.parent.document.referrer;
      } catch (e1) {
        referrerStr = '';
      }
    }
  }
  if (referrerStr === '') {
    referrerStr = window.document.referrer;
  }
  return referrerStr;
});

const isIframe = memoize(() => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
});

const timezoneOffset = new Date().getTimezoneOffset();

const timezoneString = String(String(new Date()).split('(')[1]).split(')')[0];

// This fills out the 'page' section of an event
export function getAll() {
  const docHeight = Math.max(
    document.documentElement.clientHeight,
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight
  );

  const docWidth = Math.max(
    window.document.documentElement.clientWidth,
    window.document.documentElement.offsetWidth,
    window.document.documentElement.scrollWidth
  );

  return {
    user_uid: _user ? _user.id : undefined,
    user_email: _user ? _user.email : undefined,
    timestamp_created: Date.now(),
    customer_uid: getConfig().companyUid,

    page_document_size_height: docHeight,
    page_document_size_width: docWidth,
    page_page_offset_left: Math.max(
      window.pageXOffset || document.body.scrollLeft || 0
    ),
    page_page_offset_top: Math.max(
      window.pageYOffset || document.body.scrollTop || 0
    ),
    page_is_iframe: isIframe(),
    page_title: window.document.title,
    page_url: getConfig().isAnonMode ? undefined : window.location.href,
    page_viewport_height: window.innerHeight,
    page_viewport_width: window.innerWidth,
    page_language: language,
    page_referrer: getConfig().isAnonMode ? undefined : referrer(),
    page_timezone_offset: timezoneOffset,
    page_timezone_string: timezoneString,
  };
}
