import React from 'react'
import {Text,View} from 'react-native'
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
import {createBottomTabNavigator} from 'react navigation/bottom-tabs.'
import Ionicons from 'react-native-vector-ions/Ionicons'
import {createMaterialBottomTabNavigator} from 'react-navigation'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = ()=>{
    return(
        <Tab.Navigator
        
        screenOptions={({route})=> ({
            tabBarIcon:({focused, color, size})=>{
                let iconName;
                if(route.name === 'Feed'){
                    iconName = focused
                    ?'book'
                    :'book-outline'
                } else if (route.name === 'CreatePost'){
                    iconName = focused?'create':'create-outline'
                }
                return <Ionicons name = {iconName} size={size} color={color}/>
            }
        })}
        tabBarOptions={{
            activeintColor:'tomato',
            inactiveTintColor:'gray',
        }}
        
        
        >
            <TabScreen name="Feed" component={Feed}/>
            <TabScreen name="CreatePost" component={CreatePost}/>

        </Tab.Navigator>
    )
}
export default BottomTabNavigator
    