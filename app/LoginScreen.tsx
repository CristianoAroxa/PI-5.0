import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import ScreenComponent from "@/components/ScreenComponent";
import { Colors } from "@/constants/Colors";
import Button from "@/components/Button";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const saveUserData = async (data: { email: string; token: string }) => {
  try {
    await AsyncStorage.setItem("@user_data", JSON.stringify(data));
    console.log("Dados salvos com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar dados:", error);
    throw new Error("Não foi possível salvar os dados localmente.");
  }
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateInputs = (): boolean => {
    if (!email) {
      setErrorMessage("Por favor, insira um e-mail válido.");
      return false;
    }
    if (!password) {
      setErrorMessage("Por favor, insira sua senha.");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateInputs()) return;

    // Lógica fictícia para autenticação
    if (email === "usuario@exemplo.com" && password === "123456") {
      try {
        await saveUserData({ email, token: "mockToken123" });
        Alert.alert("Sucesso", "Login realizado com sucesso!");
        router.navigate("/HomeScreen");
      } catch (error: any) {
        setErrorMessage(error.message || "Erro inesperado ao salvar dados.");
      }
    } else {
      setErrorMessage("Credenciais inválidas. Verifique e tente novamente.");
    }
  };

  return (
    <ScreenComponent style={styles.screen}>
      <Image
        style={styles.logo}
        source={require("./img/Logo.png")}
        accessible
        accessibilityLabel="Logotipo do aplicativo"
      />
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá!</Text>
        <Text style={styles.welcomeText}>Que bom que está aqui!</Text>
      </View>

      <View style={styles.inputsContainer}>
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder="email@exemplo.com.br"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
            accessible
            accessibilityLabel="Campo para inserir o e-mail"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder="******"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            accessible
            accessibilityLabel="Campo para inserir a senha"
          />
        </View>

        {errorMessage ? (
          <Text style={styles.errorMessage} accessible accessibilityLabel={errorMessage}>
            {errorMessage}
          </Text>
        ) : null}

        <Button
          color={Colors.highlight}
          text={"Entrar"}
          onPress={handleLogin}
          accessible
          accessibilityLabel="Botão para realizar login"
        />
        <Text
          style={styles.forgotPassword}
          accessible
          accessibilityLabel="Texto para recuperação de senha"
        >
          Esqueci minha senha
        </Text>
      </View>

      <Button
        color={Colors.secondary}
        text={"Crie sua conta"}
        onPress={() => router.navigate("/RegisterScreen")}
        accessible
        accessibilityLabel="Botão para criar uma nova conta"
      />
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
  welcomeText: {
    fontWeight: "500",
    color: "#000",
    fontSize: 18,
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
  inputText: {
    flex: 1,
    fontWeight: "400",
    color: "#000",
    fontSize: 16,
  },
  forgotPassword: {
    fontWeight: "700",
    color: "#3B82F6",
    fontSize: 12,
    textDecorationLine: "underline",
    marginTop: 10,
  },
  logo: {
    width: 80,
    height: 105,
    resizeMode: "contain",
    marginTop: 20,
  },
  errorMessage: {
    color: "red",
    fontSize: 14,
    marginTop: 10,
  },
});
