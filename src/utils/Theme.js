import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const Aspect = { Width: width, Height: height }

const Colors = {
  Red: '#fc2a22',
  Cinnabar: '#EE4040',
  Orange: '#f96d00',
  Yellow: '#f8e71b',
  Green: '#11ce65',
  PastelGreen: '#78DD55',
  Teal: '#007b3e',
  Blue: '#4a8fe2',
  Purple: '#a102ff',
  Pink: '#ff2751',
  White: '#fff',
  WhiteDark: '#f7f7f7',
  WhiteTransparent: 'rgba(255, 255, 255, 0.5)',
  Black: '#000',
  BlackDark: '#17151b',
  BlackLight: '#4b4b4b',
  BlackTransparent: 'rgba(0, 0, 0, 0.8)',
  Grey: '#bcbcbc',
  GreyLight: '#eee',
  GreyDark: '#919191',
  GoldDrop: '#f67d00',
  OxfordBlue: '#32434D',
  Scorpion: '#5D5D5D',
  CornflowerBlue: '#6195ED',
  Alto: '#D9D9D9',
  Gray: '#909090',
  Emperor: '#545454',
  Denim: '#1C72C7',
  Tamarillo: '#9B0E0E',
  Mahogany: '#5D0909',
  PersianRed: '#CC3333',
  PickledBluewood: '#0e0e0e',
  Trout: '#555862',
  Shark: '#232428',
  Tuna: '#393b41',
  GoldenGrass: '#DEB423',
  MardiGras: '#39003C',
  MardiGras2: '#37013C',
  ElectricViolet: '#940CF1',
  Barossa: '#260128',
  ScarpaFlow: '#555763',
  Atlantis: '#74B62C',
  FunGreen: '#007A43',
  JungleGreen: '#27AE60',
  KaitokeGreen: '#003D22',
  Nobel: '#b7b7b7',
  MineShaft: '#343434',
  Limeade: '#3fba00',
  GuardsmanRed: '#BA0000',
  PirateGold: '#b99000',
  PirateGold2: '#C98300',
  LavenderMagenta: '#F368E0',
  CuriousBlue: '#2E86DE',
  Botticelli: '#C8D6E5',
  Transparent: 'transparent',
  WhiteTranscluent: 'rgba(255, 255, 255, 0.75)',
  BlackTranscluent: 'rgba(0, 0, 0, 0.75)',
  Facebook: '#3b5998',
  Google: '#d54c3f',
  Twitter: '#1da1f2',
  RedLight: '#fe625c',
  RedDark: '#bc2119',
  YellowLight: '#fef3d1',
  RedTranscluent: '#fcf3f2',
  LightningYellow: '#FDC51A',
  Malachite: '#14CF67',
  AlizarinCrimson: '#EB2F23',
  BarleyWhite: '#FFF3D1',
  Tundora: '#444444',
  DoveGray: '#666666',
  DustyGray: '#999999',
  DodgerBlue: '#3C95FB',
  Bittersweet: '#FF725F',
  Fantasy: '#FDF8F8',
  Geyser: '#D0D9E0',
  Emerald: '#4EC892',
  Feijoa: '#8CD47F',
  VividTangerine: '#FF847C',
  Bittersweet2: '#FF6861',
  Flamingo: '#F56A28',
  Thunderbird: '#BC2019',
  Turquoise: '#33DFCA',
  ScienceBlue: '#0275D8'
}

const ThemeColors = {
  Primary: Colors.GoldDrop,
  Secondary: Colors.PigmentGreen,
  Icon: {
    Normal: Colors.Scorpion
  }
}

const Fonts = {
  Roboto: {
    Black: 'Roboto-Black',
    BlackItalic: 'Roboto-BlackItalic',
    Bold: 'Roboto-Bold',
    BoldItalic: 'Roboto-BoldItalic',
    Italic: 'Roboto-Italic',
    Light: 'Roboto-Light',
    LightItalic: 'Roboto-LightItalic',
    Medium: 'Roboto-Medium',
    MediumItalic: 'Roboto-MediumItalic',
    Regular: 'Roboto-Regular',
    Thin: 'Roboto-Thin',
    ThinItalic: 'Roboto-ThinItalic'
  },
  Nunito: {
    BlackItalic: 'Nunito-BlackItalic',
    Black: 'Nunito-Black',
    BoldItalic: 'Nunito-BoldItalic',
    Bold: 'Nunito-Bold',
    ExtraBoldItalic: 'Nunito-ExtraBoldItalic',
    ExtraBold: 'Nunito-ExtraBold',
    ExtraLightItalic: 'Nunito-ExtraLightItalic',
    ExtraLight: 'Nunito-ExtraLight',
    Italic: 'Nunito-Italic',
    LightItalic: 'Nunito-LightItalic',
    Light: 'Nunito-Light',
    Regular: 'Nunito-Regular',
    SemiBoldItalic: 'Nunito-SemiBoldItalic',
    SemiBold: 'Nunito-SemiBold'
  }
}

const UI = {
  Colors,
  ThemeColors,
  Fonts,
  Aspect
}

module.exports = UI
