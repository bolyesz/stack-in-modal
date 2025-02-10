import { Stack } from "expo-router";

export default function ModalLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="modal-one"
        options={{
          title: "Modal One",
        }}
      />
      <Stack.Screen
        name="modal-two"
        options={{
          title: "Modal Two",
        }}
      />
    </Stack>
  );
}
