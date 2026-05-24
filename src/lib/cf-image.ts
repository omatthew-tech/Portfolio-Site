type CfImageOptions = {
  w?: number;
  h?: number;
  fit?: "scale-down" | "contain" | "cover" | "crop" | "pad";
  format?: "auto" | "avif" | "webp" | "json";
};

const placeholderMap: Record<string, string> = {
  "discovery-map": "/images/placeholders/discovery-map.svg",
  "checkout-flow": "/images/placeholders/checkout-flow.svg",
  "insights-dashboard": "/images/placeholders/insights-dashboard.svg",
  "example-case": "/images/placeholders/discovery-map.svg",
  "test4test-cover": "/images/cases/test4test/test4test-cover.webp",
  "test4test-homepage": "/images/cases/test4test/Test4Test Homepage.png",
  "test4test-story-oneatatime":
    "/images/cases/test4test/test4test-story-oneatatime.jpg",
  "test4test-story-research-tools":
    "/images/cases/test4test/test4test-story-research-tools.jpg",
  "test4test-story-competitive-plans":
    "/images/cases/test4test/test4test-story-competitive-plans.jpg",
  "test4test-feedback-before":
    "/images/cases/test4test/test4test-feedback-before.webp",
  "test4test-feedback-after":
    "/images/cases/test4test/test4test-feedback-after.webp",
  "test4test-test-back-satisfaction-rate":
    "/images/cases/test4test/test4test-test-back-satisfaction-rate.webp",
  "test4test-preferences-popup":
    "/images/cases/test4test/test4test-preferences-popup.webp",
  "test4test-revise-feedback":
    "/images/cases/test4test/test4test-revise-feedback.webp",
  "test4test-feedback-ratings":
    "/images/cases/test4test/test4test-feedback-ratings.webp",
  "test4test-android-fourteen-day":
    "/images/cases/test4test/test4test-android-fourteen-day.webp",
  "test4test-earn-page-priority":
    "/images/cases/test4test/test4test-earn-page-priority.webp",
  "test4test-edit-app-popup":
    "/images/cases/test4test/test4test-edit-app-popup.webp",
  "test4test-share-test-email":
    "/images/cases/test4test/test4test-share-test-email.webp",
  "test4test-resume-test-button":
    "/images/cases/test4test/test4test-resume-test-button.webp",
  "test4test-answer-saved-toast":
    "/images/cases/test4test/test4test-answer-saved-toast.webp",
};

export function cfImage(id: string, options: CfImageOptions = {}) {
  const accountHash = import.meta.env.PUBLIC_CF_IMAGES_HASH;

  if (!accountHash) {
    return placeholderMap[id] ?? "/images/placeholders/discovery-map.svg";
  }

  const directives = [
    options.w ? `width=${options.w}` : null,
    options.h ? `height=${options.h}` : null,
    options.fit ? `fit=${options.fit}` : null,
    options.format ? `format=${options.format}` : "format=auto",
  ].filter(Boolean);

  return `https://imagedelivery.net/${accountHash}/${id}/${directives.join(",")}`;
}
