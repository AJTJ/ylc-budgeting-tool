import { css } from "emotion";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

export const TrailFontSizes = css(
  mq({ fontSize: ["14px", "14px", "12px", "16px"] })
);

export const TrailTextMq = css(
  mq({ display: ["none", "none", "inline-block"] })
);
