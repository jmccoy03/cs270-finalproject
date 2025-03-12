import { useState, useEffect, useContext } from "react";
import { StyleSheet, FlatList, RefreshControl } from "react-native";

// import Theme from "@/assets/theme";
import Entry from "./entry";
import { context } from "./body";



const genes = [
    {gene: "CYP3A4", 
        drugs: 
        [{name: "Acetaminophen", relationship: "ambiguous"},
        {name: "Buprenorphine", relationship: "ambiguous"},
        {name: "Fentanyl", relationship: "ambiguous"},
        {name: "Rosuvastatin", relationship: "associated"},
        {name: "Erlotinib", relationship: "associated"},
        {name: "Hydroxychloroquine", relationship: "associated"},
        {name: "Gefitinib", relationship: "not associated"},
        {name: "Donepezil", relationship: "not associated"},
        {name: "Galantamine", relationship: "not associated"},
    ]},
    {gene: "CYP2D6", 
        drugs: 
        [{name: "Aripiprazole", relationship: "ambiguous"},
        {name: "Duloxetine", relationship: "ambiguous"},
        {name: "Escitalopram", relationship: "ambiguous"},
        {name: "Acetaminophen", relationship: "associated"},
        {name: "Galantamine", relationship: "associated"},
        {name: "Fentanyl", relationship: "associated"},
        {name: "Erlotinib", relationship: "not associated"},
        {name: "Hydroxychloroquine", relationship: "not associated"},
        {name: "Buprenorphine", relationship: "not associated"},
    ]},
    {gene: "CYP3A5", 
        drugs: 
        [{name: "Aripiprazole", relationship: "ambiguous"},
        {name: "Gefitinib", relationship: "ambiguous"},
        {name: "Rosuvastatin", relationship: "ambiguous"},
        {name: "Ibuprofen", relationship: "associated"},
        {name: "Morphine", relationship: "associated"},
        {name: "Hydrocodone", relationship: "associated"},
        {name: "Endoxifen", relationship: "not associated"},
        {name: "Galantamine", relationship: "not associated"},
        {name: "4-Hydroxytamoxifen", relationship: "not associated"},
    ]}
];

const entries = [
    { id: "1", name: "Acetaminophen" },
    { id: "2", name: "Buprenorphine" },
    { id: "3", name: "Fentanyl" },
    { id: "4", name: "Rosuvastatin" },
    { id: "5", name: "Erlotinib" },
    { id: "6", name: "Hydroxychloroquine" },
    { id: "7", name: "Gefitinib" },
    { id: "8", name: "Donepezil" },
    { id: "9", name: "Galantamine" },
    { id: "10", name: "Aripiprazole" },
    { id: "11", name: "Duloxetine" },
    { id: "12", name: "Escitalopram" },
    { id: "13", name: "Ibuprofen" },
    { id: "14", name: "Morphine" },
    { id: "15", name: "Hydrocodone" },
    { id: "16", name: "Endoxifen" },
    { id: "17", name: "4-Hydroxytamoxifen" },
];



export default function Feed() {

    const { gene1, gene2, gene3, isEnabled } = useContext(context)
    
    const findRelationship = (drugName) => {
        let relationships = []; // Array to store relationships for selected genes
    
        // Check if gene1 is selected and get its relationship
        if (gene1) {
            const gene = genes.find(g => g.gene === "CYP3A4");
            const drug = gene?.drugs.find(d => d.name === drugName);
            if (drug) {
                relationships.push(drug.relationship); // Store the relationship
            } else {
                relationships.push(null); // If drug is not found, mark it as null
            }
        }
    
        // Check if gene2 is selected and get its relationship
        if (gene2) {
            const gene = genes.find(g => g.gene === "CYP2D6");
            const drug = gene?.drugs.find(d => d.name === drugName);
            if (drug) {
                relationships.push(drug.relationship); // Store the relationship
            } else {
                relationships.push(null); // If drug is not found, mark it as null
            }
        }
    
        // Check if gene3 is selected and get its relationship
        if (gene3) {
            const gene = genes.find(g => g.gene === "CYP3A5");
            const drug = gene?.drugs.find(d => d.name === drugName);
            if (drug) {
                relationships.push(drug.relationship); // Store the relationship
            } else {
                relationships.push(null); // If drug is not found, mark it as null
            }
        }
    
        // DISJOINT: If no relationships were found (i.e., the drug is not present in any selected genes), return "unknown"
        if (isEnabled) {
            if (relationships.length === 0 || relationships.includes(null)) {
                return "unknown";
            }
            // Check if all relationships are the same
            const uniqueRelationships = [...new Set(relationships)];
        
            // If there's only one unique relationship, return it
            if (uniqueRelationships.length === 1) {
                return uniqueRelationships[0]; 
            }
        } else {
            // UNION
            if (relationships.includes("associated")) {
                return "associated";
            } else if (relationships.includes("ambiguous")) {
                return "ambiguous";
            } else if (relationships.includes("not associated")) {
                return "not associated";
            }
        }

        // If there are multiple different relationships, return "unknown"
        return "unknown";
    };
    

    return (
        <FlatList
            data={entries}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Entry item={item} relationship={findRelationship(item.name)} />
            )}
            contentContainerStyle={styles.entries}
            style={styles.entriesContainer}
            numColumns={2}
        />
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  entriesContainer: {
    width: "100%",
  },
  entries: {
    gap: 10,
    alignItems: 'center',
  },
});