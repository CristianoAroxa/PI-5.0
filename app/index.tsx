import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function index() {
  useEffect(() => {
    // Redirecionar para a LoginScreen após 2 segundos
    const timer = setTimeout(() => {
      router.push("/LoginScreen"); // Roteia para a LoginScreen após 2 segundos
    }, 2000);

    return () => clearTimeout(timer); // Limpa o timer quando o componente for desmontado
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./img/Logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain", // Para garantir que a imagem não seja deformada
  },
});
