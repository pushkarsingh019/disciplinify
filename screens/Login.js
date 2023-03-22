import { ScrollView, StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity } from "react-native";
import { useState } from "react";
import applicationState from "../lib/store";
import { useStoreActions } from "easy-peasy";

const Login = ({navigation}) => {

    // state management
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const addUserData = useStoreActions(actions => actions.addUserData);

    const styles = StyleSheet.create({
        h3 : {
            marginHorizontal : 30,
            paddingTop : 100,
            fontSize : 22,
            fontWeight : 600,
            marginBottom : 30
        },
        input : {
            marginHorizontal : 40,
            marginTop : 25,
            padding : 14,
            borderColor : '#000000',
            borderWidth : 1,
            borderRadius : 12,
        },
        button : {
            backgroundColor : '#000000',
            marginHorizontal : 40,
            borderRadius : 12,
            marginVertical : 30,
            padding : 15,
        }
    });

    const eventHandler = event => {
        const userDetails = {
            name,
            email,
            password
        };
        addUserData(userDetails);
        navigation.navigate("Home")
    };


    return(
        <SafeAreaView>
            <Text style={styles.h3}>How would you like to sign up?</Text>
            <TextInput style={styles.input} placeholder="Name" textContentType="name" onChangeText={text => setName(text)} />
            <TextInput style={styles.input} placeholder="Email" textContentType="emailAddress" onChangeText={text => setEmail(text)}/>
            <TextInput style={styles.input} placeholder="password" textContentType="newPassword" secureTextEntry onChangeText={text => setPassword(text)} />
            <TouchableOpacity style={styles.button} onPress={eventHandler}>
                <Text style={{color : "#ffffff", textAlign : "center", fontSize : 16, fontWeight : 600}}>Sign Up</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

export default Login