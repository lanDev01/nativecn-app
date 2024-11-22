import { useState } from "react";
import { View } from "react-native";
import { Title } from "@/components/title";
import { Option } from "@/components/option";
import { Switch } from "@/components/switch";
import { Checkbox } from "@/components/checkbox";

export function Preferences() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View className="w-full">
      <Title>Preferences</Title>

      <Option>
        <Option.Icon icon="dark-mode" />
        <Option.Title>Dark Mode</Option.Title>
        <Switch onValueChange={setIsEnabled} value={isEnabled} />
      </Option>

      <Option>
        <Option.Icon icon="email" />
        <Option.Title>Public email</Option.Title>
        <Checkbox />
      </Option>
    </View>
  );
}
