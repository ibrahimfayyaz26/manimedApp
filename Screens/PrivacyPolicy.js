import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const PrivacyPolicy = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ marginTop: 5 }}>
          <Text style={styles.textBold}>Impartialenterprises</Text>
          <Text style={styles.text}>Website Privacy Policy</Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={styles.textBold}>Impartialenterprises</Text>
          <Text style={styles.text}>
            Thank you for visiting the Badger Sportswear (“ Impartialenterprises
            ”), web site. This Privacy Policy contains information about Badger
            Sportswear’s commitment to your privacy, including
          </Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={styles.text}>
            The information we collect and how we use it;
          </Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={styles.text}>
            Your rights to access or update your personally identifiable
            information;
          </Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={styles.text}>
            Your right to opt-out of receiving communications from us
          </Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={styles.text}>Secure your Design & Development</Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={styles.text}>
            Feel free to ask any question. Do​ not​ hesitate,
          </Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={styles.textBold}>Note: </Text>
          <Text style={styles.text}>
            This Privacy Policy only applies to this Impartialenterprises web
            site, and not to Impartialenterprises offline practices. This
            Privacy Policy does not apply to the web sites of other companies,
            individuals or organizations to which we may provide links. Visitors
            should consult other sites privacy policies, as Impartialenterprises
            has no control over information that is submitted to, or collected
            by, third parties.
          </Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={styles.textBold}>Impartialenterprises</Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={styles.textBold}>INFORMATION COLLECTION AND USE</Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={styles.text}>
            Impartialenterprises web site collects two kinds of information from
            you: (1) personal information that you submit to us, and (2)
            non-personal information, such as the pages you visited on our site
            and your IP address. To learn how to opt-out of receiving further
            information from Badger Sportswear, see the section marked “CHOICE”
            below.
          </Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={styles.text}>
            Personal Information: We collect and use personally identifiable
            information about you in the following ways: E-mail If you submit
            feedback, questions or requests for information about
            Impartialenterprises products and services, we may request your
            name, mailing address, telephone number and e-mail address in order
            to respond to your inquiries. Impartialenterprises may collect and
            store the information you choose to provide us to send you
            information about Impartialenterprises from time to time.
          </Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={styles.text}>
            Surveys and Promotions From time to time, we may request information
            from you via surveys or online promotions. Participation is
            completely voluntary; you have a choice whether or not to disclose
            any information. Information requested may include personal contact
            information such as your name, shipping address, phone number or
            e-mail address. This information may be used to contact users with
            further information about Impartialenterprises products and
            services, to notify winners and award prizes, and to monitor or
            improve use and satisfaction of this site.
          </Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={styles.textBold}>
            Your All Development , Designs & information are safe with us
          </Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={styles.textBold}>Feel your self fully secured.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
    padding: 15,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 50.5,
    shadowRadius: 8,
    textAlign: "center",
  },
  textBold: {
    fontFamily: "Bold",
    fontSize: 20,
  },
  text: {
    fontSize: 18,
  },
});

export default PrivacyPolicy;
