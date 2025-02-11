import { useFonts , Poppins_400Regular , Poppins_500Medium , Poppins_700Bold ,Poppins_800ExtraBold  } from '@expo-google-fonts/poppins'
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync()


const TabsLayout= () => {



  return (
  <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name='home' />
  </Stack>
  )
}

export default TabsLayout
