import React from 'react';
import {
  Image
} from 'react-native';

import { styles } from './styles';

export function GuildIcon(){
    const uri = 'https://pbs.twimg.com/media/E1ScfE6WUAEVsw8.png'
  return (
    <Image
        source={{uri}}
        style={styles.image}
        resizeMode='cover'
    />
  );
}