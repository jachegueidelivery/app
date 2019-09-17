import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    Container, Header, Content, Footer, FooterTab,
    Button, Icon, Text, Title
} from 'native-base';

export default class footer extends Component {
    render() {
        return (
            <View>
                <Footer >
                    <FooterTab style={styles.foot}>
                        <Title style={styles.textfooter}>
                            Gerenciador de delivery - (xx)xxxxx-xxxx 
                        </Title>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    foot: {
        backgroundColor: '#FFA500',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,

    },
    textfooter: {
        color: '#000',
        fontSize: 20,
    }
});

/*
 <Footer>
                    <FooterTab style={styles.Footer}>
                        <Text style={styles.textFooter}>Gerenciador de delivery</Text>
                    </FooterTab>
                </Footer>
*/