import "@/styles/global.css";
import { Profile } from "@/app/profile";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <Profile />
      <StatusBar style="auto" />
    </>
  );
}
