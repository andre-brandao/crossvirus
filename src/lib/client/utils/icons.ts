interface SVGoptions {
  width?: number
  height?: number
  fill?: string
  stroke?: string
  strokeWidth?: number
  strokeLinecap?: string
  strokeLinejoin?: string
}

const DEFAULT_SVG_OPTIONS: SVGoptions = {
  width: 24,
  height: 24,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function svgTemplate(inner: string, options: SVGoptions = DEFAULT_SVG_OPTIONS) {
  const {
    width = 24,
    height = 24,
    fill = 'none',
    stroke = 'currentColor',
    strokeWidth = 2,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
  } = options
  return ` <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 24 24"
      fill="${fill}"
      stroke="${stroke}"
      stroke-width="${strokeWidth}"
      stroke-linecap="${strokeLinecap}"
      stroke-linejoin="${strokeLinejoin}"
    >
      ${inner}
    </svg>`
}

export const icons = {
  bug: (cfg?: SVGoptions) =>
    svgTemplate(
      ` <path d="m8 2 1.88 1.88" />
        <path d="M14.12 3.88 16 2" />
        <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
        <path
          d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"
        />
        <path d="M12 20v-9" />
        <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
        <path d="M6 13H2" />
        <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
        <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
        <path d="M22 13h-4" />
        <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />`,
      cfg,
    ),
  x: (cfg?: SVGoptions) =>
    svgTemplate(
      ` 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      `,
      cfg,
    ),
  check: (cfg?: SVGoptions) =>
    svgTemplate(
      ` 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
      `,
      cfg,
    ),
  wpp: (cfg?: SVGoptions) =>
    svgTemplate(
      ` 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      `,
      cfg,
    ),
  linkedin: (cfg?: SVGoptions) =>
    svgTemplate(
      ` 
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
    </svg>
      `,
      cfg,
    ),
  arrowRight: (cfg?: SVGoptions) =>
    svgTemplate(
      ` 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
      `,
      cfg,
    ),
  camera: (cfg?: SVGoptions) =>
    svgTemplate(
      ` 
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
      `,
      cfg,
    ),
  pallete: (cfg?: SVGoptions) =>
    svgTemplate(
      `<circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
      />`,
      cfg,
    ),

  user: (cfg?: SVGoptions) =>
    svgTemplate(
      `<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`,
      cfg,
    ),

  logout: (cfg?: SVGoptions) =>
    svgTemplate(
      `<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />`,
      cfg,
    ),

  login: (cfg?: SVGoptions) =>
    svgTemplate(
      `<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />`,
      cfg,
    ),

  cart: (cfg?: SVGoptions) =>
    svgTemplate(
      `<circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path
            d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
        />`,
      cfg,
    ),

  home: (cfg?: SVGoptions) =>
    svgTemplate(
      ` <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path
            d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        />`,
      cfg,
    ),

  box: (cfg?: SVGoptions) =>
    svgTemplate(
      `      <path d="m7.5 4.27 9 5.15" />
      <path
        d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
      />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />`,
      cfg,
    ),

  table: (cfg?: SVGoptions) =>
    svgTemplate(
      `<path d="M12 3v18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />`,
      cfg,
    ),

  search: (cfg?: SVGoptions) =>
    svgTemplate(
      `<circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />`,
      cfg,
    ),

  chart: {
    bar: (cfg?: SVGoptions) =>
      svgTemplate(
        `<path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />`,
        cfg,
      ),
    line: (cfg?: SVGoptions) =>
      svgTemplate(`<path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />`, cfg),
  },

  warning: (cfg?: SVGoptions) =>
    svgTemplate(
      `<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>
      <path d="M12 9v4" />
      <path d="M12 17h.01" />`,
      cfg,
    ),
  trash: (cfg?: SVGoptions) =>
    svgTemplate(
      `
      <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        <line x1="10" x2="10" y1="11" y2="17" />
        <line x1="14" x2="14" y1="11" y2="17" />`,
      cfg,
    ),

  flags: {
    getEmojiFlag: (lang: string) => {
      switch (lang) {
        case 'en':
          return '🇺🇸'
        case 'pt':
          return '🇧🇷'
        case 'zh':
          return '🇨🇳'
        case 'es':
          return '🇪🇸'
        case 'fr':
          return '🇫🇷'
        case 'de':
          return '🇩🇪'
        case 'ja':
          return '🇯🇵'
        case 'ko':
          return '🇰🇷'
        case 'ru':
          return '🇷🇺'
        default:
          return '🌐'
      }
    },
  },

  arrows: {
    left_line: (cfg?: SVGoptions) =>
      svgTemplate(
        ` <path d="m9 6-6 6 6 6" />
  <path d="M3 12h14" />
  <path d="M21 19V5" />`,
        cfg,
      ),
  },

  edit: (cfg?: SVGoptions) => 
    svgTemplate(
      `<?xml version="1.0" ?><svg class="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`
      , cfg
    ),
  
  location: (cfg?: SVGoptions) => 
    svgTemplate(
      `<?xml version="1.0" ?><svg class="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
      cfg
    ),
}
