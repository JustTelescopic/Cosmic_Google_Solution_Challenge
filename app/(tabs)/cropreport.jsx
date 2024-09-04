import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from "react-native-vector-icons/Feather";
import { ReportContext } from '../../context';

export default function CropDiagnosisReport() {
  const {report,setReport} = useContext(ReportContext)
  console.log(report)
  console.log(report['Treatment Plan'])
 if (!report) return <SafeAreaView ><Text>this is no report</Text></SafeAreaView>
  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.container}
    >
      <View style={styles.headerContainer}>
          <Text style={styles.header}>Crop Disease Diagnosis</Text>
          <View style={styles.underline} />
          {/* <Text style={styles.subheader}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonumy
        </Text> */}
        </View>
      <View style={[styles.section,styles.diseaseSection]}>
        <View style={styles.underlinedHeader}>
          <Text style={styles.textTitle}>Disease Recognized</Text>
          <View style={styles.textUnderline} />
        </View>
      { report['Disease Recognized'] && <Text style={styles.diseaseTitle}>{report['Disease Recognized']}</Text>}
        {report['Severity']  && <Text style={styles.severity}>{report['Severity']} Severity</Text>}
        {report['Description'] && <Text style={styles.description}>
          {report['Description']}
        </Text>}
      </View>

     {report['Treatment Plan'] && <View style={styles.sectionWrapper}>            
        <View style={styles.section}>
          {/* <Text style={styles.sectionTitle}>Preventive Measures</Text> */}
          <View style={styles.underlinedHeader}>
            <Text style={{...styles.textTitle, color : "#0F4C05"}}>Treatment Plan</Text>
            <View style={styles.textUnderline} />
          </View>
          {report['Treatment Plan'] ? report['Treatment Plan']?.map((item, index) => {
            if(typeof item =="string") {
            return (<View style={styles.treatmentItem} key={index}>
              {/* <Text style={[styles.treatmentHeading,styles.text_right]}>{item.Treatment}</Text> */}
              <Text style={styles.treatmentDescription}>{index+1}. {item}</Text>
              {/* <Text style={[styles.treatmentHeading,styles.text_right]}>{item.Treatment}</Text>
              <Text style={styles.treatmentDescription}>{index+1}. {item.Description}</Text> */}
            </View>)
            } else{
              return (<View style={styles.treatmentItem} key={index}>
                {/* <Text style={[styles.treatmentHeading,styles.text_right]}>{item.Treatment}</Text>
                <Text style={styles.treatmentDescription}>{index+1}. {item}</Text> */}
                <Text style={[styles.treatmentHeading,styles.text_right]}>{item.Treatment}</Text>
                <Text style={styles.treatmentDescription}>{index+1}. {item.Description || item.description}</Text>
              </View>)
            }
      }):<></>}

        </View>
        </View>}

    {report['Preventive Measures'] &&  <View style={styles.sectionWrapper}>            
        <View style={{...styles.section,backgroundColor : 'white'}}>
          {/* <Text style={styles.sectionTitle}>Preventive Measures</Text> */}
          <View style={styles.underlinedHeader}>
            <Text style={{...styles.textTitle, color : "#0F4C05", alignSelf: 'flex-end'}}>Preventive Measures</Text>
            <View style={{...styles.textUnderline,alignSelf : 'flex-end'}} />
          </View>
          {report['Preventive Measures']?.map((item, index) => {
            if(typeof item =="string") {
              return ( <View style={styles.treatmentItem} key={index}>
                {/* <Text style={{...styles.treatmentHeading,textAlign : "right"}}>{item.Measure}</Text> */}
                <Text style={{...styles.treatmentDescription, textAlign : "right"}}>
                {index+1}. {item}
                </Text>
              </View>)
              } else{
                return ( <View style={styles.treatmentItem} key={index}>
                  <Text style={{...styles.treatmentHeading,textAlign : "right"}}>{item.Measure}</Text>
                  <Text style={{...styles.treatmentDescription, textAlign : "right"}}>
                  {index+1}. {item.Description}
                  </Text>
                </View>)
              }
            // <View style={styles.treatmentItem} key={index}>
            //   <Text style={{...styles.treatmentHeading,textAlign : "right"}}>{item.Measure}</Text>
            //   <Text style={{...styles.treatmentDescription, textAlign : "right"}}>
            //   {index+1}. {item.Description}
            //   </Text>
            // </View>
          })}
        </View>
        </View>}
        
      {/* <View style={styles.sectionWrapper}>            
        <View style={{...styles.section,backgroundColor : 'white'}}>
          <Text style={styles.sectionTitle}>Preventive Measures</Text>
          <View style={styles.underlinedHeader}>
            <Text style={{...styles.textTitle, color : "#0F4C05"}}>Actionable Steps</Text>
            <View style={{...styles.textUnderline}} />
          </View>
          <View style={styles.treatmentItem}>
            <Text style={{...styles.treatmentHeading,textAlign : "right"}}>Use of Resistant Varieties</Text>
            <Text style={{...styles.treatmentDescription, textAlign : "right"}}>
              Planting late blight-resistant potato varieties can reduce the severity of the disease.
            </Text>
          </View>
          <View style={styles.treatmentItem}>
            <Text style={{...styles.treatmentHeading,textAlign : "right"}}>Crop Rotation</Text>
            <Text style={{...styles.treatmentDescription, textAlign : "right"}}>
              Rotate crops to avoid planting potatoes in the same field consecutively, reducing disease pressure.
            </Text>
          </View>
        </View>
        </View> */}

      {/* <View style={styles.section}>
        <Text style={styles.sectionTitle}>Actionable Steps</Text>
        <View style={styles.stepsContainer}>
          <Image source={{ uri: 'https://link-to-your-image1.png' }} style={styles.stepImage} />
          <Image source={{ uri: 'https://link-to-your-image2.png' }} style={styles.stepImage} />
        </View>
      </View> */}

    { report['Additional Notes'] && <View style={styles.sectionWrapper}>            
        <View style={{...styles.section,backgroundColor : 'rgba(175, 250, 174,0.29)'}}>
          {/* <Text style={styles.sectionTitle}>Preventive Measures</Text> */}
          <View style={styles.underlinedHeader}>
            <Text style={{...styles.textTitle, color : "#0F4C05", alignSelf: 'center'}}>Additional Notes</Text>
            <View style={{...styles.textUnderline,alignSelf : 'center'}} />
          </View>
          <View style={styles.treatmentItem}>
            <Text style={{...styles.treatmentDescription, textAlign : "center"}}>
              {report['Additional Notes']}
            </Text>
          </View>         
        </View>
      </View>}

      {/* <View style={styles.section}>
        <Text style={styles.sectionTitle}>Additional Notes</Text>
        <Text style={styles.additionalNotes}>
          Under weather conditions, always check the local forecast and consider disease risk factors when planning fungicide applications.
        </Text>
      </View> */}

      <View style={styles.footer}>
        <TouchableOpacity style={{...styles.button, justifyContent : 'flex-end'}}>
          <FeatherIcon name="share-2" size={25} style={styles.inputIcon} />
          <Text style={styles.buttonText}>Share Report</Text>
        </TouchableOpacity>
        <View style={styles.bar}/>
        <TouchableOpacity style={{...styles.button, justifyContent : 'flex-start'}}>
          <FeatherIcon name="download" size={25} style={styles.inputIcon} />
          <Text style={styles.buttonText}>Download Report</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  safeArea : {
    
  },
  container: { 
    // padding: 10,
    paddingBottom : 150,
    backgroundColor: '#F4F7FA',
  },
  header: {
    // flex: 1,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    width: "100%",
  },
  headerContainer: {
    // flex: 1,
    alignItems: "center",
    justifyContent : 'center',
    paddingTop: 16,
    width: "100%",
  },
  subheader: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 0,
    color: "#666",
    lineHeight: 18,
  },
  underline: {
    width: "70%",
    height: 2,
    backgroundColor: "#7CFC00",
    marginTop: 4,
    transform: "translateY(-10px)",
  },
  underlinedHeader : {
    flex : 1,
    width : '100%',
    alignSelf : 'center',
  },
  textTitle : {
    color: 'white',
    backgroundColor : 'transparent',
    fontSize: 18,
    fontWeight: '500',
    alignSelf : 'flex-start',
    paddingHorizontal : 2
  },
  textTitleRight : {
    alignSelf : 'flex-start',
  },
  textUnderline : {
    width: "50%",
    height: 2,
    backgroundColor: "#A8E190",
    marginTop: 4,
    transform: "translateY(-3px)",
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  diseaseSection : {
    backgroundColor: '#0F4C05',
  },

  sectionWrapper: {
    // backgroundColor: '#D4FFC4',
    borderRadius: 10,
    padding: 15,
    // marginTop: 5,
  },
  section: {
    backgroundColor: '#D4FFC4',
    backgroundColor : "rgba(212,255,196,0.49)",
    borderRadius: 5,
    padding: 15,
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
  },
  diseaseTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop : 10,
    color: 'white',
  },
  severity: {
    color: 'rgba(255, 255, 255, 0.9)',    
    fontSize: 14,
    marginVertical: 0,
  },
  description: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20,
  },
  treatmentItem: {
    marginTop : 10,
    textAlign : "right",
    marginBottom: 5,
  },
  treatmentHeading: {
    fontSize: 16,
    fontWeight: '400',
    color : '#0F4C05',
    textDecorationColor : '#0F4C05',
    textDecorationLine : 'underline',
    // textAlign : "right"
  },
  treatmentDescription: {
    color: '#555',
    fontSize: 14,
    marginTop: 5,
    lineHeight: 20,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  stepImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  additionalNotes: {
    color: '#777',
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    columnGap : 3 
  },
  bar : {
    height : '100%',
    width : 2,
    backgroundColor: '#0F4C05',
  },
  button: {
    // backgroundColor: '#4CAF50',
    color : '#0F4C05',
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'center',
    width: '48%',
  },
  buttonText: {
    color: '#0F4C05',
    fontSize: 14,
    fontWeight: 'bold',
  },
  inputIcon : {
    alignSelf : 'center',
    color : "#0F3009",
    marginRight : 8
  },
});
