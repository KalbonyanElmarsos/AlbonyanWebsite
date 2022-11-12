import React, { useState } from "react";
import TrCourse from "../../tools/trCourse/TrCourse";
import TrTitle from "../../tools/trTitle/TrTitle";
import "./subject.css";

const Subject = () => {
  const [open, setOpen] = useState(false);

  const switchMode = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <section className="subject" id="subject">
      <h1>منهج المسابقة</h1>
      {/* table */}
      <table class="subject-container">
        <thead>
          <tr>
            <th>م </th>
            <th>الكورس</th>
            <th>المنصة</th>
            <th>عدد الساعات</th>
          </tr>
        </thead>

        <tbody>
          <TrTitle title="Learn Programming Foundations" />
          <TrCourse
            number="1"
            link="https://www.linkedin.com/learning/programming-foundations-fundamentals-3?contextUrn=urn%3Ali%3AlyndaLearningPath%3A56db2b643dd5596be4e4989b"
            name="Fundamentals"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />
          <TrCourse
            number="2"
            link=""
            name="Beyond the Fundamentals"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />
          <TrCourse
            number="3"
            link=""
            name="Object-Oriented Design"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />
          <TrCourse
            number="4"
            link=""
            name=" Data Structures"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />
          <TrCourse
            number="5"
            link=""
            name="Algorithms"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />
          <TrCourse
            number="6"
            link=""
            name="Design Patterns"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />
          <TrCourse
            number="7"
            link=""
            name="Databases"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />
          <TrCourse
            number="8"
            link=""
            name="APIs and Web Services"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />
          <TrCourse
            number="9"
            link=""
            name="Software Testing"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />
          <TrCourse
            number="10"
            link=""
            name="Learning GitHub"
            platFrom="Linkedin Learning"
            hours="2h 6m"
          />

          {/* html,css */}
          <TrTitle title="Learn HTML and CSS" />
          <TrCourse
            number="11"
            link=""
            name="Build Responsive Real-World Websites with HTML and CSS"
            platFrom="Udemy"
            hours="2h 6m"
          />

          {/* js */}
          {open ? (
            <>
              <TrTitle title="Learn JavaScript" />
              <TrCourse
                number="12"
                link=""
                name="The Complete JavaScript Course 2022: From Zero to Expert!"
                platFrom="Udemy"
                hours="69h"
              />
              <TrCourse
                number="12"
                link=""
                name="The Modern JavaScript Bootcamp"
                platFrom="Udemy"
                hours="29h 30m"
              />

              {/* React */}
              <TrTitle title="Learn React Js" />
              <TrCourse
                number="13"
                link=""
                name="React - The Complete Guide (incl Hooks, React Router, Redux)"
                platFrom="Udemy"
                hours="48h"
              />
              <TrCourse
                number="13"
                link=""
                name=" Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)"
                platFrom="Udemy"
                hours="39h"
              />

              {/* NodeJs */}
              <TrTitle title="Learn Node Js" />
              <TrCourse
                number="14"
                link=""
                name="The Complete Node.js Developer Course (3rd Edition)"
                platFrom="Udemy"
                hours="35h"
              />
              <TrCourse
                number="14"
                link=""
                name="Complete NodeJS Developer in 2022 (GraphQL, MongoDB, + more)"
                platFrom="Udemy"
                hours="46h"
              />

              {/* AWS  */}
              <TrTitle title="Learn How to Deploy your web applications with Cloud Provider (AWS) Learn React Js" />
              <TrCourse
                number="15"
                link=""
                name="AWS Certified Cloud Practitioner (CLF-C01)"
                platFrom="Cloud Guru"
                hours="16h"
              />
              <TrCourse
                number="16"
                link=""
                name="AWS Certified Solutions Architect Associate (SAA-C02)"
                platFrom="Cloud Guru"
                hours="42h"
              />
              <TrTitle title="Learn How to Make serverless web applications" />
              <TrCourse
                number="17"
                link=""
                name="Serverless Stack (SST)"
                platFrom="Serverless Stack"
                hours="10h"
              />
            </>
          ) : (
            ""
          )}

          {/* button to switch  */}
          <tr className="button-row">
            <td colspan="4" className="subject-container-colspan">
              <button onClick={switchMode}>
                {open ? "إخفــاء باقــي المنهــج" : " عــرض باقــي المنهــج"}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Subject;

// import * as React from "react";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import Collapse from "@mui/material/Collapse";
// import IconButton from "@mui/material/IconButton";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import { MdOutlineKeyboardArrowUp } from "react-icons/md";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// function createData(titleName, courseName, hours, link) {
//   return {
//     titleName,

//     history: [
//       {
//         // date: "2020-01-05",
//         // customerId: "11091700",
//         // amount: 3,
//         courseName: "Fundamentals",
//         hours: "2h 6m",
//         link: "https://m2001said.github.io/kalbonyanElmarsosWebsite/",
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous",
//         amount: 1,
//         courseName: "Beyond the Fundamentals",
//         hours: "1h 8m",
//         link: "https://react-icons.github.io/react-icons/search?q=mdoutlinekeyboardarrow",
//       },
//     ],
//   };
// }

// function Row({ row }) {
//   // const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   return (
//     <>
//       {/* title of course row  */}
//       <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? (
//               <MdOutlineKeyboardArrowUp />
//             ) : (
//               <MdOutlineKeyboardArrowDown />
//             )}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row" colspan="3" align="center">
//           {row.titleName}
//         </TableCell>
//       </TableRow>

//       {/*  */}
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               {/* <Typography variant="h6" gutterBottom component="div">
//                 History
//               </Typography> */}
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell align="center">اسم الكورس</TableCell>
//                     <TableCell align="center">عدد الساعات</TableCell>
//                   </TableRow>
//                 </TableHead>

//                 {/* body */}
//                 <TableBody>
//                   {row.history.map((historyRow) => (
//                     <TableRow key={historyRow.courseName}>
//                       <TableCell align="center">
//                         <a
//                           target="_blank"
//                           rel="noreferrer"
//                           href={historyRow.link}
//                         >
//                           {historyRow.courseName}
//                         </a>
//                       </TableCell>
//                       <TableCell align="center">{historyRow.hours}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </>
//   );
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     hours: PropTypes.number.isRequired,

//     link: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     titleName: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//   }).isRequired,
// };

// const rows = [
//   createData("Learn Programming Foundations", 159, 6.0, 24, 4.0, 3.99),
//   createData("Learn HTML and CSS", 237, 9.0, 37, 4.3, 4.99),
//   createData("Learn JavaScript", 262, 16.0, 24, 6.0, 3.79),
//   createData("Learn React Js", 305, 3.7, 67, 4.3, 2.5),
//   createData("Learn Node Js", 356, 16.0, 49, 3.9, 1.5),
//   createData(
//     "Learn How to Deploy your web applications with Cloud Provider (AWS) Learn React Js",
//     356,
//     16.0,
//     49,
//     3.9,
//     1.5
//   ),
//   createData(
//     "Learn How to Make serverless web applications",
//     356,
//     16.0,
//     49,
//     3.9,
//     1.5
//   ),
// ];

// const Subject = () => {
//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label="collapsible table">
//          <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell align="center">اسم الكورس</TableCell>
//             <TableCell align="center">عدد الساعات</TableCell>
//             <TableCell align="center">اللينك</TableCell>
//           </TableRow>
//         </TableHead>
//          body of table
//          <TableBody>
//           {rows.map((row) => (
//             <Row key={row.titleName} row={row} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default Subject;
