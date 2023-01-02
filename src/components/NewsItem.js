import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl} = this.props;
    return (
      <div className="mx-2 my-2">
        <div className="card" style={{ width: "16rem", background: "lavender" }}>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="d-flex flex-row justify-content-center">
              <a href={newsUrl} className="btn btn-sm btn-primary p-2">
                Full Article
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem