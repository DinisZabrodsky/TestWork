import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styled from "./HomeScreen.styles";

const answer = (e) => {
  e.stopPropagation();
  console.log(e.target);
  // console.log(e.target._internalFiberInstanceHandleDEV.memoizedProps.children);
};

export default function HomeScreen() {
  return (
    <View style={styled.conteiner}>
      <View style={styled.questionConteiner}>
        <Text style={styled.questionText}>Question</Text>
      </View>
      <View style={styled.answerConteiner}>
        <TouchableOpacity onPress={answer} style={styled.answer}>
          <Text>Відповідь 1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={answer} style={styled.answer}>
          <Text>Відповідь 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
