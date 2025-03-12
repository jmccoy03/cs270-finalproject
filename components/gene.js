import { 
    StyleSheet, 
    Text, 
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
  } from "react-native";

  import { useContext } from 'react'
  import { context } from "./body";
  
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  

export default function Genes() {
const { gene1, setGene1 } = useContext(context);
const { gene2, setGene2 } = useContext(context);
const { gene3, setGene3 } = useContext(context);


return (
    <SafeAreaView style={styles.body}>
    <TouchableOpacity 
    onPress={() => setGene1(prev => !prev)}
    style={gene1 ? styles.containerHighlighted : styles.container}
    >
        <Text style={styles.text}>CYP3A4</Text>
    </TouchableOpacity>

    <TouchableOpacity 
    onPress={() => setGene2(prev => !prev)}
    style={gene2 ? styles.containerHighlighted : styles.container}
    >
        <Text style={styles.text}>CYP2D6</Text>
    </TouchableOpacity>

    <TouchableOpacity 
    onPress={() => setGene3(prev => !prev)}
    style={gene3 ? styles.containerHighlighted : styles.container}
    >
        <Text style={styles.text}>CYP3A5</Text>
    </TouchableOpacity>
    </SafeAreaView>
);
};

const styles = StyleSheet.create({
body: {
    height: windowHeight * .07,
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
},
container: {
    width: '25%',
    height: '100%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#e7eBeF",
},
containerHighlighted: {
    width: '25%',
    height: '100%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#6E8477",
},
text: {
    fontSize: 16,
},
});
