import { match as reactRouterMatch } from 'react-router';

export function match(routes, location, store, history, cb) {
  reactRouterMatch({ history: history, routes, location }, cb);
}
