import { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Home = ({showSort, setShowSort}) => {

    const [search, setSearch] = useState();

    return (
        <View style={{alignItems: 'center'}}>
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
    }
  });
   

export default Home;