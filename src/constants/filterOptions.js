export const RamFilterOptions = [
  {
    label: '4 - 6GB',
    values: [4, 6],
    type: 'ram',
  },
  {
    label: '8 - 16GB',
    values: [8, 16],
    type: 'ram',
  },
  {
    label: 'Over 16GB',
    values: [32],
    type: 'ram',
  },
];

export const StorageFilterOptions = [
  {
    label: 'Under 32GB',
    values: [16],
    type: 'storage',
  },
  {
    label: '32 - 64GB',
    values: [32, 64],
    type: 'storage',
  },
  {
    label: '128 - 256GB',
    values: [128, 256],
    type: 'storage',
  },
  {
    label: 'Over 512GB',
    values: [512],
    type: 'storage',
  },
];

export const CameraFilterOptions = [
  {
    label: 'Macro',
    values: ['Macro'],
    type: 'camera',
  },
  {
    label: 'Wide angle',
    values: ['Wide angle'],
    type: 'camera',
  },
  {
    label: 'Portrait',
    values: ['Portrait'],
    type: 'camera',
  },
];

export const SpecialFilterOptions = [
  {
    label: '5G support',
    values: ['5G support'],
    type: 'specialFeature',
  },
  {
    label: 'Face ID',
    values: ['Face ID'],
    type: 'specialFeature',
  },
  {
    label: 'Touch ID',
    values: ['Touch ID'],
    type: 'specialFeature',
  },
  {
    label: 'Wireless charger',
    values: ['Wireless charger'],
    type: 'specialFeature',
  },
];

export const AvailabilityFilterOptions = [
  {
    label: 'In store',
    values: [true],
    type: 'available',
  },
  {
    label: 'Out of stock',
    values: [false],
    type: 'available',
  },
];

export const FilterOptions = [
  {
    title: 'Brand',
    type: 'brand',
  },
  {
    title: 'Ram',
    type: 'ram',
  },
  {
    title: 'Storage',
    type: 'storage',
  },
  {
    title: 'Camera',
    type: 'camera',
  },
  {
    title: 'Special Feature',
    type: 'specialFeature',
  },
  {
    title: 'Availability',
    type: 'available',
  },
];

export const FilterTypes = {
  BRAND: 'brand',
  RAM: 'ram',
  STORAGE: 'storage',
  CAMERA: 'camera',
  SPECIAL_FEATURE: 'specialFeature',
  AVAILABILITY: 'available',
}