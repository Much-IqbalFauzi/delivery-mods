import { StyleSheet, PixelRatio } from 'react-native'
import StyleProcessing from '@utils/StyleProcessing'
import { Appearance } from '@utils'

const Text = [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36]
const TextDecoration = [{ key: 'Underline', val: 'underline' }]
const TextStyle = [{ key: 'Italic', val: 'italic' }]
const Flex = [1, 2, 3, 4, 5, 6]
const Height = [0, 2.5, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 240, 280, 320, 360, 400]
const HeightAspect = [{ key: 1, val: null }, { key: 2, val: 2 }, { key: 3, val: 3 }, { key: 4, val: 4 }, { key: 5, val: 5 }]
const Width = [0, 5, 10, 15, 20, 25, 30 , 35 , 40 , 45, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 240, 280, 320, 360, 400]
const WidthAspect = [{ key: 1, val: null }, { key: 2, val: 2 }, { key: 3, val: 3 }, { key: 4, val: 4 }, { key: 5, val: 5 }]
const Margin = [0, 5, 10, 15, 20, 25, 30]
const MarginV = [5, 10, 15, 20, 25, 30]
const MarginV_ = [-5, -10, -15, -20, -25, -30]
const MarginH = [5, 10, 15, 20, 25, 30]
const MarginH_ = [-5, -10, -15, -20, -25, -30]
const MarginTop = [2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
const MarginLeft = [2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
const MarginBottom = [2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
const MarginRight = [2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
const Padding = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
const PaddingV = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
const PaddingV_ = [-5, -10, -15, -20, -25, -30]
const PaddingH = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
const PaddingH_ = [-5, -10, -15, -20, -25, -30]
const PaddingTop = [2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180]
const PaddingLeft = [2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180]
const PaddingBottom = [2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180]
const PaddingRight = [2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180]
const Top = [0, 5, 10, 15]
const Bottom = [0, 5, 10, 15]
const Left = [0, 5, 10, 15]
const Right = [0, 5, 10, 15]
const Zindex = [1, 2, 3, 999, 9999, 99999, 999999, 9999999, 99999999, 999999999, 9999999999]
const BorderRadius = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

// // console.log(PixelRatio.getPixelSizeForLayoutSize(26.562945))

const Common = {
  FontPrimary: {
    fontFamily: Appearance.Fonts.Nunito.Regular,
    color: Appearance.Colors.DoveGray
  },
  FontPrimaryBlack: {
    fontFamily: Appearance.Fonts.Nunito.Black,
    color: Appearance.Colors.DoveGray
  },
  FontPrimaryBlackItalic: {
    fontFamily: Appearance.Fonts.Nunito.BlackItalic,
    color: Appearance.Colors.DoveGray
  },
  FontPrimaryBold: {
    fontFamily: Appearance.Fonts.Nunito.Bold,
    color: Appearance.Colors.DoveGray
  },
  FontPrimaryBoldItalic: {
    fontFamily: Appearance.Fonts.Nunito.BoldItalic,
    color: Appearance.Colors.DoveGray
  },
  FontPrimaryItalic: {
    fontFamily: Appearance.Fonts.Nunito.Italic,
    color: Appearance.Colors.DoveGray
  },
  FontPrimaryLight: {
    fontFamily: Appearance.Fonts.Nunito.Light,
    color: Appearance.Colors.DoveGray
  },
  FontPrimaryLightItalic: {
    fontFamily: Appearance.Fonts.Nunito.LightItalic,
    color: Appearance.Colors.DoveGray
  },
  FontPrimaryMedium: {
    fontFamily: Appearance.Fonts.Nunito.Medium,
    color: Appearance.Colors.DoveGray
  },
  FontPrimaryMediumItalic: {
    fontFamily: Appearance.Fonts.Nunito.MediumItalic,
    color: Appearance.Colors.DoveGray
  },
  FontPrimaryRegular: {
    fontFamily: Appearance.Fonts.Nunito.Regular,
    color: Appearance.Colors.DoveGray
  },
  FontPrimaryThin: {
    fontFamily: Appearance.Fonts.Nunito.Thin,
    color: Appearance.Colors.DoveGray
  },
  FontPrimaryThinItalic: {
    fontFamily: Appearance.Fonts.Nunito.ThinItalic,
    color: Appearance.Colors.DoveGray
  },

  TextHeader: {
    fontFamily: Appearance.Fonts.Nunito.Regular,
    color: Appearance.Colors.DoveGray,
    fontSize: 24
  },
  TextTitle: {
    fontFamily: Appearance.Fonts.Nunito.Regular,
    color: Appearance.Colors.DoveGray,
    fontSize: 20
  },
  TextSubHeader: {
    fontFamily: Appearance.Fonts.Nunito.Regular,
    color: Appearance.Colors.DoveGray,
    fontSize: 16
  },
  TextBody3: {
    fontFamily: Appearance.Fonts.Nunito.Medium,
    color: Appearance.Colors.DoveGray,
    fontSize: 14
  },
  TextBody2: {
    fontFamily: Appearance.Fonts.Nunito.Medium,
    color: Appearance.Colors.DoveGray,
    fontSize: 14
  },
  TextBody1: {
    fontFamily: Appearance.Fonts.Nunito.Regular,
    color: Appearance.Colors.DoveGray,
    fontSize: 14
  },
  TextCaption: {
    fontFamily: Appearance.Fonts.Nunito.Regular,
    color: Appearance.Colors.DoveGray,
    fontSize: 12
  },
  TextSmall: {
    fontFamily: Appearance.Fonts.Nunito.Regular,
    color: Appearance.Colors.DoveGray,
    fontSize: 10
  },
  TextExtraSmall: {
    fontFamily: Appearance.Fonts.Nunito.Regular,
    color: Appearance.Colors.DoveGray,
    fontSize: 8
  },
  TextButton: {
    fontFamily: Appearance.Fonts.Nunito.Regular,
    color: Appearance.Colors.DoveGray,
    fontSize: 14
  },

  Text: {
    fontFamily: Appearance.Fonts.Nunito.Regular,
    color: Appearance.Colors.DoveGray
  },
  TextBold: {
    fontFamily: Appearance.Fonts.Nunito.Bold,
    fontWeight: 'bold'
  },
  TextNormal: {
    fontFamily: Appearance.Fonts.Nunito.Regular,
    fontWeight: '400'
  },
  TextBlack: {
    fontFamily: Appearance.Fonts.Nunito.Black
  },
  TextLeft: {
    textAlign: 'left'
  },
  TextCenter: {
    textAlign: 'center'
  },
  TextRight: {
    textAlign: 'right'
  },
  FlexCol: {
    flexDirection: 'column'
  },
  FlexRow: {
    flexDirection: 'row'
  },
  FlexCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  FlexStartCenter: {
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  FlexCenterStart: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  FlexEndCenter: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  FlexCenterEnd: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  FlexAlignCenter: {
    alignItems: 'center'
  },
  FlexAlignStart: {
    alignItems: 'flex-start'
  },
  FlexAlignEnd: {
    alignItems: 'flex-end'
  },
  FlexContentCenter: {
    justifyContent: 'center'
  },
  FlexContentStart: {
    justifyContent: 'flex-start'
  },
  FlexContentEnd: {
    justifyContent: 'flex-end'
  },
  FlexContentBetween: {
    justifyContent: 'space-between'
  },
  FlexContentAround: {
    justifyContent: 'space-around'
  },
  FlexContentEvenly: {
    justifyContent: 'space-evenly'
  },
  FlexWrap: {
    flexWrap: 'wrap'
  },
  FlexAbs: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  AlignStart: {
    alignSelf: 'flex-start'
  },
  AlignEnd: {
    alignSelf: 'flex-end'
  },
  Container: {
    flexGrow: 1,
    paddingBottom: 0
  },
  ContainerGap: {
    flexGrow: 1,
    paddingBottom: 25
  },
  ContainerGap2: {
    flexGrow: 1,
    paddingBottom: 50
  },
  ContainerGap3: {
    flexGrow: 1,
    paddingBottom: 75
  },
  ContainerGap4: {
    flexGrow: 1,
    paddingBottom: 100
  },
  ContainerGap5: {
    flexGrow: 1,
    paddingBottom: 125
  },
  ContainerGap6: {
    flexGrow: 1,
    paddingBottom: 150
  },
  Border1: {
    borderWidth: 1
  },
  Border2: {
    borderWidth: 2
  },
  Border3: {
    borderWidth: 3
  },
  BorderLight: {
    borderWidth: 0.2
  },
  BorderTop1: {
    borderTopWidth: 1
  },
  BorderRightLight: {
    borderRightWidth: 1
  },
  BorderRight1: {
    borderRightWidth: 1
  },
  BorderBotLight: {
    borderBottomWidth: 0.2
  },
  BorderBot1: {
    borderBottomWidth: 1
  },
  BorderLeftLight: {
    borderLeftWidth: 0.2
  },
  BorderLeft1: {
    borderLeftWidth: 1
  },
  PosRel: {
    position: 'relative'
  },
  PosAbs: {
    position: 'absolute'
  },
  PosAbsFull: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  PosAbsTop: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0
  },
  PosAbsBot: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0
  },
  Hidden: {
    width: 0,
    height: 0,
    overflow: 'hidden'
  },
  OverflowHidden: {
    overflow: 'hidden'
  },
  BoxShadowOne: {
    shadowColor: '#000',
    shadowOffset: {
    	width: 0,
    	height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  BoxShadow: {
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: Appearance.Colors.Grey,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderColor: Appearance.Colors.Black
  },
  BorderBottomGrey: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: Appearance.Colors.Grey,
    shadowOpacity: 0.5
  },
  TriangleLeft: {
    position: 'absolute',
    left: -10,
    top: 7.5,
    width: 0,
    height: 0,
    borderTopColor: 'transparent',
    borderTopWidth: 5,
    borderRightWidth: 10,
    borderRightColor: Appearance.Colors.Green,
    borderBottomWidth: 5,
    borderBottomColor: 'transparent'
  },
  Transform1_: {
    transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }]
  },
  WidthFull: {
    width: '100%'
  },
  PaddingR0: {
    paddingRight: 0
  }
}

StyleProcessing.ListArr(Text, ({ key, value }) => {
  Common[`Text${key + 1}`] = { fontSize: value }
})
StyleProcessing.List(Appearance.Colors, ({ key, value }) => {
  Common[`Text${key}`] = { color: value }
})
StyleProcessing.ListArr(TextDecoration, ({ value }) => {
  Common[`TextDecoration${value.key}`] = { textDecorationLine: value.val }
})
StyleProcessing.ListArr(TextStyle, ({ value }) => {
  Common[`TextStyle${value.key}`] = { fontStyle: value.val }
})
StyleProcessing.List(Appearance.Colors, ({ key, value }) => {
  Common[`Border${key}`] = { borderColor: value }
})
StyleProcessing.List(Appearance.Colors, ({ key, value }) => {
  Common[`Bg${key}`] = { backgroundColor: value }
})
StyleProcessing.ListArr(Flex, ({ value }) => {
  Common[`Flex${value}`] = { flex: value }
})
StyleProcessing.ListArr(Height, ({ key, value }) => {
  Common[`H${key}`] = { height: value }
})
StyleProcessing.ListArr(HeightAspect, ({ value }) => {
  Common[`HA${value.key}`] = { height: !value.val ? Appearance.Aspect.Width : Appearance.Aspect.Width / value.val }
})
StyleProcessing.ListArr(Width, ({ key, value }) => {
  Common[`W${key}`] = { width: value }
})
StyleProcessing.ListArr(WidthAspect, ({ value }) => {
  Common[`WA${value.key}`] = { width: !value.val ? Appearance.Aspect.Width : Appearance.Aspect.Width / value.val }
})
StyleProcessing.ListArr(Margin, ({ key, value }) => {
  Common[`Margin${key}`] = { margin: value }
})
StyleProcessing.ListArr(MarginV, ({ key, value }) => {
  Common[`MarginV${key + 1}`] = { marginVertical: value }
})
StyleProcessing.ListArr(MarginV_, ({ key, value }) => {
  Common[`MarginV${key + 1}_`] = { marginVertical: value }
})
StyleProcessing.ListArr(MarginH, ({ key, value }) => {
  Common[`MarginH${key + 1}`] = { marginHorizontal: value }
})
StyleProcessing.ListArr(MarginH_, ({ key, value }) => {
  Common[`MarginH${key + 1}_`] = { marginHorizontal: value }
})
StyleProcessing.ListArr(MarginTop, ({ key, value }) => {
  Common[`MarginT${key + 1}`] = { marginTop: value }
})
StyleProcessing.ListArr(MarginLeft, ({ key, value }) => {
  Common[`MarginL${key + 1}`] = { marginLeft: value }
})
StyleProcessing.ListArr(MarginBottom, ({ key, value }) => {
  Common[`MarginB${key + 1}`] = { marginBottom: value }
})
StyleProcessing.ListArr(MarginRight, ({ key, value }) => {
  Common[`MarginR${key + 1}`] = { marginRight: value }
})
StyleProcessing.ListArr(Padding, ({ key, value }) => {
  Common[`Padding${key}`] = { padding: value }
})
StyleProcessing.ListArr(PaddingV, ({ key, value }) => {
  Common[`PaddingV${key + 1}`] = { paddingVertical: value }
})
StyleProcessing.ListArr(PaddingV_, ({ key, value }) => {
  Common[`PaddingV${key + 1}_`] = { paddingVertical: value }
})
StyleProcessing.ListArr(PaddingH, ({ key, value }) => {
  Common[`PaddingH${key + 1}`] = { paddingHorizontal: value }
})
StyleProcessing.ListArr(PaddingH_, ({ key, value }) => {
  Common[`PaddingH${key + 1}_`] = { paddingHorizontal: value }
})
StyleProcessing.ListArr(PaddingTop, ({ key, value }) => {
  Common[`PaddingT${key + 1}`] = { paddingTop: value }
})
StyleProcessing.ListArr(PaddingLeft, ({ key, value }) => {
  Common[`PaddingL${key + 1}`] = { paddingLeft: value }
})
StyleProcessing.ListArr(PaddingBottom, ({ key, value }) => {
  Common[`PaddingB${key + 1}`] = { paddingBottom: value }
})
StyleProcessing.ListArr(PaddingRight, ({ key, value }) => {
  Common[`PaddingR${key + 1}`] = { paddingRight: value }
})
StyleProcessing.ListArr(Top, ({ key, value }) => {
  Common[`Top${key}`] = { top: value }
})
StyleProcessing.ListArr(Bottom, ({ key, value }) => {
  Common[`Bottom${key}`] = { bottom: value }
})
StyleProcessing.ListArr(Left, ({ key, value }) => {
  Common[`Left${key}`] = { left: value }
})
StyleProcessing.ListArr(Right, ({ key, value }) => {
  Common[`Right${key}`] = { right: value }
})
StyleProcessing.ListArr(Zindex, ({ key, value }) => {
  Common[`Z${key}`] = { zIndex: value }
})
StyleProcessing.ListArr(BorderRadius, ({ key, value }) => {
  Common[`BorderRadius${key + 1}`] = { borderRadius: value }
})
StyleProcessing.ListArr(BorderRadius, ({ key, value }) => {
  Common[`BorderRadiusTop${key + 1}`] = {
    borderTopLeftRadius: value,
    borderTopRightRadius: value
  }
})
StyleProcessing.ListArr(BorderRadius, ({ key, value }) => {
  Common[`BorderRadiusBot${key + 1}`] = {
    borderBottomLeftRadius: value,
    borderBottomRightRadius: value
  }
})

export default StyleSheet.create(Common)
