// app/settings/system-update.tsx
import { View, Text, StyleSheet } from 'react-native';

export default function SystemUpdate() {
  return (
    <View style={styles.container}>
      <Text>System Update Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
});
