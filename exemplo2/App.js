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
            </View>
        );
    
}
}

export default App;


