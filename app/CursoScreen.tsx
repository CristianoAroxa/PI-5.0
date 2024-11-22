import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { router } from "expo-router";
import MenuHamburguer from "@/components/MenuHamburguer";
import Footer from "@/components/Footer";

const CoursesScreen = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Curso de Desenvolvimento Web",
      description: "Aprenda a desenvolver apps nativos com React Native",
    },
    {
      id: 2,
      title: "Curso de Flutter",
      description: "Domine o desenvolvimento de interfaces com Flutter",
    },
    {
      id: 3,
      title: "Curso de Laravel",
      description: "Construa aplicações web robustas com Laravel",
    },
  ];

  const handleCoursePress = (course) => {
    setSelectedCourse(course);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedCourse(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Meus Cursos</Text>
          <MenuHamburguer />
        </View>

        {/* Course Cards */}
        <View style={styles.coursesSection}>
          {courses.map((course) => (
            <TouchableOpacity
              key={course.id}
              style={styles.courseCard}
              onPress={() => handleCoursePress(course)}
            >
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseDescription}>{course.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Modal */}
      {selectedCourse && (
        <Modal
        transparent
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedCourse.title}</Text>
          <Text style={styles.modalDescription}>
            Escolha uma das opções abaixo para continuar:
          </Text>
          <TouchableOpacity
            style={[styles.modalButton, styles.primaryButton]}
            onPress={() => {
              closeModal();
              router.navigate("/CourseDetailScreen", {
                courseId: selectedCourse.id,
              });
            }}
          >
            <Text style={styles.modalButtonText}>Ver Curso</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modalButton, styles.secondaryButton]}
            onPress={() => {
              closeModal();
              router.navigate("/ProvaScreen", { courseId: selectedCourse.id });
            }}
          >
            <Text style={styles.modalButtonText}>Realizar Prova</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modalButton, styles.cancelButton]}
            onPress={closeModal}
          >
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      
      )}

      {/* Footer */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalContainer: {
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 10, // Sombra para Android
    shadowColor: "#000", // Sombra para iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "rgba(149, 43, 149, 0.2)",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  coursesSection: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  courseCard: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  courseDescription: {
    fontSize: 14,
    color: "#555",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 6,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#952b95",
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    width: "90%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 5,
  },
  primaryButton: {
    backgroundColor: "#952b95",
  },
  secondaryButton: {
    backgroundColor: "#6e6ed6",
  },
  cancelButton: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButtonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CoursesScreen;
