import "server-only";

const dictionaries = {
  en:  import('./en.json').then((m)=>m.default),
  es:  import('./es.json').then((m)=>m.default),
  br: import('./br.json').then((m)=>m.default),
  pt: import('./pt.json').then((m)=>m.default),
  fr: import('./fr.json').then((m)=>m.default),
  de: import('./de.json').then((m)=>m.default),
  it: import('./it.json').then((m)=>m.default)
};

export const getDictionary = async (locale: 'en' | 'es' | 'br' | 'pt' | 'fr' | 'de' | 'it') => {
  return dictionaries[locale];
};
