import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import ScreenComponent from "@/components/ScreenComponent";
import { Colors } from "@/constants/Colors";
import Button from "@/components/Button";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    // Salvar os dados no armazenamento local
    // Substitua por uma chamada de API no futuro, se necessário.
    const userData = { name, email, password };
    AsyncStorage.setItem("userData", JSON.stringify(userData))
      .then(() => {
        Alert.alert("Sucesso", "Conta criada com sucesso!");
        router.navigate("/LoginScreen");
      })
      .catch(() => {
        Alert.alert("Erro", "Houve um problema ao salvar os dados.");
      });
  };

  return (
    <ScreenComponent style={styles.screen}>
      <Image style={styles.logo} source={require("./img/Logo.png")} />
      <View style={styles.header}>
        <Text style={styles.greeting}>Crie sua conta!</Text>
      </View>

      <View style={styles.inputsContainer}>
        <View style={styles.input}>
          <Image style={styles.img} source={require("./img/ico-user.png")} />
          <TextInput
            style={styles.inputText}
            placeholder="Seu Nome"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.input}>
          <Image style={styles.img} source={require("./img/ico-user.png")} />
          <TextInput
            style={styles.inputText}
            placeholder="email@exemplo.com.br"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.input}>
          <Image style={styles.img} source={require("./img/ico-lock.png")} />
          <TextInput
            style={styles.inputText}
            placeholder="******"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <Button
          color={Colors.highlight}
          text={"Registrar"}
          onPress={handleRegister}
        />
      </View>

      <TouchableOpacity
        style={styles.signInLink}
        onPress={() => router.push("/LoginScreen")}
      >
        <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
      </TouchableOpacity>
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  greeting: {
    fontWeight: "400",
    color: "#000",
    fontSize: 20,
    marginBottom: 5,
  },
  inputsContainer: {
    width: "90%",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 55,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 30,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  img: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  inputText: {
    flex: 1,
    fontWeight: "400",
    color: "#000",
    fontSize: 16,
  },
  signInLink: {
    marginTop: 15,
  },
  linkText: {
    fontWeight: "400",
    color: "#3B82F6",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  logo: {
    width: 80,
    height: 105,
    resizeMode: "contain",
    marginTop: 20,
  },
});
