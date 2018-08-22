import "regenerator-runtime/runtime";
import React from "react";

import { store } from "../../index";
import { connect } from "react-redux";

import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    paddingTop: 50
  }
});

const BudgetPDF = props => {
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text style={styles.page}>HELLO!</Text>
          <Text>{props.wage_income}</Text>
        </View>
      </Page>
    </Document>
  );
};

const mapStateToProps = state => {
  return {
    newBudget: state.budgetReducer
  };
};

export default connect(
  mapStateToProps,
  store
)(BudgetPDF);
