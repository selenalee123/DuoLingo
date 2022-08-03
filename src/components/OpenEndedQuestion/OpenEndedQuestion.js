import React, { useState } from "react";
import { View, Text, TextInput, Image, KeyboardAvoidingView,Keyboard,
  TouchableWithoutFeedback } from "react-native";
import Button from "../Button";
import styles from "./styles";
import mascot from "../../../assets/images/mascot.png";

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState("");

  const onButtonPress = () => {
    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrect();
    } else {
      onWrong();
    }
    setInput("");
  };

  return (
    <>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
        style={styles.fullContainer}
      >
        <KeyboardAvoidingView behavior="padding" style={styles.fullContainer}>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image source={mascot} style={styles.mascot} resizeMode="contain" />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>


          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Type in English"
            style={styles.textInput}
            textAlignVertical="top"
            multiline={true}
          />

      <Button text="Check" onPress={onButtonPress} disabled={!input} />
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

    </>
  );
};

export default OpenEndedQuestion;
