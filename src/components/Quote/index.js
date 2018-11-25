import React from 'react';

export default class Quote extends React.Component{
  render(){
    return(
      <section className="quote-wrapper">
        <h2 className="quote-title">{this.props.category} Quote of the day</h2>
        <blockquote>
        <div class={this.props.loading ? "loading" : "loaded"}>
          <div class="loader-line"></div>
          <div class="loader-line loader-line-2"></div>
          <div class="loader-line loader-line-3"></div>
          <div class="loader-line loader-line-4"></div>
        </div>
        {this.props.quote}
        </blockquote>
        <p className="author">
        <div class={this.props.loading ? "loading" : "loaded"}>
          <div class="loader-line loader-line-4"></div>
        </div>
        {this.props.loading ? "-" : ""}{this.props.author}</p>
      </section>
    )
  }
}
