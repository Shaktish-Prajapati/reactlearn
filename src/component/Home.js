import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import { Button } from 'react-native';

const Home = ({navigation}) => {
    return (
        <View>
            <Text>It home man!!</Text>
            <Button title='clickMe' onPress={()=>{navigation.navigate('Setting')}} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
