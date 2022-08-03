import React, { useEffect, useState } from "react";
// import "./Newsapi.css";
import "./Forcss.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import LoadingBar from "react-top-loading-bar";

function News2(props) {
  const [state, setState] = useState({
    articles: [],
    page: 1,
    totalResults: 0,
  });

  const [load, setload] = useState(false);
  const [progress, setprogress] = useState(0);
  console.log(state);
  useEffect(() => {
    // handlenext();

    const fetchData = async () => {
      setload(true);
      // props.setprogress(0);
      setprogress(0);
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
        props.category
      }&apiKey=${props.apiKey}&page=${state.page + 1}&pageSize=${9}
      `;
      // props.setprogress(40);
      setprogress(40);
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        // setState({ loading: true });
        setState({
          articles: json.articles,
          page: state.page + 1,
          // loading: false,
          totalResults: json.totalResults,
        });
        setload(false);
      } catch (err) {
        setload(false);

        console.log(err);
      }
      // props.setprogress(100);
      setprogress(100);
    };
    // } finally {
    //   // setState({ loading: false });
    // }

    fetchData();
  }, []);
  // async function handlenext() {
  //   setload(true);
  //   console.log("WSfirst");
  //   const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
  //     props.category
  //   }&apiKey=${props.apikey}=21ea15173e564fcaa528aa7d7e4813d3&page=${
  //     state.page + 1
  //   }&pageSize=5`;
  //   // setState({ loading: true });
  //   try {
  //     const response = await fetch(url);
  //     const json = await response.json();

  //     setState({
  //       // loading: false,
  //       articles: json.articles,
  //       page: state.page + 1,
  //       totalResults: json.totalResults,
  //     });
  //     setload(false);
  //   } catch (err) {
  //     setload(false);

  //     console.log(err);
  //   } finally {
  //     // setState({ loading: false });
  //   }
  // }
  const fetchMoreData = async () => {
    setload(true);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=${props.apiKey}&page=${state.page + 1}&pageSize=${5}
    `;
    try {
      const response = await fetch(url);
      const json = await response.json();

      setState({
        // loading: false,
        articles: state.articles.concat(json.articles),
        page: state.page + 1,
        totalResults: json.totalResults,
      });
      setload(false);
    } catch (err) {
      setload(false);
    }
  };
  return (
    <>
      <LoadingBar color="#f11946" progress={progress} />
      <InfiniteScroll
        dataLength={state.articles.length}
        next={fetchMoreData}
        hasMore={true}
        loader={load && <Spinner />}
      >
        <div className="forgrid">
          {state.articles.map((ele) => {
            return (
              <div className="card" style={{ width: "18rem" }} key={ele.title}>
                <img
                  src={
                    !ele.urlToImage
                      ? "https://images.firstpost.com/fpimages/380x285/fixed/jpg/2022/07/Rishi-Sunak.jpg"
                      : ele.urlToImage
                  }
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{ele.title}</h5>
                  <p className="card-text">{ele.description}</p>
                  <a href={ele.url} className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
      {/* <div className="d-flex justify-content-between"> */}
      {/* <button type="button" className="btn btn-dark" onClick={handleprev}> */}
      {/* &larr;prev */}
      {/* </button> */}
      {/* <button type="button" className="btn btn-dark" onClick={handlenext}>
          &rarr;Next
        </button>
      </div> */}
    </>
  );
}

// // export default News2;
// import React, { useEffect, useState } from "react";

// function News2() {
//   const [state, setState] = useState({
//     articles: [],
//   });
//   useEffect(() => {
//     const url =
//       "https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apikey}=1562a57531a549e4ad3a489e03d60c84";
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const json = await response.json();
//         console.log(json);
//         setState({
//           articles: json.articles,
//         });
//       } catch (error) {
//         console.log("error", error);
//       }
//     };
//     fetchData();
//   });

//   return (
//     <div className="forgrid">
//       {state.articles.map((ele) => {
//         return (
//           <div className="card" style={{ width: "18rem" }} key={ele.title}>
//             <img
//               src={
//                 !ele.urlToImage
//                   ? "https://images.firstpost.com/fpimages/380x285/fixed/jpg/2022/07/Rishi-Sunak.jpg"
//                   : ele.urlToImage
//               }
//               className="card-img-top"
//               alt="..."
//             />
//             <div className="card-body">
//               <h5 className="card-title">{ele.title}</h5>
//               <p className="card-text">{ele.description}</p>
//               <a href={ele.url} className="btn btn-primary">
//                 Read More
//               </a>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

export default News2;
