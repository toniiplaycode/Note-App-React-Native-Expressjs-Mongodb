import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, TextInput, Button, StyleSheet } from "react-native";

const EditNote = ({ handleEditNote, modalVisible, setModalVisible, title, content, id }) => {
  const [valueNote, setValueNote] = useState({ noteId: id, title: title, content: content }); 

  const callHandleEditNote = () => {
    handleEditNote(valueNote);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
            <View style={styles.modalBox}>
                <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible(false)} >
                    <Text
                        style={styles.buttonCloseX}
                    >
                        X
                    </Text>
                </TouchableOpacity>                                
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    value={valueNote.title}
                    onChangeText={(text) => setValueNote({ ...valueNote, title: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Content"
                    multiline
                    value={valueNote.content}
                    onChangeText={(text) => setValueNote({ ...valueNote, content: text })}
                />
                <Button title="Edit Note" onPress={callHandleEditNote} />
            </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  modalBox: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  buttonClose: {
    width: 30,
    height: 30,
    backgroundColor: "#b3cccc",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: -12,
    position: "relative",
    left: "90%"
  },
  buttonCloseX: {
    color: "#111",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default EditNote;