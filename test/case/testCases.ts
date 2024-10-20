// testCases.ts
import { credConfig } from '../../src/cred/credConfig';

export const testCases = {
  0: {
    title: credConfig[0].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) > 1,
  },
  1: {
    title: credConfig[1].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  2: {
    title: credConfig[2].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  3: {
    title: credConfig[3].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  4: {
    title: credConfig[4].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  5: {
    title: credConfig[5].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  6: {
    title: credConfig[6].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  7: {
    title: credConfig[7].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  8: {
    title: credConfig[8].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  9: {
    title: credConfig[9].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  10: {
    title: credConfig[10].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  11: {
    title: credConfig[11].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  12: {
    title: credConfig[12].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  13: {
    title: credConfig[13].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  14: {
    title: credConfig[14].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) > 1,
  },
  15: {
    title: credConfig[15].title,
    addresses: {
      valid: '0xeA582C88bD3Da058F93d5cdf5908E6c05782655B',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) > 1,
  },
  16: {
    title: credConfig[16].title,
    addresses: {
      valid: '0x3FC232c07DCF2759AF9270f0a7D3856B9E8CCcBA',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  17: {
    title: credConfig[17].title,
    addresses: {
      valid: '0x919A957A54d0688690722bfD3AD4E71b030FD6FB',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  18: {
    title: credConfig[18].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  19: {
    title: credConfig[19].title,
    addresses: {
      valid: '0x93a2EF2b30387CAF37e0890eA154542300E4E47c',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  20: {
    title: credConfig[20].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  21: {
    title: credConfig[21].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  22: {
    title: credConfig[22].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  23: {
    title: credConfig[23].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  24: {
    title: credConfig[24].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  25: {
    title: credConfig[25].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  26: {
    title: credConfig[26].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  27: {
    title: credConfig[27].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  28: {
    title: credConfig[28].title,
    addresses: {
      valid: '0x68024d7F576b8c67f68Cc23cd261c7725D37B598',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  29: {
    title: credConfig[29].title,
    addresses: {
      valid: '0x38498892e397a705cae0a322Bcf7644ECB9cBc91',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  30: {
    title: credConfig[30].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  31: {
    title: credConfig[31].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  32: {
    title: credConfig[32].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  33: {
    title: credConfig[33].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  34: {
    title: credConfig[34].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  35: {
    title: credConfig[35].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  36: {
    title: credConfig[36].title,
    addresses: {
      valid: '0xF3E36e557A325AF44aCc5834759055819e22Aece',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  37: {
    title: credConfig[37].title,
    addresses: {
      valid: '0x9949648C4e91257bcE17eAd15Bc747aEEB8CED33',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  38: {
    title: credConfig[38].title,
    addresses: {
      valid: '0x6D83cac25CfaCdC7035Bed947B92b64e6a8B8090',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => data === '',
  },
  39: {
    title: credConfig[39].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  40: {
    title: credConfig[40].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  41: {
    title: credConfig[41].title,
    addresses: {
      valid: '0x7bfee91193d9df2ac0bfe90191d40f23c773c060',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  42: {
    title: credConfig[42].title,
    addresses: {
      valid: '0x7bfee91193d9df2ac0bfe90191d40f23c773c060',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  43: {
    title: credConfig[43].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  44: {
    title: credConfig[44].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  45: {
    title: credConfig[45].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  46: {
    title: credConfig[46].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  47: {
    title: credConfig[47].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  48: {
    title: credConfig[48].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  49: {
    title: credConfig[49].title,
    addresses: {
      valid: '0x32B8E1AE0af3F8f335F59A191617aB7A0885f6a0',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  50: {
    title: credConfig[50].title,
    addresses: {
      valid: '0x8eFaBD92C956d75AD725A4056a40989802e58Be9',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
  51: {
    title: credConfig[51].title,
    addresses: {
      valid: '0x0c298a54de2572BA097DBe7BAbe4A3Aae238eF05',
      invalid: '0xb7Caa0ed757bbFaA208342752C9B1c541e36a4b9',
    },
    expectedDataCheck: (data: string) => parseInt(data) >= 1,
  },
};

export type TestCase = {
  title: string;
  addresses: {
    valid: string;
    invalid?: string;
  };
  expectedDataCheck: (data: string) => boolean;
};
