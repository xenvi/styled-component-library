import React from 'react'
import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

export type WaveSVGProps = {
  customStyles: object,
  customBgColor: string,
  customWavePattern: string,
};

const WaveSVG = ({ customStyles, customBgColor, customWavePattern }: WaveSVGProps) => {
  const originalHeight = 320
  const originalWidth = 1440
  const aspectRatio = originalWidth / originalHeight
  return (
    <View
      style={[
        customStyles,
        { backgroundColor: customBgColor, width: '100%', aspectRatio },
      ]}
    >
      <Svg
        height="100%"
        width="100%"
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}
        style={{ position: 'absolute', bottom: '100%' }}
      >
        <Path fill={customBgColor} d={customWavePattern} />
      </Svg>
    </View>
  )
}

export default WaveSVG
