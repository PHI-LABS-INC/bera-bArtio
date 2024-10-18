import 'dotenv/config';
import path from 'path';
import { Season0endDate } from '../utils/data';
import { ArtSetting } from '../utils/types';

const baseSettings = {
  price: 0,
  maxSupply: undefined,
  soulbound: false,
  startDate: Math.floor(Date.now() / 1000),
  endDate: Season0endDate,
  artType: 'IMAGE' as const,
};

export const artSettings: { [key: number]: ArtSetting } = {
  0: {
    ...baseSettings,
    name: 'Bara 2c',
    description: 'For the pioneers ready to explore.',
    tags: ['Bara', 'Testnet'],
    externalURL: 'https://www.berachain.com/',
    imagePath: path.join(process.cwd(), 'public/assets/images/prod', '0.svg'),
    artist: '0x5037e7747fAa78fc0ECF8DFC526DcD19f73076ce',
    receiver: '0x5037e7747fAa78fc0ECF8DFC526DcD19f73076ce',
  },
};
