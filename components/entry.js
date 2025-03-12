import { 
    StyleSheet, 
    View, 
    Text,  
    Dimensions,
  } from "react-native";
import { useContext } from 'react'
import { context } from "./body";
  
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
  

export default function Entry({ item, relationship }) {
    const {gene1, gene2, gene3 } = useContext(context)
    
    // Determine if the relationship color should be applied
    const shouldHighlight = gene1 || gene2 || gene3;

    // Define colors for different relationship types
    const getBackgroundColor = () => {
        if (!shouldHighlight) return "#e7eBeF"; // Default gray if no gene is active
        
        switch (relationship) {
            case "associated": return "#98fb98";
            case "not associated": return "#ff6961";
            case "ambiguous": return "#ffb343";
            default: return "gray";
        }
    };

    return (
        <View style={[styles.entry, { backgroundColor: getBackgroundColor() }]}>
            <Text>{item.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
entry: {
    height: windowHeight * .045,
    width: windowWidth * .4,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
},
text: {

},
});
