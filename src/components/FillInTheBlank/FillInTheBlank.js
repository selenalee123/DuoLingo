import React, { useState } from "react";
import { View, Text } from "react-native";
import Button from "../Button";
import WordOption from "../WordOption";
import styles from "./styles";

const FillInTheBlank = ({ question, onCorrect, onWrong }) => {
  const [selected, setSelected] = useState(null);

  const onButtonPress = () => {
    if (selected === question.correct) {
      onCorrect();
      setSelected(null);
    }else{
      onWrong();
    }
    setSelected(null)
  };

  return (
    <>
      <Text style={styles.title}>Complete the sentence</Text>
      <View style={styles.row}>
        <Text style={styles.text}>{question.text}</Text>
        <View style={styles.blank}>
          {selected && (
            <WordOption text={selected} onPress={() => setSelected(null)} />
          )}
        </View>
      </View>

      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <WordOption
            text={option}
            isSelected={selected == option}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button text="Check" onPress={onButtonPress} disabled={true} />
    </>
  );
};

export default FillInTheBlank;
