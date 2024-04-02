/*import React from "react";
import {View, Text} from "react-native";

function App(){
    return(
        <View>
            <Text>Olá Mundo!</Text>
        </View>
    );
}

export default App;*/

import React, {Component} from'react';
import {View, Text, Image} from'react-native';

class App extends Component{
    render(){
        let curso = 'INFO';

        return(
            <View>
                <Text>Olá Mundo!</Text>
                <Text>Exemplo!</Text>
                <Text style={{color: 'blue', fontSize: 30, margin: 15}}></Text>

                <Image source={{uri: 'coloca a url aqui'}} style = {{width: 300, height: 300}}/>
                <Text>{curso}</Text>
                <MinhaImagem largura = {300} altura = {300} nome = "imagem 1"/>    
            </View>
        );
    
}
}

export default App;

class MinhaImagem extends Component{
    render(){

        let img = 'url da imagem';
        return(
            <View>
            <Image source={{uri: 'coloca a url aqui'}} style = {{width: this.props.largura, height: this.props.largura}}/>
            <Text>{this.props.nome}</Text>
            </View>
        );
    }
}

