import React from "react";
import axios from "axios";
import Quote from "../components/Quote/";

export class QuoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      quote: "",
      category: "",
      loading: true,
    };
    this.getQuote = this.getQuote.bind(this);
  }
  componentwillMount() {}
  componentDidMount() {
    this.getQuote();
  }
  getQuote() {
    const url = "https://api.quotable.io/random";
    this.setState({ loading: true }, () => {
      axios
        .get(url)
        .then((response) => {
          let quoteResponse = response.data;
          console.log(quoteResponse);
          this.setState({
            loading: false,
            author: quoteResponse.author,
            quote: quoteResponse.content,
            category: quoteResponse.tags[0],
          });
        })
        .catch((error) => console.log(error));
    });
  }
  render() {
    return (
      <Quote
        loading={this.state.loading}
        author={this.state.author}
        quote={this.state.quote}
        category={this.state.category}
        handleClick={this.getQuote}
      />
    );
  }
}
