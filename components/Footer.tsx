import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2023 Liberty Cursos, Inc.</Text>
      <View style={styles.footerLinks}>
        <Text>Quem somos</Text>
        <Text>Fale com Agente</Text>
        <Text>Tá com dúvida?</Text>
        <Text>Contato</Text>
        <Text>Trabalhe Conosco</Text>
        <Text>Termos</Text>
        <Text>Política de privacidade</Text>
        <Text>Configurações de cookie</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'rgba(120, 120, 255, 0.2)',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#777',
  },
  footerLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
});

export default Footer;
