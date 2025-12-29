import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

export const Navbar = ({ onMenuPress, onProfilePress }) => {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#eaebed', // same as navbar
  },
  container: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 12, 
  },
})
