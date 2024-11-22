import { View, Image, ScrollView } from "react-native";

import { User } from "@/components/user";
import { Input } from "@/components/input";
import { Button } from "@/components/Button";
import { Skills } from "@/components/skills";
import { Preferences } from "@/components/preferences";
import { useToast } from "@/components/Toast";

export function Profile() {
  const { toast } = useToast();

  return (
    <ScrollView className="flex-1 bg-gray-700">
      <Image
        source={require("@/assets/banner.png")}
        alt="banner"
        className="w-full h-52 -mb-16"
      />

      <View className="flex-1 p-4">
        <User />
        <Skills />
        <Preferences />
        <View className="w-full mt-6 flex-1">
          <Input placeholder="Company" inputClasses="mb-6" label="Company" />
          <Button label="Save" onPress={() => toast("Saved!")} />
        </View>
      </View>
    </ScrollView>
  );
}
