export const HOW_IT_WORKS_PATH = '/como-funciona';

export function getDemoVideoUrl(): string {
  return (import.meta.env.VITE_PLENNO_DEMO_VIDEO_URL ?? '').trim();
}

export function getHowItWorksHref(): string {
  return getDemoVideoUrl() || HOW_IT_WORKS_PATH;
}

export function shouldOpenHowItWorksInNewTab(): boolean {
  return Boolean(getDemoVideoUrl());
}
