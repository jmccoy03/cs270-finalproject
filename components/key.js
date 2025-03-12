import { 
    StyleSheet, 
    View, 
    Text, 
    Dimensions,
    SafeAreaView,
  } from "react-native";

  
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  

  export default function Key() {

    return (
      <SafeAreaView style={styles.body}>
        <View style={[styles.container, { backgroundColor: 'gray' }]}>
            <Text style={styles.text}>None</Text>
        </View>
        <View style={[styles.container, { backgroundColor: "#98fb98" }]}>
            <Text style={styles.text}>Associated</Text>
        </View>
        <View style={[styles.container, { backgroundColor: '#ffb343' }]}>
            <Text style={styles.text}>Ambiguous</Text>
        </View>
        <View style={[styles.container, { backgroundColor: '#ff6961' }]}>
            <Text style={styles.text}>Not Associated</Text>
        </View>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    body: {
      height: windowHeight * .04,
      width: windowWidth* .9,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      gap: 10,
    },
    container: {
        height: '100%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    text: {
        fontSize: 10,
    },
  });