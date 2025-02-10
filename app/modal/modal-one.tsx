import { Link } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ModalOne() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        borderWidth: 1,
        borderColor: "red",
        justifyContent: "space-between",
      }}
      onLayout={(e) => {
        console.log({
          height: e.nativeEvent.layout.height,
        });
      }}
    >
      <Link href="/modal/modal-two">
        <Text style={{ color: "blue", fontSize: 32 }}>Modal two</Text>
      </Link>
      <Text>Content down under</Text>
    </SafeAreaView>
  );
}
