import React, { Component } from "react";
import "./Newsapi.css";
import Spinner from "./Spinner";
export default class Newsapi extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }
  async componentDidMount() {
    // const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=21ea15173e564fcaa528aa7d7e4813d3&page=${
    //   this.state.page + 1
    // }&pageSize=${5}
    // `;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsdata = await data.json();
    // console.log(parsdata);
    // this.setState({ articles: parsdata.articles, loading: false });
    this.handlenext();
  }

  handlenext = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=21ea15173e564fcaa528aa7d7e4813d3&page=${
      this.state.page + 1
    }&pageSize=${5}
      `;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsdata = await data.json();

    this.setState({
      articles: parsdata.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };

  handleprev = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=21ea15173e564fcaa528aa7d7e4813d3&page=${
      this.state.page - 1
    }&pageSize=${5}
      `;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsdata = await data.json();
    this.setState({
      articles: parsdata.articles,
      page: this.state.page - 1,
      // loading: false,
    });
  };
  render() {
    return (
      <>
        {this.state.loading && <Spinner />}
        <div className="forgrid">
          {this.state.articles.map((ele) => {
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
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleprev}
          >
            &larr;prev
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlenext}
          >
            &rarr;Next
          </button>
        </div>
      </>
    );
  }
}
