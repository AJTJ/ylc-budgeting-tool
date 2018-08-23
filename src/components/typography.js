import styled, { css } from "react-emotion";
import colors from "../style/colors";

import { Row } from "reactstrap";

export const H5Underline = styled("h5")`
  border-bottom: 1px solid ${colors.softBorder};
  width: 100%;
  padding: 5px;
  text-align: center;
`;

// export const underlinedText = css({
//   borderBottomColor: colors.softBorder,
//   borderBottomWidth: "1px",
//   borderBottomStyle: "solid",
//   width: "100%",
//   padding: "5px",
//   textAlign: "center"
// });

export const TextUnderlined = styled(Row)`
  border-bottom: 1px solid ${colors.softBorder};
`;
