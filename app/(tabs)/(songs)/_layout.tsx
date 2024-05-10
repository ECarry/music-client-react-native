import { StackScreenWithSearchBar } from "@/constants/layout";
import { defaultStyles } from "@/constants/styles";
import { Stack } from "expo-router";
import { View } from "react-native";

const SongsScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            ...StackScreenWithSearchBar,
            headerTitle: "Songs",
            headerStyle: {
              backgroundColor: "#000",
            },
          }}
        />
      </Stack>
    </View>
  );
};

export default SongsScreenLayout;
