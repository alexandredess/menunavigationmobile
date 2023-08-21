import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import SearchScreen from './Screens/SearchScreen';
import AddScreen from './Screens/AddScreen';
import ActivityScreen from './Screens/ActivityScreen';
import ProfileScreen from './Screens/ProfileScreen';
import Ionic from "react-native-vector-icons/Ionicons"

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    //faire le container pour la navigation
    <NavigationContainer>
    {/*creation du tab navigator*/}
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon:({focused,size,color})=>{
            let iconName;
            {/*conditions pour l'affichage des icones en fonction du composant appelé*/}
            if(route.name === "Home"){
              iconName=focused ? "home-sharp":"home-outline"
              size = focused ? size +8 : size +5;
            }else if(route.name === "Search"){
              iconName=focused ? "search-sharp":"search-outline"
              size = focused ? size +8 : size +5;
            }else if(route.name === "Add"){
              iconName=focused ? "add-circle-sharp":"add-circle-outline"
              size = focused ? size +8 : size +5;
            }else if(route.name === "Activity"){
              iconName=focused ? "heart-sharp":"heart-outline"
              size = focused ? size +8 : size +5;
            }else if(route.name === "Profile"){
              iconName=focused ? "person-sharp":"person-outline"
              size = focused ? size +8 : size +5;
            }
            return <Ionic name={iconName} size={size} color={color}/>
          },
          tabBarActiveTintColor : "green",
          tabBarInactiveTintColor : "black"
        })}>
        {/*Routing des screens*/}
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Search" component={SearchScreen}/>
        <Tab.Screen name="Add" component={AddScreen}/>
        <Tab.Screen name="Activity" component={ActivityScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
