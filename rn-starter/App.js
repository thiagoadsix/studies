import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Component from "./src/screens/Component";
import Exercise from "./src/screens/Exercise";
import List from "./src/screens/List";
import ExerciseList from "./src/screens/ExerciseList";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: Component,
    Exercise: Exercise,
    List: List,
    ExerciseList: ExerciseList,
  },
  {
    initialRouteName: "ExerciseList",
    defaultNavigationOptions: {
      title: "Learning How To Use React Native :)",
    },
  }
);

export default createAppContainer(navigator);
