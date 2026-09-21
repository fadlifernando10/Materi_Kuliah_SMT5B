import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Detail Informasi */}
      <View style={styles.section}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Nama</Text>
          <Text style={styles.value}>Fadli Fernando</Text>
        </View>

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

      {/* Rencana Menggapai Cita-cita */}
      <View style={[styles.section, { marginTop: 20 }]}>
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