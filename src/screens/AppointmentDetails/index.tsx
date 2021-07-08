import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import {
  View, ImageBackground, Text, FlatList
} from 'react-native';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';
import { BorderlessButton } from 'react-native-gesture-handler';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png'
import { Member } from '../../components/Member';

export function AppointmentDetails(){
  const members = [
    {
      id: '1',
      username: 'Eduardo Spek',
      avatar_url: 'https://github.com/eduardospek.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Nathan Slek',
      avatar_url: 'https://github.com/rodrigorgtic.png',
      status: 'offline'
    }
  ]

  return (
    <Background>
      <Header 
        title='Detalhes'
        action={
          <BorderlessButton>
            <Fontisto
              name='share'
              size={24}
              color={theme.colors.primary}
            />

          </BorderlessButton>
        }
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenge sem perder uma partida
          </Text>
        </View>

      </ImageBackground>

      <ListHeader 
        title='Jogadores'
        subtitle='Total 3'
      />

      <FlatList 
        data={members}
        keyExtractor= {item => item.id}
        renderItem={({item}) => (
            <Member 
              data={item}
            />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

        <View style={styles.footer}>
          <ButtonIcon 
            title='Entrar na partida'
          />
      </View>

    </Background>
  );
}