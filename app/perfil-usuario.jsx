import { View, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Text, Avatar, List } from "react-native-paper";
import usuarios from "./assets/usuarios.json";

export default function PerfilUsuario() {
  const { id } = useLocalSearchParams();
  const usuario = usuarios.find(usuarios => String(usuarios.id) === String(id));

  if (!usuario) {
    return <Text style={{ margin: 16 }}>Usuario no encontrado</Text>;
  }

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
        <Avatar.Icon
          size={150}
          icon="account"
          color="#6a80a3" 
          style={{ marginBottom: 30, marginTop: 20, backgroundColor: "#e0e0e0" }}
        />

        <Text variant="headlineMedium" style={{ fontWeight: "bold", marginBottom: 10 }}>
          {usuario.nombre}
        </Text>

        <List.Section style={{ width: "100%" }}>
          <List.Item
            title="Email"
            description={usuario.email}
            left={props => <List.Icon {...props} icon="email" />}
          />
          <List.Item
            title="Teléfono"
            description={usuario.telefono}
            left={props => <List.Icon {...props} icon="phone" />}
          />
          <List.Item
            title="Dirección"
            description={usuario.direccion}
            left={props => <List.Icon {...props} icon="home" />}
          />
          <List.Item
            title="Rol"
            description={usuario.rol}
            left={props => <List.Icon {...props} icon="account-badge" />}
          />
        </List.Section>
      </View>
    </ScrollView>
  );
}