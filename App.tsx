import { NativeBaseProvider, Box } from 'native-base';
import { DecisionTree } from './src/components/DecisionTree';

export default function App() {
  return (
    <NativeBaseProvider>
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <DecisionTree/>
        </Box>
    </NativeBaseProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
