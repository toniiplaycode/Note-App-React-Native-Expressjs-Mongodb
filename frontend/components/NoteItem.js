import axios from "axios";
import { useState } from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NoteItem = ( { title, content, createdAt, id, index, fetchData } ) => {
    const [showHandleNote, setShowHandleNote] = useState(false);

    const confirmDelete = (id) =>
        Alert.alert('Notication', 'Are you sure delete this note ?', [
        {
            text: 'Cancel',
            style: 'cancel',

        },
        {
            text: 'OK', 
            onPress: () => {
                // console.log(id);
                deleteNote(id);
            }
        },
    ]);

    const deleteNote = async (id) => {
        // phải dùng IPv4 chứ dùng localhost là lỗi liền
        try {
            await axios.put("http://192.168.10.247:8085/deleteNote/", 
                {
                    "noteId": id.toString()
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
        } catch (error) {
            console.error("Error delete data:", error);
        }

        fetchData();
    }

    return(
        <TouchableOpacity style={styles.note_item} key={index}
            onPress={() => {
                setShowHandleNote(!showHandleNote);
            }}
        >
            <Text style={styles.note_date}>{createdAt.slice(0, 10).split('-').reverse().join('-')}</Text>
            <Text style={styles.note_title}>{title}</Text>
            <Text>{content}</Text>
            { showHandleNote && (
              <View style={styles.handleNote_container}>
                <TouchableOpacity style={styles.handleNote_item}
                    onPress={() => {confirmDelete(id)}}
                >
                    <Image
                    style={styles.icon_handle}
                    source={require('../assets/bin.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.handleNote_item}>
                    <Image
                    style={styles.icon_handle}
                    source={require('../assets/edit.png')}
                    />
                </TouchableOpacity>
              </View>
            )
            }
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
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
    },
    icon_handle: {
        width: 22,
        height: 22,
    },
    handleNote_container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    handleNote_item: {
        marginLeft: 10
    }
  });

export default NoteItem;