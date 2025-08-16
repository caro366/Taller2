import { View, FlatList } from 'react-native';
import { List, TouchableRipple } from 'react-native-paper';
import { router, Stack } from 'expo-router';

export default function App() {
  const items = [
    {
      title: "Autor",
      icon: "account",
      color: "#9a8fd4ff",
      route: "autor"
    },
    {
      title: "Inicio de sesión",
      icon: "lock",
      color: "#ed82b2",
      route: "inicio-sesion"
    },
    {
      title: "Pantalla principal",
      icon: "home",
      color: "#7e8cdbff",
      route: "pantalla-principal"
    },
    {
      title: "Lista de elementos",
      icon: "format-list-bulleted",
      color: "#e06161ff",
      route: "lista-elementos"
    },
    
    {
      title: "Formulario de registro",
      icon: "cog",
      color: "#91898dff",
      route: "formulario-registro"
    },
    {
      title: "Configuración",
      icon: "account",
      color: "#91898dff",
      route: "configuracion"
    },
    {
      title: "Perfil de usuario",
      icon: "account",
      color: "#91898dff",
      route: "lista-usuarios"
    },
    {
      title: "Lista de servicios",
      icon: "book",
      color: "#9a8fd4ff",
      route: "lista-servicios"
    }
  ];
  const styles = {
    itemContainer: {
      backgroundColor: "white",
      borderRadius: 10,
      marginBottom: 20,
      paddingVertical: 10
    },
    itemTitle: {
      fontSize: 16,
      fontWeight: "bold"
    }
  };

  return (
    <>
      <Stack.Screen options={{
        title: 'Pantallas',
        headerShown: true,
        headerStyle: { backgroundColor: '#f9f8ff' },

      }} />

      <View style={{ flex: 1, backgroundColor: "#f1e9e9ff", padding: 20 }}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.route}
          renderItem={({ item }) => (
            <TouchableRipple
              onPress={() => router.push(`/${item.route}`)}
              rippleColor="rgba(0,0,0,0.08)"
            >
              <List.Item
                title={item.title}
                titleStyle={{ fontSize: 16, fontWeight: "bold" }}
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  marginBottom: 20,
                  paddingVertical: 10
                }}
                left={(props) => (
                  <List.Icon {...props} icon={item.icon} color={item.color} />
                )}
                right={(props) => (
                  <List.Icon {...props} icon="chevron-right" color="#A5AEBC" />
                )}
              />
            </TouchableRipple>
          )}
        />
      </View>
    </>
  );
}
