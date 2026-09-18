import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://via.placeholder.com/120' }}
          style={styles.avatar}
        />

        {/* Nama & Role */}
        <Text style={styles.name}>Fadli Fernando</Text>
        <Text style={styles.role}>Aspiring Full Stack Developer</Text>

        <View style={styles.divider} />

        {/* Detail Informasi */}
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>NIM</Text>
            <Text style={styles.value}>2488010043</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Alamat</Text>
            <Text style={styles.value}>Cirebon</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Cita-cita</Text>
            <Text style={styles.value}>Full Stack Developer</Text>
          </View>
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: 360,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    // Shadow untuk iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Elevation untuk Android
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e1e4e8',
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  role: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
    marginTop: 4,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#eef0f2',
    marginVertical: 20,
  },
  infoContainer: {
    width: '100%',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    color: '#6c757d',
    fontWeight: '500',
  },
  value: {
    fontSize: 14,
    color: '#212529',
    fontWeight: '600',
  },
});