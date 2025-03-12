import { 
    StyleSheet, 
    View, 
    Text, 
    Dimensions,
    SafeAreaView,
  } from "react-native";
  
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
  
const Header = () => {

return (
    <SafeAreaView style={styles.header}>
        <View style={styles.textBox}>
            <Text style={styles.text}>CS270: Alzheimer's {'\n'}Gene and Drug Relationships</Text>
        </View>
    </SafeAreaView>
);
};

const styles = StyleSheet.create({
header: {
    height: windowHeight * .15,
    width: windowWidth * .925,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
textBox: {
    flex: 1,
    alignItems: "center",
},
text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#FFFFFF",
    textAlign: 'center'
}
});

export default Header;