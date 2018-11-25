import React from 'react';

export default class Quote extends React.Component{
  render(){
    let loading = this.props.loading;
    return(
      <section className="quote-wrapper">
        <h2 className="quote-title">{this.props.category} Quote of the day</h2>
        <blockquote>
        <div class={loading ? "loading" : "loaded"}>
          <div class="loader-line"></div>
          <div class="loader-line loader-line-2"></div>
          <div class="loader-line loader-line-3"></div>
          <div class="loader-line loader-line-4"></div>
        </div>
        {this.props.quote}
        </blockquote>
        <p className="author">
        <div class={loading ? "loading" : "loaded"}>
          <div class="loader-line loader-line-4"></div>
        </div>
        {this.props.loading ? "" : "-"} {this.props.author}</p>
      </section>
    )
  }
}
