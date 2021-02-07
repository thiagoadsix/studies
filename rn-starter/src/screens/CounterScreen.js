import React, { useReducer } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const COLOR_INCREMENT = 1;

const CounterScreen = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increaseOrDecrease":
        return { ...state, counter: state.counter + action.payload };
      case "reset":
        return { ...state, counter: state.counter = 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Text style={style.currentCounterText}>
        Current counter: {state.counter}
      </Text>
      <Button
        title="Increase"
        onPress={() =>
          dispatch({ type: "increaseOrDecrease", payload: COLOR_INCREMENT })
        }
      />
      <Button
        title="Decrease"
        onPress={() =>
          dispatch({
            type: "increaseOrDecrease",
            payload: -1 * COLOR_INCREMENT,
          })
        }
      />
      <Button
        title="Reset counter"
        onPress={() => dispatch({ type: "reset", payload: 0 })}
      />
    </View>
  );
};

const style = StyleSheet.create({
  currentCounterText: {
    paddingTop: 25,
    paddingBottom: 25,
    textAlign: "center",
  },
});

export default CounterScreen;
