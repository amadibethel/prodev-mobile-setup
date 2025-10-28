
---

### **Step 7: Update Example Files**
1. `app-example/app/(tabs)/index.tsx`:
```tsx
import { Text, View } from 'react-native';
import Colors from '../constants/Colors';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.background }}>
      <Text>First App Created</Text>
    </View>
  );
}


