import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    Container, Header, Content, Tab, Tabs,
    Left, Body, Right, Button, Icon, Title,
    Text, Item, Input,
} from 'native-base';

//export default class header extends Component {
    const header = () => (
   // render() {
      //  return (
            
                <Header androidStatusBarColor="#FFA500" style={styles.Header}>
                    <Right />
                    <Body>
                        <Title style={styles.txtTitle}>App Delivery</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
               

        );
  //  }
//}

export default header;

const styles = StyleSheet.create({
    Header: {
        paddingLeft: 10,
        backgroundColor: '#FFA500',
    },
    txtTitle: {
        color: '#000000'
    }
});
