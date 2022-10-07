// import css from "./Resume.module.css";
// // import resume from "../../public/document.pdf";
// import { useEffect, useRef } from "react";

// const PersonalResume = () => {
//   const viewer = useRef(null);
//   const instance = useRef();

//   useEffect(() => {
//     import("@pdftron/webviewer").then(() => {
//       WebViewer(
//         {
//           path: "lib",
//           initialDoc: `./document.pdf`,
//         },
//         viewer.current
//       ).then((inst) => {
//         instance.current = inst;
//       });
//     });
//   }, []);

//   // load the doc when filePath changes
//   useEffect(() => {
//     if (instance.current) {
//       instance.current.loadDocument(`./document.pdf`);
//     }
//   }, [instance]);

//   return (
//     <div className="App">
//       <div className="header">React sample</div>
//       <div className="webviewer" ref={viewer}></div>
//     </div>
//   );
// };

// export default PersonalResume;

// // const PersonalResume = () => {
// //     const viewer = useRef(null);

// //     useEffect(() => {
// //       import("@pdftron/webviewer").then(() => {
// //         WebViewer(
// //           {
// //             path: "/webviewer/lib",
// //             initialDoc: "/document.pdf",
// //           },
// //           viewer.current
// //         ).then((instance) => {
// //           const { docViewer } = instance;
// //           // you can now call WebViewer APIs here...
// //         });
// //       });
// //     }, []);

// //     return (
// //       <div className="MyComponent">
// //         <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
// //       </div>
// //     );
// //   };

// //   export default PersonalResume;

import { useState } from "react";
import { Document, Page } from "react-pdf/";

const App = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Document file="/document.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="600" pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        {pageNumber > 1 && (
          <button onClick={changePageBack}>Previous Page</button>
        )}
        {pageNumber < numPages && (
          <button onClick={changePageNext}>Next Page</button>
        )}
      </header>
      <center>
        <div>
          <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </center>
    </div>
  );
};

export default App;
