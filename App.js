import React, { useState, useEffect } from "react";
import { View, Alert, ActivityIndicator } from "react-native";
import styles from "./App.styles";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion/ImageMultipleChoiceQuestion";
import Header from "./src/components/Header";

import questions from "./assets/data/ImageMultipleChoiceQuestion";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import FillInTheBlank from "./src/components/FillInTheBlank";

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  const [lives, setLives] = useState(5);
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

  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  };
  const onWrong = () => {
    if (lives <= 1) {
      Alert.alert("Game over", "Try again",
        [
          {
            text: "Try again",
            onPress: restart,
          },
        ]);
    } else {
      Alert.alert("on Wrong");
      setLives(lives - 1);
    }
  };

  return (
    <View style={styles.root}>
      <Header
        progress={currentQuestionIndex / questions.length}
        lives={lives}
      />

      {/* {currentQuestion.type === "FILL_IN_THE_BLANK" && (
        <FillInTheBlank
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )} */}

      {/* {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && ( */}
      <ImageMultipleChoiceQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
      {/* )} */}
      {/* {currentQuestion.type === "OPEN_ENDED" ? (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      ) : null} */}
    </View>
  );
}
