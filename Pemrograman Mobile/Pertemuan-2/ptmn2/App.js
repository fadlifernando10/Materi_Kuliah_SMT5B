import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  const steps = [
    'Menguasai HTML, CSS, dan JavaScript/TypeScript',
    'Mempelajari framework Frontend (React / React Native)',
    'Memahami Backend & Database (Node.js, Express, MySQL/MongoDB)',
    'Membangun proyek Full Stack portofolio secara mandiri',
    'Pelajari Git & CI/CD untuk kolaborasi kode',
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Profile */}
      <Image
        source={{ uri: 'https://via.placeholder.com/120' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Fadli Fernando</Text>
     

      <View style={styles.divider} />

      {/* Detail Informasi */}
      <View style={styles.section}>
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

      <View style={styles.divider} />

      {/* Langkah Menggapai Cita-cita */}
 <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rencana Menggapai Cita-cita</Text>
        <Text style={styles.paragraphText}>
          Untuk mewujudkan cita-cita sebagai Full Stack Developer, saya akan fokus belajar secara bertahap, mulai dari keterampilan frontend seperti HTML, CSS, JavaScript hingga keterampilan backend dan database (seperti Node.js dan MySQL).
        </Text>
      </View>

      <StatusBar style="dark" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#e1e4e8',
    marginBottom: 12,
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
    marginTop: 2,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#f0f0f0',
    marginVertical: 20,
  },
  section: {
    width: '100%',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  label: {
    fontSize: 14,
    color: '#6c757d',
  },
  value: {
    fontSize: 14,
    color: '#212529',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  paragraphText: {
    fontSize: 14,
    color: '#495057',
    lineHeight: 22,
    textAlign: 'justify',
  },
});