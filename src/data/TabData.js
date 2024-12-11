import HomeScreen from "../screen/HomeScreen";
import MarketPlaceScreen from "../screen/MarketPlaceScreen";
import NotificationScreen from "../screen/NotificationScreen";
import ProfileScreen from "../screen/ProfileScreen";
import WatchScreen from "../screen/WatchScreen";

export const TabData=[{
    id:1,
    name:"Home",
    route: HomeScreen,
    activeIconName: 'home',
    activeiconType: 'MaterialIcons',
    inactiveIconName:'home-outline',
    inactiveIconType:'MaterialCommunityIcons',
    size: 25,
    unFocusSize: 25,

},
{
    id:2,
    name:"Notification",
    route: NotificationScreen,
    activeIconName: 'notifications',
    activeiconType: 'Ionicons',
    inactiveIconName: 'notifications-outline',
    inactiveIconType: 'Ionicons',
    size: 25,
    unFocusSize: 25,
},
{
    id:3,
    name:"Profile",
    route: ProfileScreen,
    activeIconName: 'person',
    activeiconType: 'Ionicons',
    inactiveIconName: 'person-outline',
    inactiveIconType: 'Ionicons',
    size: 26,
    unFocusSize: 26,
},
{
    id:4,
    name:"MarketPlace",
    route: MarketPlaceScreen,
    activeIconName: 'shopping-cart',
    activeiconType: 'FontAwesome',
    inactiveIconName: 'shoppingcart',
    inactiveIconType: 'AntDesign',
    size: 25,
    unFocusSize: 25,
},
{
    id:5,
    name:"Watch",
    route: WatchScreen,
    activeIconName: 'youtube-tv',
    activeiconType: 'MaterialCommunityIcons',
    inactiveIconName: 'television-play',
    inactiveIconType: 'MaterialCommunityIcons',
    size: 25,
    unFocusSize: 25,
}


]