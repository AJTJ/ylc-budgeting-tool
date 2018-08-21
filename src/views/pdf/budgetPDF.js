import React from "react";

import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    paddingTop: 50
  }
});

export const BudgetPDF = values => {
  <Document>
    <View>
      <Page>
        <Text style={styles.page}>{values.wage_income}</Text>
      </Page>
    </View>
  </Document>;
};
