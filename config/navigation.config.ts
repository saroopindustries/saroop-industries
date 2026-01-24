export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const navigationConfig: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Products",
    href: "/products",
    children: [
      {
        title: "BRASS TERMINAL",
        href: "/products/brass-terminal",
        children: [
          { title: "RING SERIES TERMINALS", href: "/products/brass-terminal/ring-series" },
          { title: "FORK SERIES TERMINALS", href: "/products/brass-terminal/fork-series" },
          { title: "JOINTER SERIES TERMINALS", href: "/products/brass-terminal/jointer-series" },
          { title: "BULLET SERIES TERMINALS", href: "/products/brass-terminal/bullet-series" },
          { title: "FUSE SERIES TERMINALS", href: "/products/brass-terminal/fuse-series" },
          { title: "090 SERIES TERMINALS", href: "/products/brass-terminal/090-series" },
          { title: "0110 SERIES TERMINALS", href: "/products/brass-terminal/0110-series" },
          { title: "0187 SERIES TERMINALS", href: "/products/brass-terminal/0187-series" },
          { title: "0250 SERIES TERMINALS", href: "/products/brass-terminal/0250-series" },
          { title: "0312 SERIES TERMINALS", href: "/products/brass-terminal/0312-series" },
          { title: "0375 SERIES TERMINALS", href: "/products/brass-terminal/0375-series" },
          { title: "SPECIAL SERIES TERMINALS", href: "/products/brass-terminal/special-series" },
          { title: "BRASS LUGS", href: "/products/brass-terminal/lugs" },
          { title: "BRASS BATTERY TERMINAL", href: "/products/brass-terminal/battery-terminal" },
        ],
      },
      {
        title: "BATTERY CABLE SET",
        href: "/products/battery-cable-set",
        children: [
          { title: "BATTERY CABLE FITTING", href: "/products/battery-cable-set/fitting" },
          { title: "BATTERY JOINTER BOTH SIDE TERMINAL", href: "/products/battery-cable-set/jointer-both-side" },
          { title: "BATTERY TERMINAL JOINTER", href: "/products/battery-cable-set/terminal-jointer" },
          { title: "MARUTI CAR CABLE SET", href: "/products/battery-cable-set/maruti-car" },
          { title: "JUMPER CABLE SET", href: "/products/battery-cable-set/jumper" },
          { title: "FLAT EARTHING WIRE", href: "/products/battery-cable-set/flat-earthing" },
          { title: "CHARGING CLIP", href: "/products/battery-cable-set/charging-clip" },
        ],
      },
      {
        title: "WIRE",
        href: "/products/wire",
        children: [
          { title: "BATTERY CABLES", href: "/products/wire/battery-cables" },
          { title: "AUTO CABLES", href: "/products/wire/auto-cables" },
          { title: "HOUSEHOLD CABLES", href: "/products/wire/household-cables" },
        ],
      },
      {
        title: "SWITCHES",
        href: "/products/switches",
        children: [
          { title: "PUSH PULL", href: "/products/switches/push-pull" },
        ],
      },
      {
        title: "FLASHER",
        href: "/products/flasher",
        children: [
          { title: "ELECTRONIC FLASHER", href: "/products/flasher/electronic" },
          { title: "MUSICAL FLASHER", href: "/products/flasher/musical" },
        ],
      },
      {
        title: "RELAY",
        href: "/products/relay",
        children: [
          { title: "2 WHEELER RELAY", href: "/products/relay/2-wheeler" },
          { title: "4 WHEELER RELAY", href: "/products/relay/4-wheeler" },
          { title: "STARTING RELAY", href: "/products/relay/starting" },
          { title: "HEAD LIGHT RELAY", href: "/products/relay/head-light" },
        ],
      },
      {
        title: "TUNER",
        href: "/products/tuner",
        children: [
          { title: "4 WAY TUNER", href: "/products/tuner/4-way" },
          { title: "7 WAY TUNER", href: "/products/tuner/7-way" },
          { title: "8 WAY TUNER", href: "/products/tuner/8-way" },
        ],
      },
      {
        title: "FUSE",
        href: "/products/fuse",
        children: [
          { title: "STANDARD FUSE", href: "/products/fuse/standard" },
          { title: "MINI FUSE", href: "/products/fuse/mini" },
          { title: "SLOW BLOW FEMALE FUSE", href: "/products/fuse/slow-blow-female" },
          { title: "SLOW BLOW MALE FUSE", href: "/products/fuse/slow-blow-male" },
        ],
      },
      {
        title: "CAPS",
        href: "/products/caps",
        children: [
          { title: "TERMINAL CAP", href: "/products/caps/terminal" },
          { title: "BATTERY TERMINAL CAP", href: "/products/caps/battery-terminal" },
        ],
      },
      {
        title: "RUBBER GROMMET",
        href: "/products/rubber-grommet",
      },
      {
        title: "PLASTIC COMPONENT",
        href: "/products/plastic-component",
        children: [
          { title: "CORRUGATED PIPE", href: "/products/plastic-component/corrugated-pipe" },
          { title: "FLEXIBLE POLYAMIDE CONDUIT", href: "/products/plastic-component/polyamide-conduit" },
          { title: "METRIC GLAND WITH LOCK NUT", href: "/products/plastic-component/metric-gland" },
          { title: "PG GLAND WITH LOCK NUT", href: "/products/plastic-component/pg-gland" },
        ],
      },
      {
        title: "SLEEVE",
        href: "/products/sleeve",
        children: [
          { title: "HEAT SLEEVE", href: "/products/sleeve/heat" },
          { title: "SHINE SLEEVE", href: "/products/sleeve/shine" },
          { title: "DULL SLEEVE", href: "/products/sleeve/dull" },
        ],
      },
      {
        title: "TAPE",
        href: "/products/tape",
        children: [
          { title: "PVC TAPE", href: "/products/tape/pvc" },
          { title: "INSULATION TAPE", href: "/products/tape/insulation" },
          { title: "COTTON TAPE", href: "/products/tape/cotton" },
        ],
      },
      {
        title: "HOLDERS",
        href: "/products/holders",
        children: [
          { title: "090 SERIES SEALED & NON SEALED HOLDER", href: "/products/holders/090-sealed" },
          { title: "090 WATER PROOF SERIES HOLDER", href: "/products/holders/090-waterproof" },
          { title: "090 PBT SERIES HOLDER", href: "/products/holders/090-pbt" },
          { title: "0110 SERIES HOLDER", href: "/products/holders/0110" },
          { title: "0250 SERIES HOLDER", href: "/products/holders/0250" },
          { title: "SPECIAL HOLDER", href: "/products/holders/special" },
          { title: "JOINTER HOLDER", href: "/products/holders/jointer" },
        ],
      },
      {
        title: "CONNECTORS",
        href: "/products/connectors",
        children: [
          { title: "FLASHER & RELAY BASE CONNECTOR", href: "/products/connectors/flasher-relay-base" },
          { title: "HEAD LAMP CONNECTOR", href: "/products/connectors/head-lamp" },
          { title: "SENSOR CONNECTOR", href: "/products/connectors/sensor" },
          { title: "SUPER SEALED CONNECTOR", href: "/products/connectors/super-sealed" },
          { title: "SINGLE FUSE CONNECTOR", href: "/products/connectors/single-fuse" },
          { title: "COMBINATION CONNECTOR", href: "/products/connectors/combination" },
          { title: "ROUND CONNECTOR", href: "/products/connectors/round" },
          { title: "SPECIAL UNIVERSAL CONNECTORS", href: "/products/connectors/special-universal" },
          { title: "ECM CONNECTOR", href: "/products/connectors/ecm" },
          { title: "JCB CONNECTOR", href: "/products/connectors/jcb" },
        ],
      },
      {
        title: "FUSE BOX",
        href: "/products/fuse-box",
        children: [
          { title: "SQUARE FUSE BOX", href: "/products/fuse-box/square" },
          { title: "EICHER CANTER", href: "/products/fuse-box/eicher-canter" },
          { title: "ASHOK LEYLAND FUSE BOX", href: "/products/fuse-box/ashok-leyland" },
          { title: "MARUTI FUSE BOX CAR TYPE", href: "/products/fuse-box/maruti-car" },
          { title: "MARUTI FUSE BOX VAN TYPE", href: "/products/fuse-box/maruti-van" },
          { title: "GLASS FUSE BOX", href: "/products/fuse-box/glass" },
          { title: "JCB FUSE BOX", href: "/products/fuse-box/jcb" },
        ],
      },
      {
        title: "HEAD LIGHT RELAY WIRING",
        href: "/products/head-light-relay-wiring",
        children: [
          { title: "HEAD LIGHT WIRING WITHOUT RELAY", href: "/products/head-light-relay-wiring/without-relay" },
          { title: "HEAD LIGHT WIRING WITH RELAY", href: "/products/head-light-relay-wiring/with-relay" },
        ],
      },
    ],
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];