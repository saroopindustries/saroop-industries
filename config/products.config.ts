// ============================================
// PRODUCT CONFIGURATION
// Centralized product catalog with modular category imports
// ============================================

// Import types
export type {
  Product,
  ProductVariant,
  ProductCategory,
  ProductSubcategory,
} from './products/types';

// Import products by category
import { wireProducts } from './products/categories/wire-cables';
import { brassTerminalProducts } from './products/categories/brass-terminals';
import { 
  switchProducts,
  flasherProducts,
  relayProducts,
  tunerProducts,
} from './products/categories/electrical-components';
import { fuseBoxProducts } from './products/categories/fuse-boxes';
import { 
  holderProducts,
  connectorProducts,
  jointerHolderProducts,
} from './products/categories/holders-connectors';
import {
  insulationTapeProducts,
  batteryCableSetProducts,
  jumperCableProducts,
  earthingWireProducts,
  chargingClipProducts,
} from './products/categories/battery-accessories';
import {
  standardFuseProducts,
  miniFuseProducts,
  slowBlowFemaleFuseProducts,
  glassFuseProducts,
  slowBlowMaleFuseProducts,
  midiFuseProducts,
  megaFuseProducts,
  anlFuseProducts,
  boltDownFuseProducts,
  maxiFuseProducts,
} from './products/categories/fuses';
import {
  terminalCapProducts,
  terminal0250CapProducts,
  terminal0312CapProducts,
  terminal0110_0187CapProducts,
  vehicleSpecificCapProducts,
  twoWheelerHousingCapProducts,
  multiWheelerCapProducts,
} from './products/categories/terminal-caps-plastic';
import {
  rubberGrommetProducts,
  wireSealProducts,
  corrugatedPipeProducts,
  flexibleConduitProducts,
  pgGlandProducts,
  metricGlandProducts,
} from './products/categories/cable-management';
import {
  heatShrinkSleeveProducts,
  busbarSleeveProducts,
  pvcSleeveProducts,
  pvcCottonTapeProducts,
} from './products/categories/heat-shrink-sleeves';
import {
  holder0250SeriesProducts,
  holder090SeriesProducts,
  holder090Sealed_0110SeriesProducts,
  holder0110SpecialShutterProducts,
  holder090PBTSeriesProducts,
  holder090WaterProofProducts,
} from './products/categories/universal-holders';
import {
  squareFuseBoxProducts,
  marutiFuseBoxCarProducts,
  marutiFuseBoxVanProducts,
  glassFuseBoxProducts,
  universalFuseBoxProducts,
} from './products/categories/fuse-boxes-complete';
import {
  jcbConnectorProducts,
  jcbConnectorAlternativeProducts,
  jcbHighPoleConnectorProducts,
  jcbFuseBoxProducts,
} from './products/categories/jcb-connectors';
import {
  headlightWiringWithoutRelayProducts,
  headlightWiringWithRelayProducts,
} from './products/categories/headlight-wiring';
import {
  specialConnector1PoleProducts,
  specialConnector2PoleUniversalProducts,
  specialConnector2PoleSensorProducts,
} from './products/categories/special-universal-connectors-1-2pole';
import {
  specialConnector2PoleExtendedProducts,
  specialConnector2PoleFinalProducts,
} from './products/categories/special-universal-connectors-2pole-extended';
import {
  specialConnector3PoleProducts,
  specialConnector4PoleProducts,
} from './products/categories/special-universal-connectors-3-4pole';
import {
  specialConnector5PoleProducts,
  specialConnector6PoleProducts,
} from './products/categories/special-universal-connectors-5-6pole';
import {
  specialConnectorHighPoleSmallProducts,
  specialConnector12_13PoleProducts,
  specialConnector15_16PoleProducts,
  specialConnector18_20PoleProducts,
  specialConnector22_26PoleProducts,
  specialConnector30_34PoleProducts,
} from './products/categories/special-universal-connectors-high-pole';
import {
  ecmConnectorProducts,
} from './products/categories/ecm-connectors';
import {
  jointerHolderSpecialProducts,
  relay4PinProducts,
  relay5PinProducts,
  relay24VProducts,
} from './products/categories/jointer-holders-relay';
import {
  flasherRelayBase3_4PoleProducts,
  flasherRelayBase5PoleProducts,
} from './products/categories/flasher-relay-base-connectors';
import {
  headLampSensorHolderProducts,
  jptSensorProducts,
  superSealedConnectorProducts,
  sensorConnectorProducts,
  singleFuseConnectorProducts,
  combinationFuseSetProducts,
} from './products/categories/sensor-lamp-holders';
import {
  roundConnectorProducts,
} from './products/categories/round-connectors';
import {
  specialHolderNewModelProducts,
  relayBaseHeadLampAdditionalProducts,
} from './products/categories/special-holders-relay-combinations';

import type { Product, ProductCategory } from './products/types';

// ============================================
// ALL PRODUCTS AGGREGATION
// ============================================
export const allProducts: Product[] = [
  ...wireProducts,
  ...brassTerminalProducts,
  ...switchProducts,
  ...flasherProducts,
  ...relayProducts,
  ...tunerProducts,
  ...fuseBoxProducts,
  ...holderProducts,
  ...connectorProducts,
  ...jointerHolderProducts,
  ...insulationTapeProducts,
  ...batteryCableSetProducts,
  ...jumperCableProducts,
  ...earthingWireProducts,
  ...chargingClipProducts,
  // Fuses
  ...standardFuseProducts,
  ...miniFuseProducts,
  ...slowBlowFemaleFuseProducts,
  ...glassFuseProducts,
  ...slowBlowMaleFuseProducts,
  ...midiFuseProducts,
  ...megaFuseProducts,
  ...anlFuseProducts,
  ...boltDownFuseProducts,
  ...maxiFuseProducts,
  // Terminal Caps & Plastic Components
  ...terminalCapProducts,
  ...terminal0250CapProducts,
  ...terminal0312CapProducts,
  ...terminal0110_0187CapProducts,
  ...vehicleSpecificCapProducts,
  ...twoWheelerHousingCapProducts,
  ...multiWheelerCapProducts,
  // Cable Management
  ...rubberGrommetProducts,
  ...wireSealProducts,
  ...corrugatedPipeProducts,
  ...flexibleConduitProducts,
  ...pgGlandProducts,
  ...metricGlandProducts,
  // Heat Shrink & Sleeves
  ...heatShrinkSleeveProducts,
  ...busbarSleeveProducts,
  ...pvcSleeveProducts,
  ...pvcCottonTapeProducts,
  // Universal Holders (Catalogue III)
  ...holder0250SeriesProducts,
  ...holder090SeriesProducts,
  ...holder090Sealed_0110SeriesProducts,
  ...holder0110SpecialShutterProducts,
  ...holder090PBTSeriesProducts,
  ...holder090WaterProofProducts,
  // Fuse Boxes Complete (Catalogue IV)
  ...squareFuseBoxProducts,
  ...marutiFuseBoxCarProducts,
  ...marutiFuseBoxVanProducts,
  ...glassFuseBoxProducts,
  ...universalFuseBoxProducts,
  // JCB Connectors (Catalogue IV)
  ...jcbConnectorProducts,
  ...jcbConnectorAlternativeProducts,
  ...jcbHighPoleConnectorProducts,
  ...jcbFuseBoxProducts,
  // Head Light Wiring (Catalogue IV)
  ...headlightWiringWithoutRelayProducts,
  ...headlightWiringWithRelayProducts,
  // Special Universal Connectors (Catalogue III)
  ...specialConnector1PoleProducts,
  ...specialConnector2PoleUniversalProducts,
  ...specialConnector2PoleSensorProducts,
  ...specialConnector2PoleExtendedProducts,
  ...specialConnector2PoleFinalProducts,
  ...specialConnector3PoleProducts,
  ...specialConnector4PoleProducts,
  ...specialConnector5PoleProducts,
  ...specialConnector6PoleProducts,
  ...specialConnectorHighPoleSmallProducts,
  ...specialConnector12_13PoleProducts,
  ...specialConnector15_16PoleProducts,
  ...specialConnector18_20PoleProducts,
  ...specialConnector22_26PoleProducts,
  ...specialConnector30_34PoleProducts,
  // ECM Connectors (Catalogue III)
  ...ecmConnectorProducts,
  // Jointer Holders & Relay (Catalogue III)
  ...jointerHolderSpecialProducts,
  ...relay4PinProducts,
  ...relay5PinProducts,
  ...relay24VProducts,
  // Flasher/Relay Base Connectors (Catalogue III)
  ...flasherRelayBase3_4PoleProducts,
  ...flasherRelayBase5PoleProducts,
  // Sensor & Lamp Holders (Catalogue III)
  ...headLampSensorHolderProducts,
  ...jptSensorProducts,
  ...superSealedConnectorProducts,
  ...sensorConnectorProducts,
  ...singleFuseConnectorProducts,
  ...combinationFuseSetProducts,
  // Round Connectors (Catalogue III)
  ...roundConnectorProducts,
  // Special Holders & Relay Combinations (Catalogue III)
  ...specialHolderNewModelProducts,
  ...relayBaseHeadLampAdditionalProducts,
];

// ============================================
// FEATURED PRODUCTS
// ============================================
export const featuredProducts: Product[] = allProducts.filter(p => p.featured);

// ============================================
// PRODUCT CATEGORIES WITH METADATA
// ============================================
export const productCategories: ProductCategory[] = [
  {
    id: "wire-cables",
    name: "Wire & Cables",
    slug: "wire-cables",
    description: "High-quality automotive wires and cables including auto cables, battery cables, and speaker wires.",
    icon: "🔌",
    products: wireProducts,
    subcategories: [
      { 
        id: "auto-cables", 
        name: "Auto Cables", 
        slug: "auto-cables", 
        description: "Premium automotive cables", 
        products: wireProducts.filter(p => p.subcategory === "Auto Cables") 
      },
      { 
        id: "battery-cables", 
        name: "Battery Cables", 
        slug: "battery-cables", 
        description: "Heavy-duty battery cables", 
        products: wireProducts.filter(p => p.subcategory === "Battery Cables") 
      },
      { 
        id: "speaker-cables", 
        name: "Speaker Cables", 
        slug: "speaker-cables", 
        description: "Audio speaker wires", 
        products: wireProducts.filter(p => p.subcategory === "Speaker Cables") 
      },
    ],
  },
  {
    id: "brass-terminal",
    name: "Brass Terminals",
    slug: "brass-terminal",
    description: "Precision-engineered brass terminals including Ring, Fork, Bullet, and various series terminals.",
    icon: "⚡",
    products: brassTerminalProducts,
    subcategories: [
      { id: "ring-series", name: "Ring Series", slug: "ring-series", description: "Ring terminals for secure connections", products: brassTerminalProducts.filter(p => p.subcategory === "Ring Series") },
      { id: "fork-series", name: "Fork Series", slug: "fork-series", description: "Fork/spade terminals", products: brassTerminalProducts.filter(p => p.subcategory === "Fork Series") },
      { id: "jointer-series", name: "Jointer Series", slug: "jointer-series", description: "Wire-to-wire jointer terminals", products: brassTerminalProducts.filter(p => p.subcategory === "Jointer Series") },
      { id: "bullet-series", name: "Bullet Series", slug: "bullet-series", description: "Bullet connectors", products: brassTerminalProducts.filter(p => p.subcategory === "Bullet Series") },
      { id: "fuse-series", name: "Fuse Series", slug: "fuse-series", description: "Fuse terminals", products: brassTerminalProducts.filter(p => p.subcategory === "Fuse Series") },
      { id: "090-series", name: "090 Series", slug: "090-series", description: "090 (2.3mm) terminals", products: brassTerminalProducts.filter(p => p.subcategory === "090 Series") },
      { id: "0110-series", name: "0110 Series", slug: "0110-series", description: "0110 (2.8mm) terminals", products: brassTerminalProducts.filter(p => p.subcategory === "0110 Series") },
      { id: "0187-series", name: "0187 Series", slug: "0187-series", description: "0187 (4.8mm) terminals", products: brassTerminalProducts.filter(p => p.subcategory === "0187 Series") },
      { id: "0250-series", name: "0250 Series", slug: "0250-series", description: "0250 (6.3mm) terminals", products: brassTerminalProducts.filter(p => p.subcategory === "0250 Series") },
      { id: "0312-series", name: "0312 Series", slug: "0312-series", description: "0312 (7.8mm) terminals", products: brassTerminalProducts.filter(p => p.subcategory === "0312 Series") },
      { id: "0375-series", name: "0375 Series", slug: "0375-series", description: "0375 (9.5mm) terminals", products: brassTerminalProducts.filter(p => p.subcategory === "0375 Series") },
      { id: "special-series", name: "Special Series", slug: "special-series", description: "Custom terminals", products: brassTerminalProducts.filter(p => p.subcategory === "Special Series") },
      { id: "brass-lugs", name: "Brass Lugs", slug: "brass-lugs", description: "Cable lugs", products: brassTerminalProducts.filter(p => p.subcategory === "Brass Lugs") },
      { id: "sheet-terminals", name: "Sheet Terminals", slug: "sheet-terminals", description: "Flat sheet terminals", products: brassTerminalProducts.filter(p => p.subcategory === "Sheet Terminals") },
      { id: "battery-terminals", name: "Battery Terminals", slug: "battery-terminals", description: "Battery terminals", products: brassTerminalProducts.filter(p => p.subcategory === "Battery Terminals") },
    ],
  },
  {
    id: "electrical-components",
    name: "Electrical Components",
    slug: "electrical-components",
    description: "Complete range of automotive electrical components including switches, relays, flashers, and tuners.",
    icon: "⚙️",
    products: [...switchProducts, ...flasherProducts, ...relayProducts, ...tunerProducts],
    subcategories: [
      { id: "switches", name: "Switches", slug: "switches", description: "Automotive switches", products: switchProducts },
      { id: "flashers", name: "Flashers", slug: "flashers", description: "Turn signal flashers", products: flasherProducts },
      { id: "relays", name: "Relays", slug: "relays", description: "Automotive relays", products: relayProducts },
      { id: "tuners", name: "Tuners", slug: "tuners", description: "Electrical distribution tuners", products: tunerProducts },
    ],
  },
  {
    id: "holders-connectors",
    name: "Holders & Connectors",
    slug: "holders-connectors",
    description: "Comprehensive range of connector holders and automotive connectors for various applications.",
    icon: "🔗",
    products: [...holderProducts, ...connectorProducts, ...jointerHolderProducts],
    subcategories: [
      { id: "holders", name: "Holders", slug: "holders", description: "Connector holders", products: holderProducts },
      { id: "connectors", name: "Connectors", slug: "connectors", description: "Automotive connectors", products: connectorProducts },
      { id: "jointer-holders", name: "Jointer Holders", slug: "jointer-holders", description: "Jointer holders", products: jointerHolderProducts },
    ],
  },
  {
    id: "fuse-boxes",
    name: "Fuse Boxes & Wiring",
    slug: "fuse-boxes",
    description: "Fuse boxes for various vehicle makes and models.",
    icon: "📦",
    products: fuseBoxProducts,
    subcategories: [
      { id: "fuse-boxes", name: "Fuse Boxes", slug: "fuse-boxes-cat", description: "Vehicle fuse boxes", products: fuseBoxProducts.filter(p => p.subcategory === "Fuse Box") },
      { id: "headlight-wiring", name: "Headlight Wiring", slug: "headlight-wiring", description: "Headlight relay wiring kits", products: fuseBoxProducts.filter(p => p.subcategory === "Head Light Relay Wiring") },
    ],
  },
  {
    id: "battery-accessories",
    name: "Battery Accessories",
    slug: "battery-accessories",
    description: "Complete range of battery accessories including cable sets, jumper cables, charging clips, and earthing wires.",
    icon: "🔋",
    products: [...insulationTapeProducts, ...batteryCableSetProducts, ...jumperCableProducts, ...earthingWireProducts, ...chargingClipProducts],
    subcategories: [
      { id: "insulation-tape", name: "Insulation Tape", slug: "insulation-tape", description: "PVC insulation tape", products: insulationTapeProducts },
      { id: "battery-cable-sets", name: "Battery Cable Sets", slug: "battery-cable-sets", description: "Battery cable sets and fittings", products: batteryCableSetProducts },
      { id: "jumper-cables", name: "Jumper Cables", slug: "jumper-cables", description: "Emergency jumper cable sets", products: jumperCableProducts },
      { id: "earthing-wire", name: "Earthing Wire", slug: "earthing-wire", description: "Flat earthing wires", products: earthingWireProducts },
      { id: "charging-clips", name: "Charging Clips", slug: "charging-clips", description: "Charging and crocodile clips", products: chargingClipProducts },
    ],
  },
  {
    id: "fuses",
    name: "Fuses",
    slug: "fuses",
    description: "Complete range of automotive and electrical fuses including Standard, Mini, Maxi, Midi, Mega, ANL, and specialty fuses for all applications.",
    icon: "⚡",
    products: [...standardFuseProducts, ...miniFuseProducts, ...slowBlowFemaleFuseProducts, ...glassFuseProducts, ...slowBlowMaleFuseProducts, ...midiFuseProducts, ...megaFuseProducts, ...anlFuseProducts, ...boltDownFuseProducts, ...maxiFuseProducts],
    subcategories: [
      { id: "standard-fuse", name: "Standard Fuse", slug: "standard-fuse", description: "Standard blade fuses", products: standardFuseProducts },
      { id: "mini-fuse", name: "Mini Fuse", slug: "mini-fuse", description: "Compact mini blade fuses", products: miniFuseProducts },
      { id: "slow-blow-female", name: "Slow Blow Female", slug: "slow-blow-female-fuse", description: "Time-delay female cartridge fuses", products: slowBlowFemaleFuseProducts },
      { id: "glass-fuse", name: "Glass Fuse", slug: "glass-fuse", description: "Glass tube fuses", products: glassFuseProducts },
      { id: "slow-blow-male", name: "Slow Blow Male", slug: "slow-blow-male-fuse", description: "Time-delay male cartridge fuses", products: slowBlowMaleFuseProducts },
      { id: "midi-fuse", name: "Midi Fuse", slug: "midi-fuse", description: "Medium current midi fuses", products: midiFuseProducts },
      { id: "mega-fuse", name: "Mega Fuse", slug: "mega-fuse", description: "High current mega fuses", products: megaFuseProducts },
      { id: "anl-fuse", name: "ANL Fuse", slug: "anl-fuse", description: "ANL fuses for audio & power", products: anlFuseProducts },
      { id: "bolt-down-fuse", name: "Bolt-Down Fuse", slug: "bolt-down-fuse", description: "Heavy-duty bolt-down fuses", products: boltDownFuseProducts },
      { id: "maxi-fuse", name: "Maxi Fuse", slug: "maxi-fuse", description: "Large maxi blade fuses", products: maxiFuseProducts },
    ],
  },
  {
    id: "terminal-caps",
    name: "Terminal Caps & Plastic Components",
    slug: "terminal-caps",
    description: "Dip moulding terminal caps, housing caps, and protective covers for all terminal series and vehicle-specific applications.",
    icon: "🛡️",
    products: [...terminalCapProducts, ...terminal0250CapProducts, ...terminal0312CapProducts, ...terminal0110_0187CapProducts, ...vehicleSpecificCapProducts, ...twoWheelerHousingCapProducts, ...multiWheelerCapProducts],
    subcategories: [
      { id: "bullet-caps", name: "Bullet Series Caps", slug: "bullet-series-caps", description: "Caps for bullet terminals", products: terminalCapProducts },
      { id: "0250-caps", name: "0250 Series Caps", slug: "0250-series-caps", description: "Caps for 0250 terminals", products: terminal0250CapProducts },
      { id: "0312-caps", name: "0312 Series Caps", slug: "0312-series-caps", description: "Caps for 0312 terminals", products: terminal0312CapProducts },
      { id: "0110-0187-caps", name: "0110/0187 Series Caps", slug: "0110-0187-series-caps", description: "Caps for 0110 & 0187 terminals", products: terminal0110_0187CapProducts },
      { id: "vehicle-specific-caps", name: "Vehicle-Specific Caps", slug: "vehicle-specific-caps", description: "Battery & terminal caps for specific vehicles", products: vehicleSpecificCapProducts },
      { id: "2w-housing-caps", name: "2-Wheeler Housing Caps", slug: "2-wheeler-housing-caps", description: "Housing caps for motorcycles & scooters", products: twoWheelerHousingCapProducts },
      { id: "multi-wheeler-caps", name: "Multi-Wheeler Caps", slug: "multi-wheeler-caps", description: "Caps for 3-wheeler & 4-wheeler", products: multiWheelerCapProducts },
    ],
  },
  {
    id: "cable-management",
    name: "Cable Management & Protection",
    slug: "cable-management",
    description: "Complete cable management solutions including rubber grommets, seals, corrugated pipes, flexible conduits, and cable glands.",
    icon: "🔧",
    products: [...rubberGrommetProducts, ...wireSealProducts, ...corrugatedPipeProducts, ...flexibleConduitProducts, ...pgGlandProducts, ...metricGlandProducts],
    subcategories: [
      { id: "rubber-grommet", name: "Rubber Grommets", slug: "rubber-grommets", description: "Wire passage grommets", products: rubberGrommetProducts },
      { id: "wire-seal", name: "Wire Seals", slug: "wire-seals", description: "Waterproof wire seals & dummy plugs", products: wireSealProducts },
      { id: "corrugated-pipe", name: "Corrugated Pipes", slug: "corrugated-pipes", description: "Flexible corrugated protection pipes", products: corrugatedPipeProducts },
      { id: "flexible-conduit", name: "Flexible Conduits", slug: "flexible-conduits", description: "Polyamide flexible conduits", products: flexibleConduitProducts },
      { id: "pg-gland", name: "PG Glands", slug: "pg-glands", description: "PG cable glands with lock nuts", products: pgGlandProducts },
      { id: "metric-gland", name: "Metric Glands", slug: "metric-glands", description: "Metric cable glands with lock nuts", products: metricGlandProducts },
    ],
  },
  {
    id: "heat-shrink-sleeves",
    name: "Heat Shrink & Protective Sleeves",
    slug: "heat-shrink-sleeves",
    description: "Comprehensive range of heat shrink sleeves, busbar sleeves, PVC sleeves, and insulation tapes for all wire protection needs.",
    icon: "🔥",
    products: [...heatShrinkSleeveProducts, ...busbarSleeveProducts, ...pvcSleeveProducts, ...pvcCottonTapeProducts],
    subcategories: [
      { id: "heat-shrink-sleeve", name: "Heat Shrink Sleeves", slug: "heat-shrink-sleeves-sub", description: "Heat shrink tubes (0.6mm-180mm)", products: heatShrinkSleeveProducts },
      { id: "busbar-sleeve", name: "Busbar Sleeves", slug: "busbar-sleeves", description: "Red busbar insulation sleeves", products: busbarSleeveProducts },
      { id: "pvc-sleeve", name: "PVC Sleeves", slug: "pvc-sleeves", description: "Shine & dull PVC sleeves", products: pvcSleeveProducts },
      { id: "pvc-cotton-tape", name: "Tapes", slug: "insulation-tapes", description: "PVC & cotton insulation tapes", products: pvcCottonTapeProducts },
    ],
  },
  {
    id: "universal-holders",
    name: "Universal Holders",
    slug: "universal-holders",
    description: "Premium universal holders with deluxe wire for all vehicle types. Available in 0250, 090, 0110 series for various terminal configurations.",
    icon: "🔌",
    products: [...holder0250SeriesProducts, ...holder090SeriesProducts, ...holder090Sealed_0110SeriesProducts, ...holder0110SpecialShutterProducts, ...holder090PBTSeriesProducts, ...holder090WaterProofProducts],
    subcategories: [
      { id: "0250-series-holders", name: "0250 Series Holders", slug: "0250-series-holders", description: "6.3mm terminal holders with deluxe wire", products: holder0250SeriesProducts },
      { id: "090-series-holders", name: "090 Series Holders", slug: "090-series-holders", description: "2.3mm terminal holders", products: holder090SeriesProducts },
      { id: "090-sealed-0110-holders", name: "090 Sealed & 0110 Holders", slug: "090-sealed-0110-holders", description: "Sealed 090 & 2.8mm 0110 holders", products: holder090Sealed_0110SeriesProducts },
      { id: "0110-special-shutter", name: "0110 Special & Shutter", slug: "0110-special-shutter", description: "Special 0110 series & shutter holders", products: holder0110SpecialShutterProducts },
      { id: "090-pbt-holders", name: "090 PBT Series", slug: "090-pbt-holders", description: "PBT series holders", products: holder090PBTSeriesProducts },
      { id: "090-waterproof-holders", name: "090 Water Proof Series", slug: "090-waterproof-holders", description: "Waterproof 090 series holders", products: holder090WaterProofProducts },
    ],
  },
  {
    id: "fuse-boxes-complete",
    name: "Complete Fuse Box Systems",
    slug: "fuse-boxes-complete",
    description: "Complete range of fuse boxes for all vehicle types including Square, Maruti, Universal, and Glass fuse boxes with premium Saroop Deluxe Wire.",
    icon: "📦",
    products: [...squareFuseBoxProducts, ...marutiFuseBoxCarProducts, ...marutiFuseBoxVanProducts, ...glassFuseBoxProducts, ...universalFuseBoxProducts],
    subcategories: [
      { id: "square-fuse-box", name: "Square Fuse Box", slug: "square-fuse-box", description: "Tata, Ashok Leyland, Eicher fuse boxes", products: squareFuseBoxProducts },
      { id: "maruti-car-fuse-box", name: "Maruti Car Fuse Box", slug: "maruti-car-fuse-box", description: "Maruti car & vehicle-specific fuse boxes", products: marutiFuseBoxCarProducts },
      { id: "maruti-van-fuse-box", name: "Maruti Van & Universal", slug: "maruti-van-universal-fuse-box", description: "Maruti van & tractor fuse boxes", products: marutiFuseBoxVanProducts },
      { id: "glass-fuse-box", name: "Glass Fuse Box", slug: "glass-fuse-box", description: "Universal glass fuse boxes", products: glassFuseBoxProducts },
      { id: "universal-fuse-box", name: "Universal Fuse Box", slug: "universal-fuse-box-cat", description: "Universal fuse boxes with 60/80A fuses", products: universalFuseBoxProducts },
    ],
  },
  {
    id: "jcb-connectors",
    name: "JCB Connectors & Fuse Boxes",
    slug: "jcb-connectors",
    description: "Complete range of JCB connectors and fuse boxes for construction and agricultural equipment. Premium quality with deluxe wire.",
    icon: "🚜",
    products: [...jcbConnectorProducts, ...jcbConnectorAlternativeProducts, ...jcbHighPoleConnectorProducts, ...jcbFuseBoxProducts],
    subcategories: [
      { id: "jcb-standard", name: "JCB Standard Connectors", slug: "jcb-standard-connectors", description: "2-12 pole JCB connectors", products: jcbConnectorProducts },
      { id: "jcb-alternative", name: "JCB Alternative Types", slug: "jcb-alternative-connectors", description: "Alternative type JCB connectors", products: jcbConnectorAlternativeProducts },
      { id: "jcb-high-pole", name: "JCB High Pole", slug: "jcb-high-pole-connectors", description: "9-37 pole heavy duty JCB connectors", products: jcbHighPoleConnectorProducts },
      { id: "jcb-fuse-boxes", name: "JCB Fuse Boxes", slug: "jcb-fuse-boxes", description: "JCB small, medium & big fuse boxes", products: jcbFuseBoxProducts },
    ],
  },
  {
    id: "headlight-wiring",
    name: "Head Light Relay Wiring Harness",
    slug: "headlight-wiring",
    description: "Complete head light relay wiring harness kits with and without relay. Universal fit for all vehicles with various holder and fuse configurations.",
    icon: "💡",
    products: [...headlightWiringWithoutRelayProducts, ...headlightWiringWithRelayProducts],
    subcategories: [
      { id: "headlight-without-relay", name: "Without Relay", slug: "headlight-wiring-without-relay", description: "Head light wiring without relay", products: headlightWiringWithoutRelayProducts },
      { id: "headlight-with-relay", name: "With Relay", slug: "headlight-wiring-with-relay", description: "Head light wiring with 12V relay", products: headlightWiringWithRelayProducts },
    ],
  },
  {
    id: "special-universal-connectors",
    name: "Special Universal Connectors",
    slug: "special-universal-connectors",
    description: "Comprehensive range of vehicle-specific connectors for sensors, injectors, lights, and electrical systems. Compatible with Tata, Maruti, Mahindra, Ashok Leyland, and more.",
    icon: "🔗",
    products: [
      ...specialConnector1PoleProducts,
      ...specialConnector2PoleUniversalProducts,
      ...specialConnector2PoleSensorProducts,
      ...specialConnector2PoleExtendedProducts,
      ...specialConnector2PoleFinalProducts,
      ...specialConnector3PoleProducts,
      ...specialConnector4PoleProducts,
      ...specialConnector5PoleProducts,
      ...specialConnector6PoleProducts,
      ...specialConnectorHighPoleSmallProducts,
      ...specialConnector12_13PoleProducts,
      ...specialConnector15_16PoleProducts,
      ...specialConnector18_20PoleProducts,
      ...specialConnector22_26PoleProducts,
      ...specialConnector30_34PoleProducts,
    ],
    subcategories: [
      { id: "special-1-pole", name: "1 Pole Connectors", slug: "special-connectors-1-pole", description: "H1 holders, fuse links & single pole connectors", products: specialConnector1PoleProducts },
      { id: "special-2-pole-universal", name: "2 Pole Universal", slug: "special-connectors-2-pole-universal", description: "Universal Tata, fan couplers & headlight holders", products: specialConnector2PoleUniversalProducts },
      { id: "special-2-pole-sensors", name: "2 Pole Sensors & Switches", slug: "special-connectors-2-pole-sensors", description: "Injectors, sensors, switches & lights", products: specialConnector2PoleSensorProducts },
      { id: "special-2-pole-extended", name: "2 Pole Extended", slug: "special-connectors-2-pole-extended", description: "Additional 2 pole variants for various vehicles", products: [...specialConnector2PoleExtendedProducts, ...specialConnector2PoleFinalProducts] },
      { id: "special-3-pole", name: "3 Pole Connectors", slug: "special-connectors-3-pole", description: "3 pole connectors for sensors, alternators & ECM", products: specialConnector3PoleProducts },
      { id: "special-4-pole", name: "4 Pole Connectors", slug: "special-connectors-4-pole", description: "4 pole connectors for alternators & universal applications", products: specialConnector4PoleProducts },
      { id: "special-5-pole", name: "5 Pole Connectors", slug: "special-connectors-5-pole", description: "5 pole connectors for wiper, ECM & universal", products: specialConnector5PoleProducts },
      { id: "special-6-pole", name: "6 Pole Connectors", slug: "special-connectors-6-pole", description: "6 pole connectors for tail light, air filter & sensors", products: specialConnector6PoleProducts },
      { id: "special-high-pole", name: "High Pole (7-34)", slug: "special-connectors-high-pole", description: "High density 7-34 pole connectors", products: [...specialConnectorHighPoleSmallProducts, ...specialConnector12_13PoleProducts, ...specialConnector15_16PoleProducts, ...specialConnector18_20PoleProducts, ...specialConnector22_26PoleProducts, ...specialConnector30_34PoleProducts] },
    ],
  },
  {
    id: "ecm-connectors",
    name: "ECM Connectors",
    slug: "ecm-connectors",
    description: "High-density ECM (Engine Control Module) connectors for Ashok Leyland and Tata vehicles. 24-94 pole configurations with ECM special wire. 15 inch long wire for heavy commercial vehicles.",
    icon: "🖥️",
    products: [...ecmConnectorProducts],
    subcategories: [
      { id: "ecm-high-density", name: "ECM High Density", slug: "ecm-high-density-connectors", description: "24-94 pole ECM connectors with 15\" wire", products: ecmConnectorProducts },
    ],
  },
  {
    id: "jointer-holders-relay",
    name: "Jointer Holders & Relay With Base",
    slug: "jointer-holders-relay",
    description: "Complete range of jointer holders for wire splicing and relay with base kits (4-pin & 5-pin, 12V & 24V) with deluxe wire.",
    icon: "🔌",
    products: [...jointerHolderSpecialProducts, ...relay4PinProducts, ...relay5PinProducts, ...relay24VProducts],
    subcategories: [
      { id: "jointer-holders", name: "Jointer Holders", slug: "jointer-holders", description: "Wire splice & joint holders", products: jointerHolderSpecialProducts },
      { id: "relay-4pin", name: "4 Pin Relay With Base", slug: "4-pin-relay-base", description: "12V 4 pin relay with base", products: relay4PinProducts },
      { id: "relay-5pin", name: "5 Pin Relay With Base", slug: "5-pin-relay-base", description: "12V/24V 5 pin relay with base", products: [...relay5PinProducts, ...relay24VProducts] },
    ],
  },
  {
    id: "flasher-relay-base",
    name: "Flasher & Relay Base Connectors",
    slug: "flasher-relay-base",
    description: "Flasher and relay base connectors for all vehicle types. 3-15 pole configurations for flashers, AC relays, micro relays, and universal relay bases.",
    icon: "⚡",
    products: [...flasherRelayBase3_4PoleProducts, ...flasherRelayBase5PoleProducts, ...relayBaseHeadLampAdditionalProducts],
    subcategories: [
      { id: "flasher-3-4-pole", name: "3 & 4 Pole Flasher/Relay", slug: "flasher-relay-3-4-pole", description: "Flasher & 4 pole relay base", products: flasherRelayBase3_4PoleProducts },
      { id: "flasher-5-pole", name: "5 Pole Relay Base", slug: "flasher-relay-5-pole", description: "5 pole relay & AC relay base", products: flasherRelayBase5PoleProducts },
      { id: "flasher-high-pole", name: "High Pole Relay Base (8-15)", slug: "flasher-relay-high-pole", description: "8-15 pole relay base for commercial vehicles", products: relayBaseHeadLampAdditionalProducts },
    ],
  },
  {
    id: "sensor-lamp-holders",
    name: "Sensor & Lamp Holders",
    slug: "sensor-lamp-holders",
    description: "Complete range of sensor holders, head lamp holders, JPT connectors, super sealed connectors, and single fuse connectors for all automotive applications.",
    icon: "💡",
    products: [...headLampSensorHolderProducts, ...jptSensorProducts, ...superSealedConnectorProducts, ...sensorConnectorProducts, ...singleFuseConnectorProducts, ...combinationFuseSetProducts],
    subcategories: [
      { id: "headlamp-sensor", name: "Head Lamp Holders", slug: "headlamp-sensor-holders", description: "3 pole head lamp & sensor holders (ceramic, bakelite, melamine)", products: headLampSensorHolderProducts },
      { id: "jpt-sensor", name: "JPT Sensor Connectors", slug: "jpt-sensor-connectors", description: "JPT sensor & injector connectors", products: jptSensorProducts },
      { id: "super-sealed", name: "Super Sealed Connectors", slug: "super-sealed-connectors", description: "1-6 pole super sealed waterproof connectors", products: superSealedConnectorProducts },
      { id: "sensor-connectors", name: "Sensor Connectors", slug: "sensor-connectors", description: "2-6 pole sensor connectors", products: sensorConnectorProducts },
      { id: "single-fuse", name: "Single Fuse Connectors", slug: "single-fuse-connectors", description: "Single fuse holders & combination sets", products: [...singleFuseConnectorProducts, ...combinationFuseSetProducts] },
    ],
  },
  {
    id: "round-connectors",
    name: "Round Connectors",
    slug: "round-connectors",
    description: "Round style connectors for Maruti, Jeep, E-Rickshaw, and fan motor applications. 1-4 pole configurations.",
    icon: "⭕",
    products: [...roundConnectorProducts],
    subcategories: [
      { id: "round-1-4-pole", name: "Round Connectors", slug: "round-connectors-1-4-pole", description: "1-4 pole round connectors for various vehicles", products: roundConnectorProducts },
    ],
  },
  {
    id: "special-holders",
    name: "Special Holders",
    slug: "special-holders",
    description: "Special holders for Ashok Leyland and Tata new models. High pole count configurations (2-24 pole) with deluxe wire.",
    icon: "🔧",
    products: [...specialHolderNewModelProducts],
    subcategories: [
      { id: "new-model-holders", name: "New Model Holders", slug: "new-model-holders", description: "Ashok Leyland & Tata new model special holders", products: specialHolderNewModelProducts },
    ],
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Convert subcategory name to slug format
 * Ensures consistent slug generation across the app
 */
export function subcategoryToSlug(subcategoryName: string): string {
  return subcategoryName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\//g, "-")
    .replace(/&/g, "and");
}

/**
 * Get a product by its slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((product) => product.slug === slug);
}

/**
 * Get all products in a category by category slug
 */
export function getProductsByCategory(categorySlug: string): Product[] {
  const category = productCategories.find((cat) => cat.slug === categorySlug);
  return category?.products || [];
}

/**
 * Get a category by its slug
 */
export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((cat) => cat.slug === slug);
}

/**
 * Search products by query string
 */
export function searchProducts(query: string): Product[] {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  return allProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm) ||
      p.partNumber?.toLowerCase().includes(searchTerm) ||
      p.tags?.some((tag) => tag.toLowerCase().includes(searchTerm))
  );
}

/**
 * Get products by application
 */
export function getProductsByApplication(application: string): Product[] {
  return allProducts.filter(
    (p) => p.applications?.includes(application)
  );
}

// ============================================
// STATISTICS
// ============================================
export const totalProductCount = allProducts.length;
export const totalCategoryCount = productCategories.length;
export const featuredProductCount = featuredProducts.length;
