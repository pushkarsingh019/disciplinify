import { useStoreState } from "easy-peasy";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import store from "../lib/store";

const Home = ({navigation}) => {

    const userData = useStoreState(state => state.userData)
    const {name} = userData;

    const styles = StyleSheet.create({
        horizontalPadding : {
            paddingHorizontal : 25
        },
        date : {
            paddingTop : 28,
            fontSize : 13,
            fontWeight : 500
        },
        h2 : {
            fontSize : 25,
            fontWeight : 600,
        }
    });
    const dateOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const today = new Date().toLocaleString('en-US', dateOptions);

    const hour = new Date().getHours();
    let greeting;
    if (hour >= 5 && hour < 12) {
        greeting = 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good Afternoon';
    } else if (hour >= 18 && hour < 22) {
        greeting = 'Good Evening';
    } else {
        greeting = 'Good Night';
    }


    return(
        <SafeAreaView style={styles.horizontalPadding}>
            <Text style={styles.date}>{today}</Text>
            <Text style={styles.h2}>{greeting}, {name}</Text>
            <View style={{width : 300, height : 150, backgroundColor : "#D9D9D9", marginTop : 25, borderRadius : 12}} />
        </SafeAreaView>
    )
};

export default Home