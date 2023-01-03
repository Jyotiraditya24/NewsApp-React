import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className="mx-2 my-2">
        <div className="card" style={{ background: "lavender" }}>
          <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
            {source}
            <span class="visually-hidden">unread messages</span>
          </span>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <a
                href={newsUrl}
                className="btn btn-sm btn-outline-danger p-2 mb-2"
              >
                Full Article
              </a>
              <p className="card-text mt-2">
                <small className="text-muted">
                  Published At: {new Date(date).toGMTString()}
                </small>
              </p>
              <p className="card-text mt-2">
                <small className="text-muted">
                  Authored By: {author ? author : "unknow"}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem