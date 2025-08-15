import { View, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Text, Avatar, List, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import usuarios from "./assets/usuarios.json";


export default function PerfilUsuario() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const usuario = usuarios.find(u => String(u.id) === String(id));

  if (!usuario) {
    return (
      <View style={styles.center}>
        <Text>Usuario no encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Avatar.Icon
          size={150}
          icon="account"
          color="#6a80a3"
          style={styles.avatar}
        />
        <Text variant="headlineMedium" style={styles.name}>
          {usuario.nombre}
        </Text>
        <List.Section style={styles.listSection}>
          <List.Item
            title="Email"
            description={usuario.email}
            left={props => <List.Icon {...props} icon="email" />}
            style={styles.listItem}
          />
          <List.Item
            title="Teléfono"
            description={usuario.telefono}
            left={props => <List.Icon {...props} icon="phone" />}
            style={styles.listItem}
          />
          <List.Item
            title="Dirección"
            description={usuario.direccion}
            left={props => <List.Icon {...props} icon="home" />}
            style={styles.listItem}
          />
          <List.Item
            title="Rol"
            description={usuario.rol}
            left={props => <List.Icon {...props} icon="account-badge" />}
            style={styles.listItem}
          />
        </List.Section>


        <Button
          mode="text"
          style={styles.logoutButton}
          labelStyle={styles.logoutLabel}
          onPress={() => router.push('/app')}
        >
          Cerrar sesión
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  avatar: {
    marginBottom: 30,
    marginTop: 20,
    backgroundColor: '#e0e0e0',
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listSection: {
    width: '100%',
  },
  listItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  logoutButton: {
    marginTop: 20,
  },
  logoutLabel: {
    color: '#8fa7dcff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});