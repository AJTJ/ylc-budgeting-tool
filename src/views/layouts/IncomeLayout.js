import React from "react";
import styled from "react-emotion";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row
} from "reactstrap";

import { MiniBudget } from "../components/MiniBudget";
import Pie from "../components/Pie";
import { Tooltip } from "../components/Tooltip";

import { Container } from "../../components/layout";
import { StyledButton } from "../../components/deco";

import help from "../../assets/help.svg";

const Question = styled("img")`
  height: 20px;
  width: 20px;
  margin: 2px;
`;

export default props => {
  let { FormPage, curForm, state, toggle } = props;

  return (
    <Row className="d-flex justify-content-center">
      <Col xs={12} sm={12} md={12} lg={7}>
        <Container>
          <FormPage {...props} curForm={curForm} />
        </Container>
      </Col>
      <Col xs={12} sm={12} md={12} lg={5}>
        <MiniBudget {...props} curForm={curForm} />
        <Container>
          <Pie {...props} curForm={curForm} />
        </Container>
      </Col>
      <Modal isOpen={state.modal} toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle}>
          Welcome to the YLC Budgeting Application!
        </ModalHeader>
        <ModalBody>
          <p>
            Fill out each box to the best of your knowledge. Don't worry about a
            box that doesn't apply to you: you don't have to fill out
            everything!
          </p>
          <p>
            If you're uncertain about what something means, hover your mouse
            pointer over the{" "}
            {<Question src={help} alt="Question Mark Icon" id={"test"} />} to
            get more information.
          </p>
          <p>
            When you filled out all the boxes you can, click the "NEXT" button
            to go to the next page.
          </p>
          <Tooltip target={"test"} text={"Aren't I helpful? 🙂"} />
        </ModalBody>
        <ModalFooter>
          <em>Let us know if you need anything!</em>
          {
            <StyledButton name="NEXT" onClick={toggle}>
              NEXT
            </StyledButton>
          }
        </ModalFooter>
      </Modal>
    </Row>
  );
};
