import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, List, Divider } from 'react-native-paper';

const opcionesPrivacidad = [
  {
    subheader: 'Datos y permisos',
    items: [
      {
        title: 'Uso de datos',
        description: 'Administra cómo se usan tus datos para mejorar la experiencia.',
        icon: 'database',
      },
      {
        title: 'Permisos de la aplicación',
        description: 'Revisa y modifica los permisos que has concedido (cámara, ubicación, etc.).',
        icon: 'shield-lock-outline',
      },
      {
        title: 'Actividad y historial',
        description: 'Consulta o elimina tu historial de actividad dentro de la aplicación.',
        icon: 'history',
      },
    ],
  },
  {
    subheader: 'Preferencias de comunicación',
    items: [
      {
        title: 'Notificaciones personalizadas',
        description: 'Controla qué tipo de notificaciones recibes (promociones, actualizaciones).',
        icon: 'bell-outline',
      },
      {
        title: 'Correos de marketing',
        description: 'Administra si quieres recibir correos de promociones.',
        icon: 'email-outline',
      },
    ],
  },
  {
    subheader: 'Condiciones y políticas',
    items: [
      {
        title: 'Política de privacidad',
        description: 'Lee nuestra política de privacidad completa.',
        icon: 'file-document-outline',
        onPress: () => console.log('Navegar a la política de privacidad'),
      },
      {
        title: 'Términos y condiciones',
        description: 'Lee los términos y condiciones del servicio.',
        icon: 'file-cog-outline',
        onPress: () => console.log('Navegar a los términos y condiciones'),
      },
    ],
  },
];

export default function AjustesPrivacidad() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={{ padding: 23, backgroundColor: '#ffffff', borderBottomWidth: 1, borderBottomColor: '#e0e0e0', marginBottom: 10 }}>
        <Text variant="headlineMedium" style={{ fontWeight: 'bold', color: '#333' }}>
          Ajustes de Privacidad
        </Text>
        
      </View>

      {opcionesPrivacidad.map((seccion, index) => (
        <List.Section key={index}>
          <List.Subheader style={{ color: '#6a80a3', fontWeight: 'bold' }}>{seccion.subheader}</List.Subheader>
          {seccion.items.map((item, itemIndex) => (
            <View key={itemIndex}>
              <List.Item
                title={item.title}
                description={item.description}
                titleStyle={{ fontSize: 16, fontWeight: '500' }}
                descriptionStyle={{ fontSize: 12, color: '#888' }}
                left={props => <List.Icon {...props} icon={item.icon} />}
                onPress={item.onPress}
              />
              {itemIndex < seccion.items.length - 1 && <Divider style={{ backgroundColor: '#e0e0e0', marginLeft: 64 }} />}
            </View>
          ))}
        </List.Section>
      ))}
    </ScrollView>
  );
}
