import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const Navbar = ({ onMenuPress, onProfilePress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onMenuPress} hitSlop={10}>
        <Ionicons name="menu" size={25} color="#252525" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onProfilePress} hitSlop={10}>
        <Image
          source={require('../assets/zarif.png')}
          style={styles.profileImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#eaebed',
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 12, 
  },
})
