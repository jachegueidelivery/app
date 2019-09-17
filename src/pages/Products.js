import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
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
  CardItem,
  Thumbnail,
  Accordion,
  View,
} from 'native-base';

import api from '../services/api';
import Foot from './components/Footer';
import imgLoja from '../assets/lojas_americanas.jpg';

//const products = api.get('/companies/1');
const dataArray = [{title: 'title 1', content: 'O conteúdo vai aqui!'}];

export default function Products(_renderHeader, _renderContent) {
  // name(() => {});

  async function _renderHeader(item, expanded) {
    return (
      <CardItem
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#FFF',
          //borderRadius: 10,
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          //borderBottomColor: '#FFF',
        }}>
        <Left>
          <Thumbnail square source={imgLoja} />
          <Body>
            <Text>NativeBase</Text>
            <Text note>Restam 10 Kg</Text>
          </Body>
        </Left>

        <Right>
          <Text style={{paddingRight: 10}}>R$ 0,00</Text>
        </Right>

        {expanded ? (
          <Icon
            style={{fontSize: 18, fontSize: 30, color: '#4682B4'}}
            type="AntDesign"
            name="minuscircleo"
          />
        ) : (
          <Icon
            style={{fontSize: 18, fontSize: 30, color: '#FF8C00'}}
            type="AntDesign"
            name="pluscircleo"
          />
        )}
      </CardItem>
    );
  }

  async function _renderContent(item) {
    return (
      <View style={{backgroundColor: '#DCDCDC'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              //backgroundColor: "#DCDCDC",
              paddingRight: 2,
              paddingLeft: 2,
              fontStyle: 'italic',
            }}>
            Quantidade
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
              <Icon
                style={{
                  fontSize: 20,
                  paddingLeft: 5,
                  paddingRight: 5,
                  color: '#FFA500',
                }}
                type="AntDesign"
                name="minuscircle"
              />
            </TouchableOpacity>
            <Text>5</Text>
            <TouchableOpacity>
              <Icon
                style={{fontSize: 20, paddingLeft: 5, color: '#FFA500'}}
                type="AntDesign"
                name="pluscircle"
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <Text style={{textAlign: 'right', paddingRight: 10}}>
              Valor á pagar = R$ 0,00
            </Text>
          </View>
        </View>
        <View style={{margin: 5}}>
          <Item style={{height: 30, backgroundColor: '#FFF'}} rounded>
            <Input placeholder="Você deseja fazer alguma observação?" />
          </Item>
        </View>
      </View>
    );
  }

  return (
    <Container>
      <Header androidStatusBarColor="#FFA500" style={styles.header}>
        <Left>
          <Button
            transparent
            onPress={() => {
              this.props.navigation.navigate('home');
            }}>
            <Icon style={styles.iconHeader} name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={styles.iconHeader}>Produtos</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon style={styles.iconHeader} type="AntDesign" name="caretdown" />
          </Button>
          <Button transparent>
            <Icon style={styles.iconHeader} type="AntDesign" name="eyeo" />
          </Button>
          <Button transparent>
            <Icon style={styles.iconHeader} name="more" />
          </Button>
        </Right>
      </Header>

      <Content padder>
        <Accordion
          dataArray={dataArray}
          animation={false}
          expanded={true}
          // renderHeader={this._renderHeader}
          // renderContent={this._renderContent}
        />
      </Content>
      <Foot />
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFA500',
    //borderBottomColor: 'transparent',
  },
  iconHeader: {
    color: '#000000',
  },
});
