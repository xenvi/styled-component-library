import React from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native'
import {ComponentMeta, ComponentStory} from '@storybook/react';

import WaveSVG from './WaveSVG';

export default {
  title: 'components/WaveSVG',
  component: WaveSVG,
} as ComponentMeta<typeof WaveSVG>;

export const FullWidth: ComponentStory<typeof WaveSVG> = args => (
  <WaveSVG {...args} />
);

const styles = StyleSheet.create({
    svgCurve: {
      position: 'absolute',
      bottom: 0,
      width: Dimensions.get('window').width,
    },
});

const screen = Dimensions.get('screen')

FullWidth.args = {
    customStyles: [styles.svgCurve, { width: screen.width }],
    customBgColor: "#124675",
    customWavePattern: "M0,192L60,202.7C120,213,240,235,360,234.7C480,235,600,213,720,186.7C840,160,960,128,1080,112C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
};
