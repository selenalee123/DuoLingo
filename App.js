import React, { useState, useEffect } from "react";
import { View, Alert, ActivityIndicator } from "react-native";
import styles from "./App.styles";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion/ImageMultipleChoiceQuestion";
// import OpenEndedQuestion from "./src/components/OpenEndedQuestion/OpenEndedQuestion";
// import Header from "./src/components/Header";

import questions from "./assets/data/ImageMultipleChoiceQuestion";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import FillInTheBlank from "./src/components/FillInTheBlank";

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You won");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);


  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrong = () => {
    Alert.alert("on Wrong");
  };

  return (
    <View style={styles.root}>
      <ImageMultipleChoiceQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
    </View>
  );
}
