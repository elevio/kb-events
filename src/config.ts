/** @hidden */
type Config = {
  companyUid: string;
  isAnonMode: boolean;
  debugMode: boolean;
  endpointURL: string;
  eventType: string;
};

export interface User {
  id?: string;
  email: string;
}

/** @hidden */
let config: Config | undefined;
/** @hidden */
export let _languageId: string | null = null;
/** @hidden */
export let _user: User | null = null;

/** @hidden */
export function getConfig(): Config {
  if (!config) throw new Error('Please run setup before sending events.');
  return config;
}

export function setConfig(c: Config) {
  config = c;
}

export function setUser(user: User | null) {
  _user = user;
}

export function setLanguageId(languageId: string | null) {
  if (languageId) {
    _languageId = languageId.toLowerCase();
  } else {
    _languageId = null;
  }
}
