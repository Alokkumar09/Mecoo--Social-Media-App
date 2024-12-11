// import {View, Text} from 'react-native';
// import React from 'react';
// import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
// import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
// import AntDesign from 'react-native-vector-icons/dist/AntDesign';
// import Entypo from 'react-native-vector-icons/dist/Entypo';
// import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
// import Feather from 'react-native-vector-icons/dist/Feather';
// import Fontisto from 'react-native-vector-icons/dist/Fontisto';
// import Foundation from 'react-native-vector-icons/dist/Foundation';
// import Ionicons from 'react-native-vector-icons/dist/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
// import Octicons from 'react-native-vector-icons/dist/Octicons';
// import Zocial from 'react-native-vector-icons/dist/Zocial';
// import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';

// const VectorIcon = props => {
//   const {name, size, color, type, onPress, style} = props;
//   return (
//     <View style={style}>
//       {type === 'FontAwesome' ? (
//         <FontAwesome size={size} name={name} color={color} onPress={onPress} />
//       ) : type === 'FontAwesome5' ? (
//         <FontAwesome5 size={size} name={name} color={color} onPress={onPress} />
//       ) : type === 'AntDesign' ? (
//         <AntDesign size={size} name={name} color={color} onPress={onPress} />
//       ) : type === ' Entypo' ? (
//         <Entypo size={size} name={name} color={color} onPress={onPress} />
//       ) : type === 'EvilIcons' ? (
//         <EvilIcons size={size} name={name} color={color} onPress={onPress} />
//       ) : type === 'Feather' ? (
//         <Feather size={size} name={name} color={color} onPress={onPress} />
//       ) : type === 'Fontisto' ? (
//         <Fontisto size={size} name={name} color={color} onPress={onPress} />
//       ) : type === 'Foundation' ? (
//         <Foundation size={size} name={name} color={color} onPress={onPress} />
//       ) : type === 'Ionicons' ? (
//         <Ionicons size={size} name={name} color={color} onPress={onPress} />
//       ) : type === 'MaterialIcons' ? (
//         <MaterialIcons
//           size={size}
//           name={name}
//           color={color}
//           onPress={onPress}
//         />
//       ) : type === 'MaterialCommunityIcons' ? (
//         <MaterialCommunityIcons
//           size={size}
//           name={name}
//           color={color}
//           onPress={onPress}
//         />
//       ) : type === 'Octicons' ? (
//         <Octicons size={size} name={name} color={color} onPress={onPress} />
//       ) : type === 'Zocial' ? (
//         <Zocial size={size} name={name} color={color} onPress={onPress} />
//       ) : (
//         <SimpleLineIcons
//           size={size}
//           name={name}
//           color={color}
//           onPress={onPress}
//         />
//       )}
//     </View>
//   );
// };

// export default VectorIcon;

import {View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';

const VectorIcon = props => {
  const {name, size, color, type, onPress, style} = props;
  return (
    <View style={style}>
      {type === 'MaterialCommunityIcons' ? (
        <MaterialCommunityIcons
          onPress={onPress}
          name={name}
          size={size}
          color={color}
        />
      ) : type === 'FontAwesome' ? (
        <FontAwesome onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'FontAwesome5' ? (
        <FontAwesome5 onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'Feather' ? (
        <Feather onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'AntDesign' ? (
        <AntDesign onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'Entypo' ? (
        <Entypo onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'Ionicons' ? (
        <Ionicons onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'EvilIcons' ? (
        <EvilIcons onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'Octicons' ? (
        <Octicons onPress={onPress} name={name} size={size} color={color} />
      ) : type === 'Fontisto' ? (
        <Fontisto onPress={onPress} name={name} size={size} color={color} />
      ) : (
        <MaterialIcons
          onPress={onPress}
          name={name}
          size={size}
          color={color}
        />
      )}
    </View>
  );
};

export default VectorIcon;
