export interface MapStateShape {
  id: string;
  name: string;
  shortCode: string;
  centroid: [number, number]; // [x, y] on a 1000x1100 SVG coordinate system
  path: string; // SVG path d attribute
}

// Coordinate space: viewBox="0 0 1000 1100"
// Geographically proportional simplified vector polygons for all 36 Indian administrative entities
export const INDIA_MAP_SHAPES: MapStateShape[] = [
  {
    id: 'ladakh',
    name: 'Ladakh',
    shortCode: 'LA',
    centroid: [460, 115],
    path: 'M 400 45 L 490 30 L 580 90 L 570 180 L 510 200 L 440 180 L 390 120 Z'
  },
  {
    id: 'jammu-and-kashmir',
    name: 'Jammu and Kashmir',
    shortCode: 'JK',
    centroid: [350, 140],
    path: 'M 310 90 L 390 120 L 440 180 L 370 210 L 310 180 L 290 120 Z'
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    shortCode: 'HP',
    centroid: [435, 220],
    path: 'M 370 210 L 440 180 L 500 215 L 480 270 L 410 265 L 370 210 Z'
  },
  {
    id: 'punjab',
    name: 'Punjab',
    shortCode: 'PB',
    centroid: [355, 260],
    path: 'M 310 220 L 370 210 L 410 265 L 390 310 L 320 300 Z'
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    shortCode: 'CH',
    centroid: [390, 250],
    path: 'M 385 245 L 398 245 L 398 258 L 385 258 Z'
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    shortCode: 'UK',
    centroid: [495, 280],
    path: 'M 480 250 L 530 255 L 565 315 L 505 330 L 470 290 Z'
  },
  {
    id: 'haryana',
    name: 'Haryana',
    shortCode: 'HR',
    centroid: [395, 335],
    path: 'M 360 295 L 410 280 L 435 340 L 405 385 L 345 355 Z'
  },
  {
    id: 'delhi',
    name: 'Delhi',
    shortCode: 'DL',
    centroid: [425, 345],
    path: 'M 418 338 L 432 338 L 432 352 L 418 352 Z'
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    shortCode: 'RJ',
    centroid: [270, 410],
    path: 'M 220 295 L 340 300 L 390 380 L 360 480 L 260 520 L 160 420 Z'
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    shortCode: 'UP',
    centroid: [515, 410],
    path: 'M 420 330 L 510 320 L 640 380 L 670 450 L 590 490 L 460 450 L 410 375 Z'
  },
  {
    id: 'bihar',
    name: 'Bihar',
    shortCode: 'BR',
    centroid: [685, 435],
    path: 'M 640 380 L 750 395 L 760 470 L 655 475 Z'
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    shortCode: 'SK',
    centroid: [755, 350],
    path: 'M 745 335 L 770 335 L 775 370 L 745 365 Z'
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    shortCode: 'WB',
    centroid: [745, 520],
    path: 'M 750 375 L 765 420 L 730 480 L 770 590 L 720 590 L 705 520 L 730 460 Z'
  },
  {
    id: 'jharkhand',
    name: 'Jharkhand',
    shortCode: 'JH',
    centroid: [670, 520],
    path: 'M 645 470 L 730 470 L 725 560 L 620 560 L 635 500 Z'
  },
  {
    id: 'odisha',
    name: 'Odisha',
    shortCode: 'OD',
    centroid: [655, 620],
    path: 'M 620 560 L 725 560 L 700 680 L 590 690 L 595 620 Z'
  },
  {
    id: 'chhattisgarh',
    name: 'Chhattisgarh',
    shortCode: 'CG',
    centroid: [575, 580],
    path: 'M 545 480 L 625 490 L 610 650 L 550 710 L 530 600 Z'
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    shortCode: 'MP',
    centroid: [450, 510],
    path: 'M 360 460 L 540 450 L 580 540 L 490 610 L 370 580 L 340 500 Z'
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    shortCode: 'GJ',
    centroid: [200, 550],
    path: 'M 140 470 L 260 500 L 290 570 L 250 640 L 160 630 L 100 540 Z'
  },
  {
    id: 'dadra-and-nagar-haveli-and-daman-and-diu',
    name: 'DNHDD',
    shortCode: 'DNHDD',
    centroid: [225, 645],
    path: 'M 218 640 L 232 640 L 232 654 L 218 654 Z'
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    shortCode: 'MH',
    centroid: [370, 670],
    path: 'M 260 620 L 390 590 L 530 620 L 500 730 L 380 770 L 270 730 Z'
  },
  {
    id: 'goa',
    name: 'Goa',
    shortCode: 'GA',
    centroid: [285, 785],
    path: 'M 278 775 L 295 775 L 295 798 L 278 798 Z'
  },
  {
    id: 'telangana',
    name: 'Telangana',
    shortCode: 'TS',
    centroid: [480, 720],
    path: 'M 440 680 L 540 670 L 540 760 L 460 780 L 430 730 Z'
  },
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    shortCode: 'AP',
    centroid: [500, 810],
    path: 'M 460 770 L 550 740 L 620 680 L 550 870 L 460 880 L 420 830 Z'
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    shortCode: 'KA',
    centroid: [350, 810],
    path: 'M 300 740 L 410 740 L 425 850 L 380 910 L 310 860 Z'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    shortCode: 'KL',
    centroid: [340, 960],
    path: 'M 320 890 L 360 895 L 365 1010 L 330 1015 Z'
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    shortCode: 'TN',
    centroid: [425, 935],
    path: 'M 380 870 L 470 870 L 470 940 L 410 1020 L 360 970 Z'
  },
  {
    id: 'puducherry',
    name: 'Puducherry',
    shortCode: 'PY',
    centroid: [475, 910],
    path: 'M 470 905 L 482 905 L 482 917 L 470 917 Z'
  },
  // North East States
  {
    id: 'assam',
    name: 'Assam',
    shortCode: 'AS',
    centroid: [850, 420],
    path: 'M 780 395 L 860 380 L 910 405 L 880 445 L 800 450 Z'
  },
  {
    id: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    shortCode: 'AR',
    centroid: [905, 340],
    path: 'M 830 330 L 920 300 L 965 355 L 880 380 Z'
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    shortCode: 'ML',
    centroid: [810, 460],
    path: 'M 780 445 L 845 445 L 845 475 L 780 475 Z'
  },
  {
    id: 'nagaland',
    name: 'Nagaland',
    shortCode: 'NL',
    centroid: [925, 425],
    path: 'M 910 400 L 945 410 L 935 450 L 905 440 Z'
  },
  {
    id: 'manipur',
    name: 'Manipur',
    shortCode: 'MN',
    centroid: [915, 480],
    path: 'M 900 455 L 935 455 L 925 510 L 895 505 Z'
  },
  {
    id: 'mizoram',
    name: 'Mizoram',
    shortCode: 'MZ',
    centroid: [885, 540],
    path: 'M 870 505 L 905 505 L 895 570 L 865 560 Z'
  },
  {
    id: 'tripura',
    name: 'Tripura',
    shortCode: 'TR',
    centroid: [840, 520],
    path: 'M 825 500 L 855 500 L 850 545 L 820 540 Z'
  },
  // Islands
  {
    id: 'andaman-and-nicobar-islands',
    name: 'Andaman & Nicobar',
    shortCode: 'AN',
    centroid: [880, 850],
    path: 'M 870 780 L 890 780 L 890 940 L 870 940 Z'
  },
  {
    id: 'lakshadweep',
    name: 'Lakshadweep',
    shortCode: 'LD',
    centroid: [220, 890],
    path: 'M 210 860 L 230 860 L 230 920 L 210 920 Z'
  }
];
