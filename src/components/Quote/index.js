import React from "react";

export default class Quote extends React.Component {
  render() {
    let loading = this.props.loading;
    return (
      <section className="quote-wrapper">
        <h2 className="quote-title">React random quotes</h2>
        <blockquote>
          {this.props.loading ? (
            <div class={loading ? "loading" : "loaded"}>
              <div class="loader-line" />
              <div class="loader-line loader-line-2" />
              <div class="loader-line loader-line-3" />
              <div class="loader-line loader-line-4" />
            </div>
          ) : (
            this.props.quote
          )}
        </blockquote>
        <p className="author">
          {this.props.loading ? (
            <div class={loading ? "loading" : "loaded"}>
              <div class="loader-line loader-line-4" />
            </div>
          ) : (
            this.props.author
          )}
        </p>
        <button class="btn" onClick={this.props.handleClick}>
          Give me another random quote
        </button>
      </section>
    );
  }
}
