import { useState } from "react";
import { Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Home = ({showSort, setShowSort, data, fetchData}) => {

    const [search, setSearch] = useState();

    return (
        <View>
            <Modal
                visible={showSort}
                transparent
                onRequestClose={()=>setShowSort(false)} // trên android có nút quay lại để thoát
            >
                <View style={styles.modal_container}>
                <View style={styles.modal_box}>
                    <TouchableOpacity
                        onPress={() => {setShowSort(!showSort)}}
                    >
                        <Text style={styles.textSort}>
                            Ascending 
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {setShowSort(!showSort)}}
                    >
                        <Text style={styles.textSort}>
                            Descending
                        </Text>
                    </TouchableOpacity>
                </View>
                </View>
            </Modal> 

            <View style={styles.TextInput_container}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Search your note..."
                    value={search}
                    onChangeText={(value) => setSearch(value)}
                />
            </View>
            
            <ScrollView>
                <View style={styles.note_container}>
                {
                    data.map((i, index) => (
                        <View style={styles.note_item} key={index}>
                            <Text style={styles.note_date}>{i.createdAt.slice(0, 10).split('-').reverse().join('-')}</Text>
                            <Text style={styles.note_title}>{i.title}</Text>
                            <Text style={styles.note_content}>{i.content}</Text>
                        </View>
                    ))
                }
                </View>
            </ScrollView> 
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      borderRadius: 5,
      marginTop: 5
    },
    modal_container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "flex-end",
      backgroundColor: "#00000099"
    },
    modal_box: {
      width: 150,
      height: 80,
      backgroundColor: "white",
      top: 55,
      borderRadius: 10,
      padding: 10,
      marginRight: 5,
      justifyContent: "space-between"
    },
    textSort: {
        fontSize: 18,
        fontWeight: "bold",
    },
    TextInput: {
      borderWidth: 0.5,
      width: "80%",
      borderRadius: 18,
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 10,
    },
    TextInput_container: {
        width: "100%",
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: "center",
        // backgroundColor: "#fff"
    },
    note_container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingLeft: 14,
        paddingRight: 14,
    },
    note_item: {
        flexBasis: "48%",
        backgroundColor: "#f7df7c",
        color: "#000000",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 10
    },
    note_date: {
        textAlign: "right"
    },
    note_title: {
        fontWeight: "bold",
        fontSize: 20,
    }
  });
   

export default Home;