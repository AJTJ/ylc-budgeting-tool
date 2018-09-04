import React from "react";
import { connect } from "react-redux";
import styled from "react-emotion";

import { Row, Col } from "reactstrap";
import { H5Underline } from "../../style/typography";

import Pie from "../dashboard/Pie";

import ReactToPrint from "react-to-print";
import { Container } from "../../components/layout";

import {
  income,
  housing,
  transportation,
  living,
  personal,
  totalExpenses
} from "../formData/calculation";

const Under = styled(Col)`
  border-bottom: 1px solid black;
  /* margin: 0 15px;
  padding: none; */
`;

const ColHeaders = styled(Row)`
  text-align: center;
`;

const PrintableBudget = props => {
  const values = props.newBudget;
  console.log("printablebudg", props);
  return (
    <Container>
      <Row>
        <Col xs={6} sm={6} md={6} lg={6}>
          <Container>
            <Col>
              <H5Underline>Income</H5Underline>
              <ColHeaders>
                <Col />
                <Col>Budgeted</Col>
                <Col>Actual</Col>
              </ColHeaders>
              <Row>
                <Col>Wage Income</Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  ${values.wage_income || 0}
                </Col>
                <Under xs={3} sm={3} md={3} lg={3} />
              </Row>
              <Row>
                <Col>Self Employment Income</Col>
                <Col>${values.self_employment_income || 0}</Col>
                <Under />
              </Row>
              <Row>
                <Col>Government Benefits</Col>
                <Col>${values.government_benefits || 0}</Col>
                <Under />
              </Row>
              <Row>
                <Col>Other Income</Col>
                <Col>${values.other_income || 0}</Col>
                <Under />
              </Row>
              <Row>
                <Col>Other Income</Col>
                <Col>${values.other_income_2 || 0}</Col>
                <Under />
              </Row>
              <Row>
                <Col>Total Income</Col>
                <Col>${income(values)}</Col>
                <Under />
              </Row>
            </Col>
          </Container>
          <Container>
            <H5Underline>Transportation</H5Underline>
            <ColHeaders>
              <Col />
              <Col>Budgeted</Col>
              <Col>Actual</Col>
            </ColHeaders>
            <Row>
              <Col>Car</Col>
              <Col>${values.car || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Gas</Col>
              <Col>${values.gas || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Parking</Col>
              <Col>${values.parking || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Public Transport</Col>
              <Col>${values.public_transport || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Taxi</Col>
              <Col>${values.taxi || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Other Transport</Col>
              <Col>${values.other_transport || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Total Transportation</Col>
              <Col>${transportation(values)}</Col>
              <Under />
            </Row>
          </Container>
          <Container>
            <H5Underline>Personal</H5Underline>
            <ColHeaders>
              <Col />
              <Col>Budgeted</Col>
              <Col>Actual</Col>
            </ColHeaders>
            <Row>
              <Col>Recreation and Entertainment</Col>
              <Col>${values.recreation_entertainment || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Eating Out</Col>
              <Col>${values.eating_out || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Cigarettes and Alcohol</Col>
              <Col>${values.cigarettes_alcohol || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Personal Grooming</Col>
              <Col>${values.personal_grooming || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Magazines and Newspapers</Col>
              <Col>${values.magazines_newspapers || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Gifts and Donations</Col>
              <Col>${values.gifts_donations || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Vacation and Travel</Col>
              <Col>${values.vacation_travel || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Saving Goals</Col>
              <Col>${values.saving_goals || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Total Personal Expenses</Col>
              <Col>${personal(values)}</Col>
              <Under />
            </Row>
          </Container>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <Container>
            <H5Underline>Housing</H5Underline>
            <ColHeaders>
              <Col />
              <Col>Budgeted</Col>
              <Col>Actual</Col>
            </ColHeaders>
            <Row>
              <Col>Rent or Mortgage</Col>
              <Col>${values.rent_mortgage || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Heat</Col>
              <Col>${values.heat || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Hydro</Col>
              <Col>${values.hydro || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Cable and Internet</Col>
              <Col>${values.cable_internet || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Phone</Col>
              <Col>${values.phone || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Other Housing</Col>
              <Col>${values.other_housing || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Total Housing Expenses</Col>
              <Col>${housing(values)}</Col>
              <Under />
            </Row>
          </Container>
          <Container>
            <H5Underline>Living</H5Underline>
            <ColHeaders>
              <Col />
              <Col>Budgeted</Col>
              <Col>Actual</Col>
            </ColHeaders>
            <Row>
              <Col>Food</Col>
              <Col>${values.food || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Clothing and Laundry</Col>
              <Col>${values.clothing_laundry || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Childcare</Col>
              <Col>${values.childcare || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Loan Payment</Col>
              <Col>${values.loan_payment || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Credit Card</Col>
              <Col>${values.credit_card || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Prescription Drugs</Col>
              <Col>${values.prescription_drugs || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Pets</Col>
              <Col>${values.pets || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Other Living Expenses</Col>
              <Col>${values.other_living_expenses || 0}</Col>
              <Under />
            </Row>
            <Row>
              <Col>Total Living Expenses</Col>
              <Col>${living(values)}</Col>
              <Under />
            </Row>
          </Container>
          <Pie values={values} />
        </Col>
      </Row>
    </Container>
  );
};

export const BudgetPrintLink = props => {
  console.log("budgwrapper", props);
  return (
    <ReactToPrint
      trigger={() => <a href="/budget">Print your budget!</a>}
      content={() => PrintableBudget}
    />
  );
};

const mapStateToProps = state => {
  return { newBudget: state.budgetReducer };
};

export default connect(mapStateToProps)(PrintableBudget);
