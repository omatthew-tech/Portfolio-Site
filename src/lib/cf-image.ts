type CfImageOptions = {
  w?: number;
  h?: number;
  fit?: "scale-down" | "contain" | "cover" | "crop" | "pad";
  format?: "auto" | "avif" | "webp" | "json";
};

const placeholderMap: Record<string, string> = {
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
  "oneatatime-cover":
    "/images/cases/OneAtATime%20Dating/oneatatime-cover-v11.webp",
  "oneatatime-reddit-thread":
    "/images/cases/OneAtATime%20Dating/oneatatime-reddit-thread.webp",
  "oneatatime-reddit-archived-dating":
    "/images/cases/OneAtATime%20Dating/oneatatime-reddit-archived-dating.webp",
  "oneatatime-reddit-archived-introverts":
    "/images/cases/OneAtATime%20Dating/oneatatime-reddit-archived-introverts.webp",
  "oneatatime-survey-pie-charts":
    "/images/cases/OneAtATime%20Dating/oneatatime-survey-pie-charts.webp",
  "oneatatime-survey-responses":
    "/images/cases/OneAtATime%20Dating/oneatatime-survey-responses.webp",
  "oneatatime-formspree-signups":
    "/images/cases/OneAtATime%20Dating/oneatatime-formspree-signups.webp",
  "oneatatime-figma-prototypes":
    "/images/cases/OneAtATime%20Dating/oneatatime-figma-prototypes.webp",
  "oneatatime-timer-redesigns":
    "/images/cases/OneAtATime%20Dating/oneatatime-timer-redesigns.webp",
  "oneatatime-onboarding":
    "/images/cases/OneAtATime%20Dating/oneatatime-onboarding-framed.webp",
  "oneatatime-reveal-profile":
    "/images/cases/OneAtATime%20Dating/oneatatime-reveal-profile-framed.webp",
  "oneatatime-match-sent":
    "/images/cases/OneAtATime%20Dating/oneatatime-match-sent-framed.webp",
  "oneatatime-profile-message":
    "/images/cases/OneAtATime%20Dating/oneatatime-profile-message-framed.webp",
  "oneatatime-chat-timer":
    "/images/cases/OneAtATime%20Dating/oneatatime-chat-timer-framed.webp",
  "mattyophotos-cover":
    "/images/cases/MattyOphotos/cropped/mattyophotos-cover.jpg",
  "mattyophotos-01": "/images/cases/MattyOphotos/cropped/mattyophotos-01.jpg",
  "mattyophotos-02": "/images/cases/MattyOphotos/cropped/mattyophotos-02.jpg",
  "mattyophotos-03": "/images/cases/MattyOphotos/cropped/mattyophotos-03.jpg",
  "mattyophotos-04": "/images/cases/MattyOphotos/cropped/mattyophotos-04.jpg",
  "mattyophotos-05": "/images/cases/MattyOphotos/cropped/mattyophotos-05.jpg",
  "mattyophotos-06": "/images/cases/MattyOphotos/cropped/mattyophotos-06.jpg",
  "mattyophotos-07": "/images/cases/MattyOphotos/cropped/mattyophotos-07.jpg",
  "mattyophotos-08": "/images/cases/MattyOphotos/cropped/mattyophotos-08.jpg",
  "mattyophotos-09": "/images/cases/MattyOphotos/cropped/mattyophotos-09.jpg",
  "mattyophotos-10": "/images/cases/MattyOphotos/cropped/mattyophotos-10.jpg",
  "littlepickle-cover": "/images/cases/LittlePickle/littlepickle-cover.jpg",
  "littlepickle-home-screenshot-5":
    "/images/cases/LittlePickle/littlepickle-home-screenshot-5.webp",
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
