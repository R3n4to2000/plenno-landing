import { DEMO_REQUEST_PATH, getTrackingParamsFromSearch, trackingParamNames } from './demoLead';

export function buildDemoRequestPath(search = window.location.search): string {
  const tracking = getTrackingParamsFromSearch(search);
  const params = new URLSearchParams();

  for (const paramName of trackingParamNames) {
    if (tracking[paramName]) {
      params.set(paramName, tracking[paramName]);
    }
  }

  const query = params.toString();
  return query ? `${DEMO_REQUEST_PATH}?${query}` : DEMO_REQUEST_PATH;
}
