import { Text, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export function User() {
  return (
    <View className="items-center">
      <Avatar className="w-32 h-32 border-4 border-gray-600">
        <AvatarImage source={{ uri: "https://github.com/LanDev01.png" }} />
        <AvatarFallback>AG</AvatarFallback>
      </Avatar>

      <Text className="text-white font-bold text-2xl mt-4">Alan Gonçalves</Text>
      <Text className="text-gray-400 text-lg">@alannDev</Text>
    </View>
  );
}
