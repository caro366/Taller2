import { View, ScrollView, Image } from "react-native";
import { Text, Button } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";
import datos from "./assets/data.json";

export default function DetalleElemento() {
  const parametros = useLocalSearchParams();

  const titulo = parametros.titulo;
  const descripcion = parametros.descripcion;
  
  const urlImagen = parametros.imagen;
  const tieneElementoEspecifico = titulo && descripcion && urlImagen;

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        {tieneElementoEspecifico ? (
          <>
            <View style={{ alignItems: "center", marginVertical: 30 }}>
           
              <Image
                source={{ uri: urlImagen }}
                style={{
                  width: 250,
                  height: 250,
                  borderRadius: 28,
                  backgroundColor: "#f0f0f0",
                }}
              />
            </View>

            <View style={{ width: "80%", alignSelf: "center", marginBottom: 10 }}>
              <Text style={{ fontSize: 34, fontWeight: "bold" }}>{titulo}</Text>
              <Text style={{ fontSize: 22, marginTop: 5, fontWeight: "bold" }}>
                $29,99
              </Text>
              <Text style={{ fontSize: 16, marginTop: 16 }}>
                {descripcion}
              </Text>
            </View>

            <Button
              mode="contained"
              style={{
                backgroundColor: "#6a80a3ff",
                borderRadius: 6,
                margin: 10,
                width: "80%",
                alignSelf: "center",
              }}
              labelStyle={{ letterSpacing: 1, fontSize: 18 }}
              onPress={() => console.log(`Acción para: ${titulo}`)}
            >
              Acción
            </Button>
          </>
        ) : (
          <>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              Todos los Elementos
            </Text>
            {datos.map((item) => (
              <View key={item.id} style={{ marginBottom: 30 }}>
                <View style={{ alignItems: "center", marginVertical: 30 }}>
                 
                  <Image
                    source={{ uri: item.urlImagen }}
                    style={{
                      width: 250,
                      height: 250,
                      borderRadius: 28,
                      backgroundColor: "#f0f0f0",
                    }}
                  />
                </View>
                <View style={{ width: "80%", alignSelf: "center", marginBottom: 10 }}>
                  <Text style={{ fontSize: 34, fontWeight: "bold" }}>
                    {item.titulo}
                  </Text>
                  <Text
                    style={{ fontSize: 22, marginTop: 5, fontWeight: "bold" }}
                  >
                    $29,99
                  </Text>
                  <Text style={{ fontSize: 16, marginTop: 16 }}>
                    {item.descripcion}
                  </Text>
                </View>

                <Button
                  mode="contained"
                  style={{
                    backgroundColor: "#6a80a3ff",
                    borderRadius: 6,
                    margin: 10,
                    width: "80%",
                    alignSelf: "center",
                  }}
                  labelStyle={{ letterSpacing: 1, fontSize: 18 }}
                  onPress={() => console.log(`Ver detalles de: ${item.titulo}`)}
                >
                  Ver Detalles
                </Button>
              </View>
            ))}
          </>
        )}
      </View>
    </ScrollView>
  );
}