import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import FullScreen from "@/components/containers/FullScreen";
import FormInput from "@/components/form/FormInput";
import Card from "@/components/containers/Card";
import FormButton from "@/components/form/FormButton";

export default function index() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    router.push("/home");
  };

  return (
    <FullScreen>
      <Card>
        <FormInput
          label="Username"
          value={username}
          onChangeText={setUsername}
        />
        <FormInput
          label="Password"
          value={password}
          onChangeText={setPassword}
        />

        <FormButton onPress={handleLogin} title="Login!" />

        <Link href="/register">Novo por aqui? Registre-se!</Link>
      </Card>
    </FullScreen>
  );
}
