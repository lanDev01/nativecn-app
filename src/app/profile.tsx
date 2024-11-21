import { Skills } from "@/components/skills";
import { User } from "@/components/user";
import { Text, View, Image } from "react-native";

export function Profile() {
  return (
    <View className="flex-1 bg-gray-700">
      <Image
        source={require("@/assets/banner.png")}
        alt="banner"
        className="w-full h-52 -mb-16"
      />

      <View className="flex-1 p-4">
        <User />
        <Skills />
      </View>
    </View>
  );
}
