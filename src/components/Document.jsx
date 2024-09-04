import React from 'react'
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import location from '../assets/location.png'

export default function MyDocument({formData}) {
    
    const styles = StyleSheet.create({
        page: {
          flexDirection: 'column',
          backgroundColor: '#E4E4E4',
          padding: 20,
        },
        section: {
          // margin: 10,
          // padding: 10,
          // flexGrow: 1,
        },
        text: {
          fontSize: 12,
          padding:"4px"
        },
        icon: {
          width: 12, // Adjust the size of the icon
          height: 12,
          marginRight: 4,
        },
        row: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center', // Aligns items vertically in the center
          justifyContent: 'space-between',
        },
      });
  return (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={[styles,
        {
          textAlign:"center",
          fontSize: 18,
          fontWeight: 'bold'
        }
      ]}>
        <Text>{formData?.fullName}</Text>
      </View>
      <View style={[styles.text,
        {
          display:"flex",
          flexDirection:"row",
          justifyContent: "space-between"
        }
      ]}>
        <Text>{formData?.email}</Text>
        <Text>linkedin</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.icon} src={location} />
            <Text>location</Text>
          </View>
      </View>
     
        {/* <View style={[{ width: "150px", height: "160px" }]}>
          <Image src={formData?.image} />
        </View>       */}
    </Page>
  </Document>
  )
}
