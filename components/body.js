import { 
    StyleSheet, 
    View, 
    Text, 
    Dimensions,
    SafeAreaView,
    Switch,
  } from "react-native";
  
import { createContext, useState } from 'react';

import Feed from "./outfeed";
import Genes from "./gene";
import Key from "./key"
  
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const context = createContext();

export default function Body() {
    const [gene1, setGene1] = useState(false);
    const [gene2, setGene2] = useState(false);
    const [gene3, setGene3] = useState(false);

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

return (
    <context.Provider value={{ gene1, setGene1, gene2, setGene2, gene3, setGene3, isEnabled }}>
        <SafeAreaView style={styles.body}>
            <View style={styles.subbody}>
                <View style={styles.titlebox}>
                    <Text style={styles.text}>Gene Profile</Text>
                    <Text style={[{textAlign: 'left', flex: 1, fontSize: 10}]}> (press)</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <Text style={[styles.text, { fontSize: 36 }]}>∪</Text>
                        <Switch
                        trackColor={{false: '#14382e', true: "#6E8477"}}
                        thumbColor={isEnabled ? "#e7eBeF" : "#e7eBeF"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        />
                        <Text style={[styles.text, { fontSize: 36 }]}>∩</Text>
                    </View>    
                </View>

                <Genes />
            </View>
            
            <View style={styles.subbody}>
                <View style={[styles.titlebox, { height: '6%' }]}>
                    <Text style={styles.text}>Drug Relationships</Text>
                </View>
                
                <Feed />
                
                <Key />
            </View>
            
        </SafeAreaView>
    </context.Provider>
);
};

const styles = StyleSheet.create({
body: {
    height: windowHeight * .85,
    width: windowWidth,
    alignItems: 'center',
    gap: 20,
},
subbody: {
    width: windowWidth * .95,
    gap: 10,
    padding: 10,
    backgroundColor: "#FFF8E1",
    borderRadius: 30,
    alignItems: "center"
},
titlebox: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingStart: 10,
    paddingEnd: 10,
},
text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#14382e",
},
});
