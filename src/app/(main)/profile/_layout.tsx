import { Stack } from 'expo-router';
const AddLayout = () => {
  return (
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='index' />
      </Stack>
   
  );
};

export default AddLayout;
