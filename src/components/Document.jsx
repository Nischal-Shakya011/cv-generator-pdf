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
          paddingVertical: 8,
        },
        text: {
          fontSize: 12,
        },
        header:{
          fontSize: 14,
          fontWeight: 'bold',
          borderBottom: '1px solid black',
          width: '100%'
        },

      });
  return (
    <Document>
    <Page size="A4" style={styles.page}>

      <View style={[styles.section,
        {
          textAlign:"center",
          fontSize: 16,
          fontWeight: 'bold',
        }
      ]}>
        <Text>{formData?.fullName}</Text>
      </View>

      <View style={[styles.text, styles.section,
        {
          display:"flex",
          flexDirection:"row",
          justifyContent: "space-between"
        }
      ]}>
        <Text>{formData?.email}</Text>
        <Text>linkedin</Text>
        <Text>location</Text>
      </View>

<View style={[{
  display: 'flex',
  gap: 4
}
]}>
  <View style={[{
    width: '40%'
  }]}>
      <View style={[styles.section]}>
        <Text style={[styles.header]}>Experience</Text>
        <Text>Title</Text>
        <Text>CompanyName</Text>
        <Text>DatePeriod</Text>
      </View>
  </View>

  <View>

  </View>
</View>
       
    </Page>
  </Document>
  )
}




 {/* <View style={[{ width: "150px", height: "160px" }]}>
          <Image src={formData?.image} />
        </View>       */}