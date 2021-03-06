import React, { Component } from 'react';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText
} from './styles';

export default function Menu({ translateY, navigation }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1]
        })
      }}
    >
      <Code>
        <QRCode
          value='https://www.linkedin.com/in/pedrohenrque/'
          color={'#8b10ae'}
          backgroundColor={'#fff'}
          size={80}
        />
      </Code>
      <Nav>
        <NavItem>
          <Icon name='help-outline' size={20} color='#fff' />
          <NavText>Me ajuda</NavText>
        </NavItem>

        <NavItem>
          <Icon name='person-outline' size={20} color='#fff' />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <Icon name='credit-card' size={20} color='#fff' />
          <NavText>Configurar cartão</NavText>
        </NavItem>

        <NavItem onPress={() => navigation.navigate('AppConfig')}>
          <Icon name='smartphone' size={20} color='#fff' />
          <NavText>Configuração do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
