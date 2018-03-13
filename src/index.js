'use strict'

// Costs and risks
// const EXPORT_CUSTOMS_DECLARATION = 'Export customs declaration'
// const TRANSPORT_TO_CARRIER = 'Transport to carrier / origin port'
// const UNLOADING_OF_TRUCK_IN_ORIGIN_PORT = 'Unloading of truck in origin port'
// const LOADING_ON_VESSEL_IN_ORIGIN_PORT = 'Loading on vessel in origin port'
// const TRANSPORT_TO_DESTINATION_PORT = 'Transport to destination port'
// const UNLOADING_IN_DESTINATION_PORT = 'Unloading in destination port'
// const LOADING_ON_TRUCK_IN_DESTINATION_PORT = 'Loading on truck in destination port'
// const CARRIAGE_TO_FINAL_DESTINATION = 'Carriage to final destination'
// const IMPORT_CUSTOMS_CLEARANCE = 'Import customs clearance'
// const IMPORT_TAXES = 'Import taxes'
// const INSURANCE = 'Insurance'

const incoterms = {
  EXW: {
    code: 'EXW',
    name: 'Ex-Works',
    description: 'The seller makes the goods available to be collected at their premises and the buyer is responsible for all other risks, transportation costs, taxes and duties from that point onwards. This term is commonly used when quoting a price.',
  },
  FCA: {
    code: 'FCA',
    name: 'Free Carrier',
    description: 'The seller gives the goods, cleared for export, to the buyer’s carrier at a specified place. The seller is responsible for getting them to the specified place of delivery. This term is commonly used for containers travelling by more than one mode of transport.',
  },
  FAS: {
    code: 'FAS',
    name: 'Free alongside Ship',
    description: 'The seller puts the goods alongside the ship at the specified port they’re going to be shipped from. The seller must get the goods ready for export, but the buyer is responsible for the cost and risk involved in loading them.  This term is commonly used for heavy-lift or bulk cargo (eg generators, boats), but not for goods transported in containers by more than one mode of transport (FCA is usually used for this).',
  },
  FOB: {
    code: 'FOB',
    name: 'Free On Board',
    description: 'The seller must get the goods ready for export and load them onto the specified ship. The buyer and seller share the costs and risks when the goods are on board. This term is not used for goods transported in containers by more than one mode of transport (FCA is usually used for this).',
  },
  CPT: {
    code: 'CPT',
    name: 'Carriage Paid To',
    description: 'The seller pays to transport the goods to the specified destination. Responsibility for the goods transfers to the buyer when the seller passes them to the first carrier.',
  },
  CFR: {
    code: 'CFR',
    name: 'Cost and Freight',
    description: 'The seller must pay the costs of bringing the goods to the specified port. The buyer is responsible for risks when the goods are loaded onto the ship.',
  },
  CIF: {
    code: 'CIF',
    name: 'Cost, Insurance and Freight',
    description: 'The seller must pay the costs of bringing the goods to the specified port. They also pay for insurance. The buyer is responsible for risks when the goods are loaded onto the ship.',
  },
  CIP: {
    code: 'CIP',
    name: 'Carriage and Insurance Paid',
    description: 'The seller pays for insurance as well as transport to the specified destination. Responsibility for the goods transfers to the buyer when the seller passes them to the first carrier.  CIP (‘Carriage and Insurance Paid’) is commonly used for goods being transported by container by more than one mode of transport. If transporting only by sea, CIF is often used.',
  },
  DAT: {
    code: 'DAT',
    name: 'Delivered at Terminal',
    description: 'The seller pays for transport to a specified terminal at the agreed destination. The buyer is responsible for the cost of importing the goods. The buyer takes responsibility once the goods are unloaded at the terminal.',
  },
  DAP: {
    code: 'DAP',
    name: 'Delivered at Place',
    description: 'The seller pays for transport to the specified destination, but the buyer pays the cost of importing the goods. The seller takes responsibility for the goods until they’re ready to be unloaded by the buyer.',
  },
  DDP: {
    code: 'DDP',
    name: 'Delivered Duty Paid',
    description: 'The seller is responsible for delivering the goods to the named destination in the buyer’s country, including all costs involved.',
  },
}

const constants = {}

Object.keys(incoterms).forEach(code => {
  constants[code] = code
})

module.exports = { ...incoterms, constants }
