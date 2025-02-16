import '../global.css';
import { useFonts , Poppins_400Regular , Poppins_500Medium , Poppins_700Bold ,Poppins_800ExtraBold  } from '@expo-google-fonts/poppins'
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync()


const RootLayout = () => {
const [loaded , error] = useFonts({
  Poppins_400Regular ,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold
})

useEffect(()=> {
if (loaded || error) {
  SplashScreen.hideAsync()
}
}, [loaded , error])

if (!loaded && !error) {
  return null
  
}

  return (
  <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name='index' />
    <Stack.Screen name='(tabs)' />
  </Stack>
  )
}

export default RootLayout
