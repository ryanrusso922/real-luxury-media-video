export const siteMeta = {
  title: 'Real Luxury Media — Authority Day',
  description:
    'One day in Sarasota to make a real offline reputation visible online.',
  url: 'https://realluxurymedia.com',
};

export const navItems = [
  { label: 'Who It’s For', href: '#fit' },
  { label: 'Outcomes', href: '#what' },
  { label: 'The Work', href: '#video' },
  { label: 'Case Study', href: '#case' },
];

export const logos = [
  'pettingell',
  'kokomo',
  'voigt',
  'northstar',
  'thepad',
  'allstar',
  'miramar',
  'kelly',
  'seaward',
  'summercove',
  'svmd',
  'vertical',
  'wickedsmart',
  'preferred',
  'ebg',
  'remax',
];

export const applyTrustLine = 'By application only.';

export const footerPositioning = 'Sarasota';

export const navCta = {
  label: 'Apply for Authority Day',
  href: '#apply',
};

export type StoryVideo = {
  eyebrow: string;
  title: string;
  description: string;
  ariaLabel: string;
  variant: string;
  orientation: 'portrait' | 'landscape';
  videoSrcMP4: string;
  videoSrcWEBM: string;
  poster: string;
  href: string;
  startLabel: string;
};

export type HeroContent = {
  eyebrow: string;
  titleLines: string[];
  body: string;
  proof: string;
  primaryCta: string;
  secondaryCta: string;
  scrollPrompt: string;
  applyHref: string;
  videoHref: string;
  image: string;
  imageAlt: string;
};

export type ProofStat = { value: string; label: string };

export type ProofBandContent = {
  eyebrow: string;
  caption: string;
};

export type Deliverable = {
  kicker: string;
  title: string;
  text: string;
  featured?: boolean;
};

export type DeliverablesSection = {
  eyebrow: string;
  titleLines: string[];
  subhead: string;
  callout: string;
};

export type StoryContent = {
  eyebrow: string;
  titleLines: string[];
  intro: string;
  body: string;
  resultsIntro: string;
  results: string[];
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
  closing: string;
};

export type WorkStrip = {
  eyebrow: string;
  title: string;
  intro: string;
  thirdFrame: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

export type AudienceFit = {
  eyebrow: string;
  title: string;
  forList: string[];
  notForList: string[];
};

export type ProcessStep = {
  step: string;
  title: string;
  text: string;
  note: string;
};

export type ProcessSectionContent = {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
};

export type NextStep = {
  step: string;
  title: string;
  text: string;
};

export type ApplySectionContent = {
  eyebrow: string;
  title: string;
  primaryCta: string;
  primaryHref: string;
  trustLine: string;
  steps: NextStep[];
};

export type VslContent = {
  eyebrow: string;
  title?: string;
  subhead?: string;
  posterEyebrow: string;
  posterTitle: string;
  caption: string;
  ariaLabel: string;
  poster: string;
  videoSrcMP4: string;
  videoSrcWEBM: string;
};

export type AuthorityChannel = {
  kind: 'site' | 'youtube' | 'instagram';
  label: string;
  anchor: string;
  anchorMono?: boolean;
  primary: string;
  primaryNote: string;
  supporting?: string;
  href: string;
  cta: string;
  screenshot?: string;
};

export type AuthorityCardContent = {
  eyebrow: string;
  title: string;
  intro?: string;
  channels: AuthorityChannel[];
};

export type PageContent = {
  hero: HeroContent;
  vsl: VslContent | null;
  proofBand: ProofBandContent;
  proofStats: ProofStat[];
  audienceFit: AudienceFit;
  deliverablesSection: DeliverablesSection;
  deliverables: Deliverable[];
  storyVideos: StoryVideo[];
  workStrip: WorkStrip;
  authorityCard: AuthorityCardContent | null;
  story: StoryContent;
  process: ProcessSectionContent;
  applySection: ApplySectionContent;
};

const sharedStoryVideos: StoryVideo[] = [
  {
    eyebrow: 'Signature Film',
    title: 'Signature Film',
    description: 'The link he sends before any serious meeting.',
    ariaLabel: 'Watch the signature film',
    variant: 'waterfront',
    orientation: 'portrait',
    videoSrcMP4: '/videos/roger-story.mp4',
    videoSrcWEBM: '/videos/roger-story.webm',
    poster: '/assets/roger-story-poster.jpg',
    href: 'https://www.youtube.com/watch?v=wUemfee95qI&t=22s',
    startLabel: '',
  },
  {
    eyebrow: 'Pre-Call Film',
    title: 'Pre-Call Film',
    description: 'What every serious prospect sees before the call.',
    ariaLabel: 'Watch the pre-call film',
    variant: 'interior',
    orientation: 'landscape',
    videoSrcMP4: '/videos/sales-preframe.mp4',
    videoSrcWEBM: '/videos/sales-preframe.webm',
    poster: '/assets/sales-preframe-poster.jpg',
    href: 'https://www.youtube.com/watch?v=pFVIjV0LZOI&t=38s',
    startLabel: '',
  },
];

const sharedStory: StoryContent = {
  eyebrow: 'Case Study',
  titleLines: ['Roger Pettingell.'],
  intro: 'Big offline. Invisible online. We fixed that.',
  body: '38 years offline. $3B in sales. Online, almost invisible. One Authority Day. Eighteen months later, his reputation works online the way it always worked in the room.',
  resultsIntro: '',
  results: [
    'His name finally showed up online.',
    'The film became the link before every serious meeting.',
    'The content kept working long after the day.',
  ],
  quote:
    'Jake took everything I built offline and made it visible online. Now it works for me 24/7.',
  quoteAuthor: 'Roger Pettingell',
  quoteRole: 'CEO, Pettingell Group',
  closing: '',
};

const sharedProofStats: ProofStat[] = [
  { value: '30M+', label: 'Views' },
  { value: '118K', label: 'Subs' },
  { value: '$10M', label: 'Pipeline' },
];

export const authorityDayContent: PageContent = {
  hero: {
    eyebrow: 'Authority Day · Sarasota, FL',
    titleLines: ['Big offline.', 'Invisible online.'],
    body: 'We fix that in one day.',
    proof: '',
    primaryCta: 'Apply for Authority Day',
    secondaryCta: 'Watch the film',
    scrollPrompt: 'Tired of being invisible online?',
    applyHref: '#apply',
    videoHref: '#video',
    image: '/assets/roger-hero.png',
    imageAlt: 'Authority Day in Sarasota',
  },
  vsl: null,
  proofBand: {
    eyebrow: 'One client. Eighteen months.',
    caption: 'A reputation that finally works online the way it works in the room.',
  },
  proofStats: sharedProofStats,
  audienceFit: {
    eyebrow: 'Who it’s for',
    title: 'Built for one kind of operator.',
    forList: [
      'Established operators with real revenue and repeat business',
      'Known in the room, invisible online',
      'Ready to invest once to have their reputation working 24/7',
    ],
    notForList: [
      'First-timers still figuring out their offer',
      'People chasing followers instead of clients',
      'Anyone looking for “a few videos” or social media management',
    ],
  },
  deliverablesSection: {
    eyebrow: 'What it becomes',
    titleLines: ['One day.', 'Everything you need online.'],
    subhead: 'Built once. Working for years.',
    callout: 'One day of work. Years of trust, on autopilot.',
  },
  deliverables: [
    {
      kicker: '01',
      title: 'Signature Film',
      text: 'The video you send before any serious meeting. Prospects walk in already knowing who you are, what you do, and why you’re the obvious choice.',
    },
    {
      kicker: '02',
      title: 'Process Film',
      text: 'The video that shows how you actually work. Pre-sells the call before it starts, so the right buyers arrive ready to move.',
    },
    {
      kicker: '03',
      title: 'Content Library',
      text: 'A full day of footage, yours forever. Cut new clips whenever you want. Your reputation keeps showing up online for years — without ever filming again.',
    },
    {
      kicker: '04',
      title: 'Homepage',
      text: 'The one place online where everything lives. The first impression that finally matches the reputation you’ve already built.',
    },
    {
      kicker: '05',
      title: 'Deployment Plan',
      text: 'A simple plan for what posts where, and when. So nothing gets dropped and your reputation stays in front of buyers long after the day wraps.',
      featured: true,
    },
  ],
  storyVideos: sharedStoryVideos,
  workStrip: {
    eyebrow: 'See the work',
    title: 'This is what being seen looks like.',
    intro: 'Watch the films that turned Roger from invisible to inevitable in eighteen months.',
    thirdFrame: {
      eyebrow: 'Reel 03',
      title: '90-Day Library',
      description:
        'Twenty-plus short clips, cut from the same day, ready to run for ninety days.',
    },
  },
  authorityCard: null,
  story: sharedStory,
  process: {
    eyebrow: 'Process',
    title: 'How one Authority Day actually runs.',
    steps: [
      {
        step: '01',
        title: 'Pre-work',
        text: 'A 45-minute call. We map the story, the locations, and the shot list.',
        note: '',
      },
      {
        step: '02',
        title: 'The Day',
        text: 'One day in Sarasota. We direct. You speak. We capture everything.',
        note: '',
      },
      {
        step: '03',
        title: 'Delivery',
        text: 'Three to four weeks later. Films, clips, homepage, and plan — all installed.',
        note: '',
      },
    ],
  },
  applySection: {
    eyebrow: 'Begin',
    title: 'Stop being invisible online.',
    primaryCta: 'Apply for Authority Day',
    primaryHref: '#apply',
    trustLine: applyTrustLine,
    steps: [
      { step: '1', title: 'Apply', text: 'A short form.' },
      { step: '2', title: 'Call', text: 'Fifteen minutes. If it’s not a fit, we’ll say so.' },
      { step: '3', title: 'Book', text: 'Reserve your date.' },
    ],
  },
};
