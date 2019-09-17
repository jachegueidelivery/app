import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Item,
  Input,
  Card,
  CardItem,
  Thumbnail,
} from 'native-base';

import api from '../services/api';

import Foot from './components/Footer';
import imgLoja from '../assets/lojas_americanas.jpg';

export default function Home({navigation}) {
  const [fantasy_name, setFantasy_name] = useState('');
  const [dados, setDados] = useState([]);

  async function companiesSearch() {
    if (fantasy_name === '') {
      alert('Informe o nome do parceiro');
    } else {
      const response = await api.get(`/companies?fantasy_name=${fantasy_name}`);
      setDados(response.data);
    }
  }

  return (
    <Container>
      <Header
        noShadow={true}
        hasTabs={true}
        androidStatusBarColor="#FFA500"
        style={styles.header}>
        <Item style={{borderBottomColor: 'transparent'}}>
          <Body>
            <Title style={styles.txtTitle}>App Delivery</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={styles.txtTitle} name="menu" />
            </Button>
          </Right>
        </Item>
        <Item searchBar rounded style={{borderColor: '#000'}}>
          <Input
            searchBar
            rounded
            style={{color: '#000'}}
            placeholder="Nome, rua ou telefone do  estabelecimento"
            value={fantasy_name}
            onChangeText={setFantasy_name}
          />
          <Icon
            name="ios-search"
            style={{color: '#fff'}}
            //onPress={() => this._handlePress()}
            onPress={() => {
              companiesSearch();
            }}
          />
        </Item>
      </Header>

      <Content padder>
        {dados.map(d => (
          <Card key={d.id}>
            <CardItem header bordered>
              <Left>
                <Thumbnail source={imgLoja} />
                <Body>
                  <Text>{d.company_fantasy_name}</Text>
                  <Text note>(xx)xxxxx-xxxx</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Button
                  iconRight
                  light
                  onPress={() => {
                    navigation.navigate('Products');
                  }}>
                  <Text>Ir para a Loja</Text>
                  <Icon name="arrow-forward" />
                </Button>
              </Body>
            </CardItem>
          </Card>
        ))}
      </Content>
      <Foot />
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
  },
  textContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#FFA500',
    height: 105,
    flexDirection: 'column',
    //borderBottomWidth: 0,
    // borderColor: "#141414",
    // shadowColor: 'black',
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
    elevation: 0,
    borderBottomWidth: 0,
    shadowOpacity: 0,
    borderBottomColor: 'transparent',
  },
  txtTitle: {
    color: '#000000',
  },
  container: {
    flex: 1,
  },
});
