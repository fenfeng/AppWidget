import React from 'react'
import { List} from '@ant-design/react-native'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { RouteType } from '~/routes/RouteType'

const LoginScreen: React.FC<RouteType<'LoginScreen'>> = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
    <Text style={{ fontSize: 30 }}> LoginScreen</Text>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'flex-end',
    },
  })

export default LoginScreen
