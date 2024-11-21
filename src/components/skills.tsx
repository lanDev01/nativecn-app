import { View } from "react-native";
import { Title } from "./title";
import { SKILLS } from "@/utils/skills";
import { Badge } from "./badge";

export function Skills() {
  return (
    <View className="w-full">
      <Title>Skills</Title>

      <View className="flex-row w-full flex-wrap gap-3">
        {SKILLS.map(skill => (
          <Badge key={skill.name} label={skill.name} />
        ))}
      </View>
    </View>
  );
}
