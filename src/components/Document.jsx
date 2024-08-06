import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


export default function MyDocument({formData}) {
    
    const styles = StyleSheet.create({
        page: {
          flexDirection: 'column',
          backgroundColor: '#E4E4E4',
          padding: 20,
        },
        section: {
          margin: 10,
          padding: 10,
          flexGrow: 1,
        },
      });
  return (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Name: {formData?.fullName}</Text>
      </View>
      <View style={styles.section}>
        <Text>Email: {formData?.email}</Text>
      </View>
      <View style={styles.section}>
        <Text>Github: {formData?.github}</Text>
      </View>
    </Page>
  </Document>
  )
}
