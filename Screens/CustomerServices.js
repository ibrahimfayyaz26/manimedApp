import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const CustomerServices = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textBold}>Introduction and Facilities.</Text>
        <View style={{ flex: 1, marginTop: 25 }}>
          <Text style={styles.textBold}>ImpartialEnterprises</Text>
          <Text style={styles.text}>
            is the name of your confidence and satisfaction, specialized
            Manufacturers and Exporters of leather jackets and sports wears.
            When you choose our products. You will discover a dynamically
            balanced. Our Manufacturing units Head office are working in
            Sialkot-Pakistan (The City of Sports).
          </Text>
        </View>
        <View>
          <Text style={styles.textBold}></Text>
          <Text style={styles.text}></Text>
        </View>
        <View>
          <Text style={styles.textBold}>Certification and Membership:</Text>
          <Text style={styles.textBold}>ImpartialEnterprises</Text>
          <Text style={styles.text}>
            is the member of Sports Goods Association & Sialkot Chamber of
            Commerce . Our quality Assurance Departments carry out the entire
            necessary test, inspections and process control activities to ensure
            that there is no any problem with the products.
          </Text>
        </View>
        <View>
          <Text style={styles.textBold}>Qualified Staff and Machinery:</Text>
          <Text style={styles.text}>
            Staff playing very important role for an organization, that’s why we
            hire very qualified and skilled staff, which help us to produce
            right products, at right way. We carry most modern Machines in all
            type of departments to meet the current and potential demand of the
            customers.
          </Text>
        </View>
        <View>
          <Text style={styles.textBold}>R & D Department:</Text>
          <Text style={styles.text}>
            The R & D department is independent and encouraged by the top
            management to bring innovation in material and design in order to
            meet the future challenges.
          </Text>
        </View>
        <View>
          <Text style={styles.textBold}>Material:</Text>
          <Text style={styles.text}>
            Our Products Mufactured using the best quality Meterials according
            to E.U Standard which is imported from USA, GERMANY, FRANCE and
            JAPAN. The key to our success is our quality assurance. We use the
            Right material for the Right products and the Top quality is
            Guaranteed. As our quality speaks for itself.
          </Text>
        </View>
        <View>
          <Text style={styles.textBold}>Guarantee:</Text>
          <Text style={styles.text}>
            Our Products are fully Guaranteed. In case of any manufacturing
            defect, we guarantee to replace free of cost.
          </Text>
        </View>
        <View>
          <Text style={styles.textBold}>Packing:</Text>
          <Text style={styles.text}>
            We always use an International standard packaging to reach the
            Products safe in the hand of consignee, but the final decision take
            place with the mutual consent between the Consignee and
            ImpartialEnterprises.
          </Text>
        </View>
        <View>
          <Text style={styles.textBold}>Price:</Text>
          <Text style={styles.text}>
            ImpartialEnterprises price competitive organization and believe to
            provide maximum co-operation to Customers.
          </Text>
        </View>
        <View>
          <Text style={styles.textBold}>Commitments:</Text>
          <Text style={styles.text}>
            Our Commitments is Quality, Satisfaction, Productivity, Growth &
            prosperity
          </Text>
        </View>
        <View>
          <Text style={styles.textBold}>Purpose:</Text>
          <Text style={styles.text}>
            Our purpose is to produce the right products, at the time, at the
            right price.
          </Text>
        </View>
        <View>
          <Text style={styles.textBold}>Our Merits :</Text>
          <Text style={styles.text}>
            1. Customer oriented firm {"\n"}2. Experienced, Conceptional &
            skilled Personal. {"\n"}3. Quality Management & interactive form of
            Leadership. {"\n"}4. Offer Quality Products at very competitive
            prices. {"\n"}5. Absence of variation in manipulated products.
            {"\n"}6. Used Standard Material. {"\n"}7. Accuracy in products
            manufacturing. {"\n"}8. Delivery under stipulated Period. {"\n"}9.
            Set easy and affordable mode of payment. {"\n"}10. Responsible for
            after sale services.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f9f9",
    flex: 1,
    justifyContent: "center",
    margin: 10,
    padding: 10,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 50.5,
    shadowRadius: 8,
  },
  textBold: {
    fontFamily: "Bold",
    fontSize: 21,
    marginTop: 10,
  },
  text: {
    marginTop: 3,
    fontSize: 18,
    marginLeft: 25,
    marginBottom: 10,
  },
});

export default CustomerServices;
