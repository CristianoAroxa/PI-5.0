import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Instale o pacote @expo/vector-icons, caso ainda não tenha
import { router } from "expo-router";
import MenuHamburguer from '@/components/MenuHamburguer';
import Footer from '@/components/Footer';

const HomeScreen = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        
      {/* <Text style={styles.headerText}>Meus Cursos</Text> */}

        <MenuHamburguer/>

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
            <Text style={styles.menuItem} onPress={() => console.log('Perfil')}>Perfil</Text>
            <Text style={styles.menuItem} onPress={() => router.navigate('/CursoScreen')}>Cursos</Text>
            <Text style={styles.menuItem} onPress={() => console.log('Configurações')}>Configurações</Text>
            <Text style={styles.menuItem} onPress={() => console.log('Sair')}>Sair</Text>
          </View>
        </Modal>
      </View>

      {/* Offers Section */}
      <View style={styles.offersSection}>
        <Text style={styles.offersTitle}>OFERTAS</Text>
        <View style={styles.offerCard}>
          <Text style={styles.offerTitle}>Desenvolvimento Web com React</Text>
          <Text style={styles.offerDescription}>Aprenda React JS na prática criando aplicações completas!</Text>
          <Text style={styles.offerPrice}>R$27,90</Text>
          <Text style={styles.offerDiscount}>R$169,90 | Desconto 84%</Text>
        </View>
        <View style={styles.offerCard}>
          <Text style={styles.offerTitle}>Conceitos GraphQl</Text>
          <Text style={styles.offerDescription}>Aprenda GraphQl!</Text>
          <Text style={styles.offerPrice}>R$27,90</Text>
          <Text style={styles.offerDiscount}>R$169,90 | Desconto 84%</Text>
        </View>
        <View style={styles.offerCard}>
          <Text style={styles.offerTitle}>Desenvolvimento Laravel</Text>
          <Text style={styles.offerDescription}>Aprenda Laravel na prática criando aplicações completas!</Text>
          <Text style={styles.offerPrice}>R$27,90</Text>
          <Text style={styles.offerDiscount}>R$169,90 | Desconto 84%</Text>
        </View>
      </View>

      {/* Recommended Courses */}
      <View style={styles.recommendedSection}>
        <Text style={styles.sectionTitle}>Cursos Recomendados</Text>
        <View style={styles.courseCard}>
          <Text style={styles.courseTitle}>Logica de Programação com Dart</Text>
          <Text style={styles.coursePrice}>100,00 R$</Text>
        </View>
        <View style={styles.courseCard}>
          <Text style={styles.courseTitle}>Java COMPLETO 2023</Text>
          <Text style={styles.coursePrice}>87,00 R$</Text>
        </View>
        <View style={styles.courseCard}>
          <Text style={styles.courseTitle}>Figma do 0</Text>
          <Text style={styles.coursePrice}>50,00 R$</Text>
        </View>
      </View>

      <Footer/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    margin: 0,
    padding: 0,
  },
  offersSection: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  offerCard: {
    marginVertical: 5,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    elevation: 4, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  recommendedSection: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  courseCard: {
    marginVertical: 5,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    elevation: 4, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'rgba(149, 43, 149, 0.2)',
    alignSelf: 'stretch',
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  menuButton: {
    padding: 10,
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
  offersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  offerDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  offerPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e60000',
    marginTop: 5,
  },
  offerDiscount: {
    fontSize: 12,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  coursePrice: {
    fontSize: 14,
    color: '#e60000',
    fontWeight: 'bold',
  },
});


export default HomeScreen;
