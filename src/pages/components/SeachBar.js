import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Item, Input, Icon } from 'native-base';
import { } from "react-navigation";

export default class SeachBar extends React.Component {
    constructor(props) {
        super(props)
        state = {
            search: ''
        }
    }

    _handlePress = () => {
        // alert(this.state.search);
    }

    render() {
        return (
            <Header searchBar rounded autoCorrect={false} style={styles.Header}>
                <Item>
                    <Input
                        placeholder="Nome, rua ou telefone do  estabelecimento"
                        onChangeText={text => {
                            this.setState({ search: text })
                        }
                        }
                    />
                    <Icon name="ios-search"
                        //onPress={() => this._handlePress()} 
                        onPress={() => {
                            this.props.navigation.navigate('teste')
                        }} />
                </Item>
            </Header>
        );
    }
}
const styles = StyleSheet.create({
    Header: {
        backgroundColor: '#FFA500',
    },

});



/*
<Header searchBar rounded style={styles.Header}>
<Item>
<Input placeholder="Nome, rua ou telefone do  estabelecimento"
onChangeText={text => {
    this.setState({ seach: text })
}
}

/>
<Icon name="ios-search" />
</Item>
<Button rounded light
onPress={() => this._handlePress()}
>
<Text>C</Text>
</Button>
<Button
title="Ok"
onPress={() => this._handlePress()}
/>

</Header>
*/

/*
<Button iconLeft light
    onPress={() => {
        this.props.navigation.navigate('teste')
    }}>
    <Icon name='arrow-back' />
    <Text>Back</Text>
</Button>

{
    this.state.dados.map(x => (
        <View>
            <Text key={x.id}>id: {x.id}</Text>
            <Text>Nome: {x.nome}</Text>
        </View>
    ))
}
*/
