import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ModalOne() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontSize: 24 }}>Hello from Modal Two!</Text>
    </SafeAreaView>
  );
}
