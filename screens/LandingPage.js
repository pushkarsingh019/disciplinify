import { Text, View, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const LandingPage = ({navigation}) => {

    const eventHandler = event => {
        navigation.navigate("Login")
    };

    const styles = StyleSheet.create({
        logo: {
          marginTop : 40,
          marginHorizontal : 70,
          height : 250,
          width : 230,
          borderColor : "#000000",
          borderStyle : "solid",
          borderWidth : 2
        },
        h1 : {
            fontSize : 30,
            fontWeight : 700,
            paddingTop : 40,
            marginHorizontal : 70,
        },
        text : {
            paddingHorizontal : 70,
            paddingVertical : 10,
            fontSize : 20,
            fontWeight : 400
        },
        button : {
            paddingVertical : 10,
            paddingHorizontal : 50,
            backgroundColor : '#000000',
            color : '#ffffff',
            marginHorizontal : 70,
            borderRadius : 12,
            marginTop : 20
        }
      });

    return(
        <View>
            <View style={styles.logo}></View>
            <Text style={styles.h1}>Disciplinify</Text>
            <Text style={styles.text}>is the place to improve</Text>
            <TouchableOpacity style={styles.button} onPress={eventHandler}>
                <Text style={{color : "#ffffff", textAlign : "center", fontSize : 18, fontWeight : 700}}>Get started</Text>
            </TouchableOpacity>
        </View>
    )
};

export default LandingPage;