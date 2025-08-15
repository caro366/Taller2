import { View, FlatList } from 'react-native';
import { Text, List, Avatar, IconButton, Chip } from 'react-native-paper';

export default function ListaServicios() {
  const servicios = [
    {
      titulo: "Servicio de Notificación Telefonica",
      descripcion: "Abrir servicios telefónicos para alertas de dispositivos para mejorar la notificación en tiempo real",
      icono: "phone",
      color: "#4CAF50"
    },
    {
      titulo: "Protección inteligente",
      descripcion: "Aplicación de alarma para el hogar, protegiendo la seguridad de tu hogar",
      icono: "shield-home",
      color: "#42A5F5"
    },
    {
      titulo: "Compras",
      descripcion: "Encuentra rápidamente productos y marcas, descubre más productos inteligentes",
      icono: "cart",
      color: "#FFA726"
    },
    {
      titulo: "Maestro de Iluminación",
      descripcion: "Proporcione soluciones de iluminación personalizadas basadas en IA",
      icono: "lightbulb-on",
      color: "#7E57C2",
      chip: "New",
      chipColor: "#FFA726"
    },
    {
      titulo: "Asistente de voz de terceros",
      descripcion: "Utiliza altavoces inteligentes para controlar tu hogar",
      icono: "home-assistant",
      color: "#64B5F6"
    }
  ];

  return (
    <FlatList
      style={{ flex: 1, backgroundColor: '#f8f9fa', padding: 16 }}
      data={servicios}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <>
         
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <IconButton icon="home" size={24} />
            <IconButton icon="cog-outline" size={24} />
          </View>

         
          <Text
            variant="headlineMedium"
            style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 8, marginBottom: 16 }}
          >
            Lista de servicios
          </Text>
        </>
      }
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            paddingVertical: 4,
            marginBottom: 12,
          }}
        >
          <List.Item
            title={() => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>{item.titulo}</Text>
                {item.chip && (
                  <Chip
                    style={{
                      marginLeft: 8,
                      backgroundColor: item.chipColor,
                      borderRadius: 10,
                    }}
                    textStyle={{ color: 'white' }}
                    compact
                  >
                    {item.chip}
                  </Chip>
                )}
              </View>
            )}
            description={item.descripcion}
            left={props => (
              <Avatar.Icon
                {...props}
                icon={item.icono}
                size={36}
                style={{ backgroundColor: item.color, alignSelf: 'center', marginLeft: 12 }}
              />
            )}
            right={props => <IconButton {...props} icon="chevron-right" />}
          />
        </View>
      )}
    />
  );
}
