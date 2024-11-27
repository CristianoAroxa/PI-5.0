import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Instale @expo/vector-icons, caso ainda não tenha
import { router } from 'expo-router';

const MenuHamburguer = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      {/* Botão do Menu Hambúrguer */}
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <MaterialIcons name="menu" size={24} color="#007AFF" />
      </TouchableOpacity>

      {/* Modal do Menu */}
      <Modal
        transparent
        visible={menuVisible}
        animationType="slide"
        onRequestClose={toggleMenu}
      >
        <TouchableWithoutFeedback onPress={toggleMenu}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <View style={styles.menu}>
          <Text style={styles.menuItem} onPress={() => router.navigate('/HomeScreen')}>Home</Text>
          <Text style={styles.menuItem} onPress={() => console.log('Perfil')}>Perfil</Text>
          <Text style={styles.menuItem} onPress={() => router.navigate('/CursoScreen')}>Cursos</Text>
          <Text style={styles.menuItem} onPress={() => console.log('Configurações')}>Configurações</Text>
          <Text style={styles.menuItem} onPress={() => console.log('Sair')}>Sair</Text>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    padding: 10,
    paddingTop: 50,
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menu: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 6, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  menuItem: {
    paddingVertical: 10,
    fontSize: 16,
    color: '#007AFF',
  },
});

export default MenuHamburguer;
