const options = require("./config"); //options from config.js

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  lineClamp: require("@tailwindcss/line-clamp"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Source Sans Pro", "sans-serif"],
      body: ["Source Sans Pro", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      spectral: ["Spectral SC", "serif"],
    },
    fontSize: {
      "2xs": "11px",
      12: "12px",
      sm: "12.6863px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px",
      9: "9px",
      10: "10px",
      11: "11px",
      13: "13px",
      17: "17px",
      18: "18px",
      21: "21px",
      14: "14px",
      15: "15px",
      "5sm": "14.8px",
      "6sm": "14.8007px",
      "7sm": "15px",
      base: "16px",
      20: "20px",
      xl: "21.1439px",
      22: "22px",
      24: "24px",
      25: "25px",
      26: "26px",
      28: "28px",
      30: "30px",
      32: "32px",
      36: "36px",
      40: "40px",
      50: "50px",
      56: "56px",
      64: "64px",
    },
    // lineHeight: {
    //   '2': '13px',
    //   '3': '15px',
    //   '4': '16px',
    //   '5': '17px',
    //   '6': '18px',
    //   '7': '18.6px',
    //   '8': '19px',
    //   '9': '20px',
    //   '10': '22px',
    //   '11': '23px',
    //   '12': '24px',
    //   '13': '27px',
    //   '14': '28px',
    //   '15': '30px',
    //   '16': '32px',
    //   '17': '42px'
    // },
    letterSpacing: {
      sl: ".019em",
      "01": ".01em",
      wider: ".05em",
      widest: "0.1em",
    },
    colors: {
      transparent: "transparent",
      white: "#fff",
      white1: "#FEFEFE",
      black: "#000",
      "vivid-cerise": "#E11A7D",
      "silver-sand": "#C4C4C4",
      cultured: "#F8F8F8",
      cultured1: "#FAF3F3",
      cultured2: "#F4F4F4",
      cultured3: "#F5F5F5",
      cultured4: "#F7F7F7",
      "davys-grey": "#535353",
      platinum: "#E6E6E6",
      platinum1: "#DEE1E7",
      platinum2: "#E0E1E2",
      platinum3: "#E7E7E7",
      platinum4: "#E3E3E3",
      platinum5: '#E8E8E8',
      platinum6: '#DDDFE7',
      snow: "#FAF9F9",
      snow1: "#FFF8FB",
      "light-steel-blue": "#b7c1d7",
      onyx: "#383838",
      onyx1: "#373736",
      "bright-gray": "#E9EBF1",
      "bright-gray1": "#E9E9E9",
      "bright-gray2": "#E8EBF0",
      "bright-gray3": "#EDEDED",
      "bright-gray4": "#EBEBEB",
      "bright-gray5": "#ECECEC",
      "eerie-black": "#1A1A1A",
      "granite-gray": "#666666",
      "granite-gray1": "#676768",
      "quick-silver": "#A5A5A5",
      "quick-silver1": "#A6A6A6",
      "quick-silver2": "#A3A3A3",
      "quick-silver3": "#9FA1A5",
      "polished-pine": "#54AE86",
      "ruddy-pink": "#DC8E91",
      "light-silver": "#D9D9D9",
      "light-silver1": "#D7D7D7",
      "light-silver2": "#D8D8D8",
      "american-silver": "#CECECE",
      "american-silver1": "#D0D0D0",
      "american-silver2": "#D1D1D1",
      "spanish-gray": "#969696",
      "spanish-gray1": "#9B9B9B",
      "spanish-gray2": "#999999",
      'spanish-gray3': '#9D9D9D',
      "dark-charcoal": "#333333",
      "columbia-blue": "#CDD3DD",
      "columbia-blue1": "#CDDCEB",
      "anti-flash-white": "#F0F0F0",
      "anti-flash-white1": "#F3F3F3",
      "anti-flash-white2": "#EEF0F5",
      "pastel-orange": "#FFB73E",
      jet: "#393333",
      jet1: "#363633",
      jet2: "#363434",
      "go-green": "#0BC15C",
      "black-olive": "#3E3E3E",
      "black-olive1": "#3A3A3A",
      "chinese-black": "#101010",
      "chinese-white": "#E0E0E0",
      gainsboro: "#DADADA",
      gainsboro1: "#DEDEDE",
      gainsboro2: "#DDDEDF",
      gainsboro3: "#E7D7DF",
      gainsboro4: "#DDDDDD",
      gainsboro5: "#D7D9DE",
      gray: "#808080",
      gray1: "#BBBBBB",
      gray2: "#BDBDBD",
      "blue-yonder": "#4267B2",
      "YInMn-blue": "#304989",
      bubbles: "#E4F3FF",
      "alice-blue": "#E9F2FB",
      "slate-gray": "#727F8C",
      independence: "#495765",
      "american-green": "#2EA748",
      "burnished-brown": "#A0786E",
      "dim-gray": "#696969",
      "dim-gray1": "#686777",
      "eerie-black": "#1F1F1F",
      isabelline: "#F0EFEF",
      "azureish-white": "#DDE6EF",
      "dark-gray": "#A9A9A9",
      "dark-gray1": "#AAAAAA",
      "queen-blue": "#477294",
      "japanese-indigo": "#1C3D57",
      "sonic-silver": "#77797D",
      "sonic-silver1": "#7D7575",
      "sonic-silver2": "#7A7A7A",
      "old-silver": "#818285",
      "raisin-black": "#252525",
      "rosso-corsa": "#D90709",
      "silver-foil": "#B0B0B0",
      magnolia: "#FBF4FA",
      lotion: "#FCFCF7",
      quartz: "#4C4C4C",
      "philippine-silver": "#B4B4B4",
      "alice-blue": "#EFF4FB",
      "facebook-blue": "#5269A3",
      "teleqram-blue": "#55A9D8",
      "whatsapp-green": "#5BB452",
      "linkedin-blue": "#2E73AE",
      "twitter-blue": "#77B3EB",
      "google-red": "#DE5145",
      licorice: "#150F10",
      "shadow-blue": "#7E8AA7",
      "dark-purple": "#1C0B3E",
      green: "#00AA4C",
      "purple-plum": "#A34FB1",
      "medium-champagne": "#FFEAA5",
      "maize-crayola": "#FFC94E",
      "lavender-gray": "#BAC2CF",
      charcoal: "#374255"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.9378rem",
        sm: "0.9378rem",
        md: "1.25rem",
        lg: "1.25rem",
        xl: "8rem",
        "2xl": "12.938rem",
      },
    },
    screens: {
      xxs: { min: "200px", max: "320px" },
      // => @media (max-width: 320px) { ... }
      xs: { min: "321px", max: "539px" },
      // => @media (min-width: 322px) { ... }
      sm: { min: "540px", max: "711px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "712px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    margin: {
      auto: "auto",
      0: "0",
      0.13: "0.13px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      5.6: "5.6px",
      5.29: "5.29px",
      5.96: "5.96px",
      6: "6px",
      7: "7px",
      8: "8px",
      8.12: "8.12px",
      8.54: "8.54px",
      9: "9px",
      9.2: "9.2px",
      9.54: "9.54px",
      9.6: "9.6px",
      10: "10px",
      11: "11px",
      11.43: "11.43px",
      12: "12px",
      12.74: "12.74px",
      13: "13px",
      13.04: "13.04px",
      14: "14px",
      15: "15px",
      15.03: "15.03px",
      16: "16px",
      17: "17px",
      18: "18px",
      19: "19px",
      20: "20px",
      21: "21px",
      22: "22px",
      23: "23px",
      24: "24px",
      24.04: "24.04px",
      25: "25px",
      26: "26px",
      27: "27px",
      28: "28px",
      29: "29px",
      30: "30px",
      30.61: "30.61px",
      31: "31px",
      32: "32px",
      33: "33px",
      34: "34px",
      35: "35px",
      36: "36px",
      37: "37px",
      38: "38px",
      39: "39px",
      40: "40px",
      41: "41px",
      42: "42px",
      43.75: "43.75px",
      44: "44px",
      45: "45px",
      46: "46px",
      47: "47px",
      49: "49px",
      50: "50px",
      52: "52px",
      54: "54px",
      55: "55px",
      60: "60px",
      62: "62px",
      66: "66px",
      66.41: "66.41px",
      68: "68px",
      71: "71px",
      73: "73px",
      76: "76px",
      82: "82px",
      85: "85px",
      90: "90px",
      112: "112px",
      120: "120px",
    },
    padding: {
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px",
      9: "9px",
      10: "10px",
      11: "11px",
      12: "12px",
      13: "13px",
      14: "14px",
      14.5: "14.5px",
      15: "15px",
      16: "16px",
      17: "17px",
      18: "18px",
      18.35: "18.35px",
      19: "19px",
      19.01: "19.01px",
      19.11: "19.11px",
      19.23: "19.23px",
      20: "20px",
      21: "21px",
      22: "22px",
      22.71: "22.71px",
      23: "23px",
      23.11: "23.11px",
      24: "24px",
      24.04: "24.04px",
      25: "25px",
      25.66: "25.66px",
      25.32: "25.32px",
      26: "26px",
      27: "27px",
      28: "28px",
      28.2: "28.2px",
      29: "29px",
      30: "30px",
      30.61: "30.61px",
      30.91: "30.91px",
      31: "31px",
      32: "32px",
      33: "33px",
      34: "34px",
      35: "35px",
      36: "36px",
      37: "37px",
      37.29: "37.29px",
      38: "38px",
      39: "39px",
      40: "40px",
      41: "41px",
      42: "42px",
      43: "43px",
      44: "44px",
      45: "45px",
      46: "46px",
      47: "47px",
      47.29: "47.29px",
      48: "48px",
      49: "49px",
      49.99: "49.99px",
      50: "50px",
      51: "51px",
      51.3: "51.3px",
      52: "52px",
      53: "53px",
      54: "54px",
      54.7: "54.7px",
      55: "55px",
      56: "56px",
      58: "58px",
      59: "59px",
      60: "60px",
      61: "61px",
      62: "62px",
      63: "63px",
      64: "64px",
      65: "65px",
      68: "68px",
      69: "69px",
      70: "70px",
      72: "72px",
      73: "73px",
      74: "74px",
      75: "75px",
      79.06: "79.06px",
      80: "80px",
      84: "84px",
      85: "85px",
      90: "90px",
      96: "96px",
      98: "98px",
      100: "100px",
      103.56: "103.56px",
      106: "106px",
      107: "107px",
      110: "110px",
      120: "120px",
      136: "136px",
      147: "147px",
      153: "153px",
      180: "180px",
      227.07: "227.07px",
      250: "250px",
      310: "310px",
      "7per": "7%",
      "14per": "14%",
      "16per": "16%",
      "21per": "21%",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1.2: "1.26667px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      7: "7px",
    },
    borderRadius: {
      none: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      4.2: "4.22878px",
      5: "5px",
      6: "6px",
      7.27: "7.27927px",
      7.32: "7.32252px",
      8: "8px",
      10: "10px",
      11: "11px",
      12: "12px",
      14: "14px",
      15: "15px",
      16: "16px",
      18: "18px",
      20: "20px",
      36: "36px",
      100: "100px",
      1000: "1000px",
      half: "50%",
    },
    width: {
      0: "0",
      auto: "auto",
      1: "1px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      11: "11px",
      12: "12px",
      12.86: "12.86px",
      13.74: "13.74px",
      16: "16px",
      18: "18px",
      18.58: "18.58px",
      20: "20px",
      21: "21px",
      22: "22px",
      23: "23px",
      24: "24px",
      25: "25px",
      26: "26px",
      26.4: "26.4px",
      27: "27px",
      30: "30px",
      32: "32px",
      32.3: "32.3px",
      34: "34px",
      35: "35px",
      36: "36px",
      37: "37px",
      38: "38px",
      40: "40px",
      42: "42px",
      46: "46px",
      47: "47px",
      50: "50px",
      52: "52px",
      54: "54px",
      "52px": "52px",
      "56px": "56px",
      56: "56px",
      59: "59px",
      60: "60px",
      62: "62px",
      65: "65px",
      67: "67px",
      70: "70px",
      72: "72px",
      73: "73px",
      78: "78px",
      80: "80px",
      84: "84px",
      89: "89px",
      "104px": "104px",
      110: "110px",
      112: "112px",
      115: "115px",
      116: "116px",
      "120px": "120px",
      121: "121px",
      "134px": "134px",
      155: "155px",
      156: "156px",
      160: "160px",
      176: "176px",
      188: "188px",
      190: "190px",
      206: "206px",
      216: "216px",
      224: "224px",
      236: "236px",
      263: "263px",
      265: "265px",
      285: '285px',
      286: "286px",
      300: "300px",
      330: "330px",
      372: "372px",
      390: "390px",
      400: "400px",
      452: "452px",
      562: "562px",
      610: "610px",
      784: '784px',
      "18per": "18%",
      "20per": "20%",
      "22per": "22%",
      "23per": "23%",
      "25per": "25%",
      "26per": "26%",
      "30per": "30%",
      "1/3": "33.33%",
      "37per": "37%",
      "40per": "40%",
      "42per": "42%",
      half: "50%",
      "55per": "55%",
      "56per": "56%",
      "60per": "60%",
      "64per": "64%",
      "70per": "70%",
      "75per": "75%",
      "76per": "76%",
      "80per": "80%",
      "90per": "90%",
      "95per": "95%",
      full: "100%",
      maxContent: "max-content",
      min: "min-content",
      calc18: "calc(33.33% - 18px)",
      calc18full: "calc(100% - 18px)",
      calc22: "calc(100% - 22px)",
      calc24: "calc(100% - 24px)",
      calc32: 'calc(100% - 32px)',
      calc34: "calc(100% - 34px)",
      calc40: "calc(100% - 40px)",
      calc84: "calc(100% - 84px)",
      calc80: "calc(100% - 80px)",
      calc89: "calc(100% - 89px)",
      "calc88/2": "calc((100% - 88px)/2)",
      calc104: "calc(100% - 104px)",
      calc112: "calc(100% - 112px)",
      calc115: "calc(100% - 115px)",
      calc121: "calc(100% - 121px)",
      calc390: "calc(100% - 390px)",
    },
    height: {
      auto: "auto",
      0: "0",
      1.6: "1.6px",
      2: "2px",
      4: "4px",
      6: "6px",
      7: "7px",
      8: "8px",
      9: "9px",
      10: "10px",
      11: "11px",
      12: "12px",
      12.86: "12.86px",
      15: "15px",
      16: "16px",
      18: "18px",
      18.58: "18.58px",
      19: "19px",
      20: "20px",
      22: "22px",
      23: "23px",
      24: "24px",
      26: "26px",
      28: "28px",
      30: "30px",
      31: "31px",
      32: "32px",
      34: "34px",
      35: "35px",
      36: "36px",
      40: "40px",
      44: "44px",
      47: "47px",
      48: "48px",
      49: "49px",
      50: "50px",
      52: "52px",
      54: "54px",
      60: "60px",
      64: "64px",
      65: "65px",
      68: "68px",
      70: "70px",
      75: "75px",
      78: "78px",
      84: "84px",
      "85px": "85px",
      87: "87px",
      89: "89px",
      90: "90px",
      97: "97px",
      100: "100px",
      101: "101px",
      110: "110px",
      117: "117px",
      120: "120px",
      121: "121px",
      "126px": "126px",
      128: "128px",
      130: "130px",
      138: "138px",
      "144px": "144px",
      148: "148px",
      150: "150px",
      "155px": "155px",
      156: "156px",
      157: "157px",
      160: "160px",
      162: "162px",
      167: "167px",
      168: "168px",
      169: "169px",
      "180px": "180px",
      190: "190px",
      191: "191px",
      192: "192px",
      194: "194px",
      200: "200px",
      210: "210px",
      213: "213px",
      235: "235px",
      250: "250px",
      256: "256px",
      273: "273px",
      280: "280px",
      288: "288px",
      290: "290px",
      292: "292px",
      294: "294px",
      300: "300px",
      309: "309px",
      310: "310px",
      317: "317px",
      319: "319px",
      320: "320px",
      328: "328px",
      350: "350px",
      353: "353px",
      357: '357px',
      401.6: "401.6px",
      402: "402px",
      420: "420px",
      433: "433px",
      437: '437px',
      496: '496px',
      508: "508px",
      509: "509px",
      517: '517px',
      530: "530px",
      540: "540px",
      557: "557px",
      597: '597px',
      "600px": "600px",
      657: '657px',
      "670px": "670px",
      772: "772px",
      843: "843px",
      "46per": "46%",
      "60per": "60%",
      "86per": "86%",
      full: "100%",
      "79vh": "79vh",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      hcalc: "calc(100vh - 310px)",
      hcalc34: "calc(100% - 34px)",
      hcalc48: "calc(100% - 48px)",
      hcalc49: "calc(100% - 49px)",
      hcalc59: "calc(100% - 59px)",
      half: "50%",
    },
    minWidth: {
      "30px": "30px",
      "65px": "65px",
      91: '91px',
      96: "96px",
      103: "103px",
      120: "120px",
      126: "126px",
      130: "130px",
      134: "134px",
      154: "154px",
      164: "164px",
      183: "183px",
      280: "280px",
      286: "286px",
      290: "290px"
    },
    maxWidth: {
      half: "50%",
      "54per": "54%",
      full: "100%",
    },
    minHeight: {
      "32": '32px',
      "168": '168px'
    },
    maxHeight: {
      "190px": "190px",
      "212px": "212px",
      215: "215px",
      294: "294px",
      300: "300px",
      340: "340px",
      386: "386px",
      500: "500px",
      "700px": "700px",
      "960px": "960px",
      full: "100%"
    },
    // inset: {
    //   '0': '0',
    //   '1': '1px',
    //   '2': '2px',
    //   '3px': '3px',
    //   '4px': '4px',
    //   '5.6': '5.6px',
    //   '6px': '6px',
    //   '7px': '7px',
    //   '8': '8px',
    //   '9': '9px',
    //   '10': '10px',
    //   '13px': '13px',
    //   '14': '14px',
    //   '15px': '15px',
    //   '17': '17px',
    //   '17.9': '17.9px',
    //   '18.2': '18.2px',
    //   '20': '20px',
    //   '22': '22px',
    //   '24px': '24px',
    //   '25': '25px',
    //   '30': '30px',
    //   '30.22': '30.22px',
    //   '33': '33px',
    //   '43': '43px',
    //   '77.7': '77.7px',
    //   '53px': '53px',
    //   '60px': '60px',
    //   '90': '90px',
    //   '147px': '147px',
    //   '3%': '3%',
    //   '40per': '40%',
    //   'half': '50%',
    //   '60per': '60%',
    //   '66per': '66%',
    //   'full': '100%',
    //   'calc11': 'calc(100% + 11px)',
    //   'calc22': 'calc(100% + 22px)'
    // },
    zIndex: {
      0: "0",
      auto: "auto",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
      80: "80",
      90: "90",
      100: "100",
      // '1000': '1000'
    },
    translate: {
      "1/2": "50%",
      5.6: "5.6px",
      30: "30px",
    },
    boxShadow: {
      "badge-shadow": "-2px 0px 3px rgba(0, 0, 0, 0.1)",
      "transparent-shadow": "0px 0px 0px 2px transparent inset",
      "black-shadow": "0px 2px 100px #000000",
      "black-shadow-xs": "0px 2px 10px rgba(0, 0, 0, 0.02)",
      "black-shadow-sm": "0px 1.83063px 9.15315px rgba(0, 0, 0, 0.05)",
      "black-shadow-2sm": "0px 2px 10px rgba(0, 0, 0, 0.05)",
      "black-shadow-3sm": "0px 4px 20px rgba(0, 0, 0, 0.05)",
      "black-shadow-4sm": "0px 30px 30px rgba(0, 0, 0, 0.05)",
      "black-shadow-md": "inset 0px 2px 4px rgba(0, 0, 0, 0.1)",
      "black-shadow-md-": "0px -4px 10px rgba(0, 0, 0, 0.1)",
      "black-shadow-2md": "0px 2px 30px rgba(0, 0, 0, 0.1)",
      "black-shadow-3md": "0px 4px 30px rgba(0, 0, 0, 0.1)",
      "black-shadow-4md": "0px 4px 4px -4px rgba(0, 0, 0, 0.2)",
      "black-shadow-5md": "0px 2px 10px rgba(0, 0, 0, 0.02)",
      "black-shadow-6md": "0px 5px 30px rgba(0, 0, 0, 0.2)",
      "dropdown-shadow": "0px 2px 14px rgba(0, 0, 0, 0.2)",
      "rossoCorsa-shadow-xs": "0px 3px 7px rgba(217, 7, 9, 0.2)",
      "rossoCorsa-shadow-2xs": "0px 10px 10px -5px rgba(217, 7, 9, 0.2)",
      "rossoCorsa-shadow-sm": "0px 4px 4px rgba(217, 7, 9, 0.23)",
      "rossoCorsa-shadow-md": "0px 1px 3px rgba(217, 7, 9, 0.3)",
      "rossoCorsa-shadow-lg": "0px 25px 60px -10px rgba(217, 7, 9, 0.25)",
      "fashion-fuchsia": "0px 4px 4px rgba(217, 7, 158, 0.23)",
      "gogreen-shadow": "0px 4px 4px rgba(11, 193, 92, 0.1)",
      "gogreen-shadow-xs": "0px 4px 4px rgba(11, 193, 92, 0.23)",
      "gray-shadow": "0px 4px 4px rgba(129, 123, 123, 0.23)",
      "american-green-xs": "0px 4px 4px rgba(46, 167, 72, 0.23)",
      "lavender-gray-lg": "0px 4px 4px rgba(186, 194, 207, 0.54)"
    },
    dropShadow: {
      "black-shadow-2sm": "0px 2px 10px rgba(0, 0, 0, 0.05)",
      "black-shadow-3sm": "0px 2.11439px 10.572px rgba(0, 0, 0, 0.05)",
      "black-shadow-md": "0px 3px 3px rgba(0, 0, 0, 0.25)",
      "rossoCorsa-shadow": "0px 4px 4px rgba(217, 7, 9, 0.23)",
      "gogreen-shadow": "0px 4px 4px rgba(11, 193, 92, 0.1)",
    },
    backgroundImage: {
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      "features-pattern": "url('/img/kosmetika-slider.jpg')",
      "category-pattern": "url('/img/cat-background.svg')",
      "register-pattern": "url('/img/register.png')",
      "flash-linear": "linear-gradient(120deg, #E11A7D 0%, #6C7FE0 100%)",
      "current-flash-linear": "linear-gradient(0deg, #FFE59A 0%, #FFFFD5 100%)",
      "badge-pattern": "url('/img/badge.svg')"
    },
    lineClamp: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      15: "15",
    },
    // gap: {
    //   '24': '24px',
    //   '29': '29px',
    //   '30': '30px',
    //   '30.03': '30.03px',
    //   '32.71': '32.71px',
    //   '36': '36px',
    //   '39': '39px',
    //   '100': '100px'
    // }
  },
  plugins: [require("tailwindcss/plugin"), require("@tailwindcss/line-clamp")],
};
