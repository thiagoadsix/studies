import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Component from "./src/screens/Component";
import Exercise from "./src/screens/Exercise";
import List from "./src/screens/List";
import ExerciseList from "./src/screens/ExerciseList";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import PasswordScreen from "./src/screens/PasswordScreen";
import PositionsScreen from "./src/screens/PositionsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: Component,
    Exercise: Exercise,
    List: List,
    ExerciseList: ExerciseList,
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen,
    ColorScreen: ColorScreen,
    SquareScreen: SquareScreen,
    TextScreen: TextScreen,
    PasswordScreen: PasswordScreen,
    PositionsScreen: PositionsScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Learning How To Use React Native :)",
    },
  }
);

export default createAppContainer(navigator);
