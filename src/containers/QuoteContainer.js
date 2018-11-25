import React from 'react';
import axios from 'axios';
import Quote from '../components/Quote/';



export class QuoteContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      author:"",
      quote:"",
      category:"",
      loading:true
    };
  }
  componentwillMount(){

  }
  componentDidMount(){
    const url = "https://talaikis.com/api/quotes/random/";
    axios
     .get(url)
     .then(response => {
       let quoteResponse = response.data;
       console.log(quoteResponse);
       this.setState({
         loading:false,
         author:quoteResponse.author,
         quote:quoteResponse.quote,
         category:quoteResponse.cat,
       })
     })
     .catch(error => console.log(error));
  }
  render(){
      return(
        <Quote loading={this.state.loading} author={this.state.author} quote={this.state.quote} category={this.state.category}/>
      );
    }
}
