import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "react-emotion";

import { Row, Col } from "reactstrap";
import { H5Underline } from "../../style/typography";

import colors from "../../style/colors";
import { StyledSolidLink } from "../../components/deco";
import { LinkButton } from "../formData/components/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Pie from "../dashboard/Pie";

import ReactToPrint from "react-to-print";

import {
  income,
  housing,
  transportation,
  living,
  personal,
  totalExpenses
} from "../formData/calculation";

const Under = styled(Col)`
  border-bottom: 1px solid ${colors.softBorder};
  /* margin: 0 15px; */
  /* padding: 0; */
`;

const IconBox = styled("div")`
  display: inline-block;
  text-align: center;
  width: 40px;
`;

const ColHeaders = styled(Row)`
  text-align: center;
  margin: 0 0 10px;
`;

const ContentRow = styled(Row)`
  padding: 5px 0;
`;

const TotalContentRow = styled(ContentRow)`
  font-weight: 700;
`;

const Container = styled("div")`
  border: solid ${colors.softBorder} 1px;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
`;

const BudgetHeader = styled("h1")`
  padding: 25px 0;
  text-align: center;
`;

const TotalsContainer = styled(Container)`
  font-weight: 700;
`;

class PrintableBudget extends Component {
  render() {
    const values = this.props.values;
    return (
      <div style={{ minWidth: "1000px" }}>
        <BudgetHeader>My Budget</BudgetHeader>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            <Container>
              <H5Underline>
                <IconBox>
                  <FontAwesomeIcon icon="dollar-sign" />
                </IconBox>
                Monthly Income
              </H5Underline>
              <ColHeaders>
                <Col />
                <Col xs={3} sm={3} md={3} lg={3}>
                  Budgeted
                </Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  Actual
                </Col>
              </ColHeaders>
              <ContentRow>
                <Col>Wage Income</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.wage_income || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Bi-weekly paycheck</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.bi_weekly_paycheck || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Self Employment Income</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.self_employment_income || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Government Benefits</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.government_benefits || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Other Income</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.other_income || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Other Income</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.other_income_2 || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <TotalContentRow>
                <Col>Total Income</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${income(values)}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </TotalContentRow>
            </Container>
            <Container>
              <H5Underline>
                <IconBox>
                  <FontAwesomeIcon icon="car" />
                </IconBox>
                Transportation
              </H5Underline>
              <ColHeaders>
                <Col />
                <Col xs={3} sm={3} md={3} lg={3}>
                  Budgeted
                </Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  Actual
                </Col>
              </ColHeaders>
              <ContentRow>
                <Col>Car</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.car || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Insurance</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.transportation_insurance || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Gas</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.gas || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Parking</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.parking || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Bicycle</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.bicycle || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Public Transport</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.public_transport || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Taxi</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.taxi || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Other Transport</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.other_transport || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <TotalContentRow>
                <Col>Total Transportation</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${transportation(values)}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </TotalContentRow>
            </Container>
            <Container>
              <H5Underline>
                <IconBox>
                  <FontAwesomeIcon icon="user" />
                </IconBox>
                Personal
              </H5Underline>
              <ColHeaders>
                <Col />
                <Col xs={3} sm={3} md={3} lg={3}>
                  Budgeted
                </Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  Actual
                </Col>
              </ColHeaders>
              <ContentRow>
                <Col>Recreation and Entertainment</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.recreation_entertainment || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Eating Out</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.eating_out || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Cigarettes and Alcohol</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.cigarettes_alcohol || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Personal Grooming</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.personal_grooming || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Magazines and Newspapers</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.magazines_newspapers || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Gifts and Donations</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.gifts_donations || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Vacation and Travel</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.vacation_travel || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Saving Goals</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.saving_goals || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <TotalContentRow>
                <Col>Total Personal Expenses</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${personal(values)}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </TotalContentRow>
            </Container>
            <TotalsContainer>
              <H5Underline>Totals</H5Underline>
              <ColHeaders>
                <Col />
                <Col xs={3} sm={3} md={3} lg={3}>
                  Budgeted
                </Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  Actual
                </Col>
              </ColHeaders>
              <ContentRow>
                <Col>Total Income</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${income(values) || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <TotalContentRow>
                <Col>Total Expenses</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${totalExpenses(values) || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </TotalContentRow>
            </TotalsContainer>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <Container>
              <H5Underline>
                <IconBox>
                  <FontAwesomeIcon icon="home" />
                </IconBox>
                Housing
              </H5Underline>
              <ColHeaders>
                <Col />
                <Col xs={3} sm={3} md={3} lg={3}>
                  Budgeted
                </Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  Actual
                </Col>
              </ColHeaders>
              <ContentRow>
                <Col>Rent or Mortgage</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.rent_mortgage || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Heat</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.heat || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Hydro</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.hydro || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Cable and Internet</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.cable_internet || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Phone</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.phone || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Other Housing</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.other_housing || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <TotalContentRow>
                <Col>Total Housing Expenses</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${housing(values)}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </TotalContentRow>
            </Container>
            <Container>
              <H5Underline>
                <IconBox>
                  <FontAwesomeIcon icon="walking" />
                </IconBox>
                Living
              </H5Underline>
              <ColHeaders>
                <Col />
                <Col xs={3} sm={3} md={3} lg={3}>
                  Budgeted
                </Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  Actual
                </Col>
              </ColHeaders>
              <ContentRow>
                <Col>Food</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.food || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Clothing and Laundry</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.clothing_laundry || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Childcare</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.childcare || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Loan Payment</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.loan_payment || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Credit Card</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.credit_card || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Prescription Drugs</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.prescription_drugs || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Pets</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.pets || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Insurance</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.living_insurance || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Municipal taxes</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.municipal_taxes || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Other Living Expenses</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.other_living_expenses || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <TotalContentRow>
                <Col>Total Living Expenses</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${living(values)}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </TotalContentRow>
            </Container>
            <Container>
              <Pie values={values} />
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}

const ButtonBar = () => (
  <Container>
    <Row
      className="d-flex justify-content-between"
      style={{ paddingLeft: "15px" }}
    >
      <LinkButton to="/Form/review" name="PREVIOUS" />
      <ReactToPrint
        trigger={() => (
          <StyledSolidLink href="#">Print your budget!</StyledSolidLink>
        )}
        content={() => this.componentRef}
      />
    </Row>
  </Container>
);

const Budget = props => {
  return (
    <React.Fragment>
      <ButtonBar />
      <PrintableBudget
        values={props.newBudget}
        ref={el => (this.componentRef = el)}
      />
      <ButtonBar />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return { newBudget: state.budgetReducer };
};

export default connect(mapStateToProps)(Budget);
