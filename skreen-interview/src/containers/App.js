import styles from './App.module.css';
import React, {Component, Suspense} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './../components/common/Navigation';
import InterviewersList from './../components/InterviewersList/InterviewersList';
import PageNotFound from './../components/common/PageNotFound';
import Footer from './../components/common/Footer'
import axios from 'axios'

const Register = React.lazy( () => import('./../components/Auth/Register') );
const Login = React.lazy( () => import('./../components/Auth/Login') );

class App extends Component {
  state = {
    iList: {},
    mobileMenuShown: true
  }

  componentDidMount(){
    const getUrl = "https://hostnameyettobegiven/api/v1/interviewers";
    axios.get(getUrl).then( response => {
      this.setState({iList: response.data.interviewers});
    }).catch(error => {
      console.log("Error fetching data from server, {}", error);
      const staticDataString = `{"status":"success","interviewers":[{"fullName":"Bharat Kallur","description":"Learning cloud, distributed systems, security and platform technologies.","currentPosition":{"positionName":"","currentCompany":""},"previousPositions":[{"positionName":"SDET","compantName":"ThoughtSpot"},{"positionName":"SDET","compantName":"IdeasPlatter"},{"positionName":"QA","compantName":"Nutanix"},{"positionName":"QA","compantName":"Citrix"}],"skills":["python","c++","Javascript","React Js"],"profilePic":""},{"fullName":"Shashank M","description":"Ex Swiggy || Javascript Core || React JS || Web Development || Podcast Host","currentPosition":{"positionName":"Software Engineer","currentCompany":"Postman"},"previousPositions":[{"positionName":"UI developer","compantName":"Swiggy"},{"positionName":"SDE","compantName":"Nestaway"},{"positionName":"SDE","compantName":"Tekion Corp"}],"skills":["Block Chain","Web Development","Javascript","React Js"],"profilePic":""},{"fullName":"Sharath N","description":"","currentPosition":{"positionName":"Senior SDET","currentCompany":"Amazon"},"previousPositions":[{"positionName":"SDET","compantName":"Nokia"}],"skills":["Test Automation","Javascript","Agile Methodologies","React Js"],"profilePic":""},{"fullName":"Ashwin Krishna","description":"","currentPosition":{"positionName":"Frontend Developer","currentCompany":"Amazon"},"previousPositions":[{"positionName":"","compantName":"Flipkart"},{"positionName":"","compantName":"Razorthink"},{"positionName":"","compantName":"Tekion Corp"}],"skills":["Angular","Javascript","Java","Jquery"],"profilePic":""},{"fullName":"Siva Subramanian","description":"","currentPosition":{"positionName":"Senior Engineering Manager","currentCompany":"Swiggy"},"previousPositions":[{"positionName":"","compantName":"Cohesity"},{"positionName":"","compantName":"Hike Messenger"},{"positionName":"","compantName":"Myntra"}],"skills":["Golang","Java","Selenium"],"profilePic":""},{"fullName":"Abid Shaik","description":"","currentPosition":{"positionName":"Member Of Technical Staff","currentCompany":"ThoughtSpot"},"previousPositions":[{"positionName":"","compantName":"AnswerIQ"},{"positionName":"","compantName":"FreshWorks.Inc"},{"positionName":"","compantName":"Amazon"}],"skills":["React Js","c++","Jquery","Javascript"],"profilePic":""},{"fullName":"Rupam Ghosh","description":"Android | IOS | ReactNative | Ex-Flipkart | Ex-Ola","currentPosition":{"positionName":"","currentCompany":""},"previousPositions":[{"positionName":"","compantName":"mFine"},{"positionName":"","compantName":"Flipkart"},{"positionName":"","compantName":"Ola"},{"positionName":"","compantName":"Thoughtspot"}],"skills":["Android","Java","Data Structures","Mysql"],"profilePic":""},{"fullName":"Rahul Kosambi","description":"Interested in Solving Complex Problems through my knowledge of DS/Algo/High and Low-Level Designing","currentPosition":{"positionName":"","currentCompany":""},"previousPositions":[{"positionName":"","compantName":"Old"},{"positionName":"","compantName":"Whatfix"},{"positionName":"","compantName":"Flipkart"},{"positionName":"","compantName":"Zynga"}],"skills":["c++","Data Structures","Java","Algorithm"],"profilePic":""},{"fullName":"Raja Avinash","description":"","currentPosition":{"positionName":"User Interface Engineer","currentCompany":"Flipkart"},"previousPositions":[{"positionName":"","compantName":"Oracle"},{"positionName":"","compantName":"Unilog"},{"positionName":"","compantName":"iClinica"}],"skills":["Springboot","Typescript","Javascript","HTML5"],"profilePic":""},{"fullName":"Mudit Saxena","description":"Engineering@Tact.ai | Building Scalable Platforms","currentPosition":{"positionName":"","currentCompany":""},"previousPositions":[{"positionName":"","compantName":"Sprinklr"},{"positionName":"","compantName":"SAHYOG"}],"skills":["Node JS","Javascript","Javascript","Elastic Search"],"profilePic":""},{"fullName":"Amit Aggarwal","description":"Senior Quality Assurance Manager","currentPosition":{"positionName":"","currentCompany":""},"previousPositions":[{"positionName":"","compantName":"Fivetran"},{"positionName":"","compantName":"PowerSchool"},{"positionName":"","compantName":"Group"},{"positionName":"","compantName":"Tekion"},{"positionName":"","compantName":"Seven lakes"}],"skills":["Testing","Agile Methodologies","SQL","Oracle"],"profilePic":""},{"fullName":"Manish Khandelwal","description":"","currentPosition":{"positionName":"Staff Software Engineer","currentCompany":"ServiceNow"},"previousPositions":[{"positionName":"","compantName":"ServiceNow"},{"positionName":"","compantName":"Saxo Bank"},{"positionName":"","compantName":"Belkin"},{"positionName":"","compantName":"Honeywell"}],"skills":["Javascript","Redux","React Js","SQL"],"profilePic":""},{"fullName":"Sharanya RK","description":"SDET consultant, Ex- Clarisights, Amazon","currentPosition":{"positionName":"","currentCompany":""},"previousPositions":[{"positionName":"","compantName":"Clarisights"},{"positionName":"","compantName":"Amazon"},{"positionName":"","compantName":"Chargebee"}],"skills":["QA","Devops"],"profilePic":""}]}`;
      let staticData = JSON.parse(staticDataString);
      this.setState({iList: staticData});
    });
  }

  hamburgerHandler = () => {
    this.setState({mobileMenuShown: !this.state.mobileMenuShown});
  }

  render(){
    let listElement = <p>loading data...</p>;
    if (this.state.iList.hasOwnProperty('interviewers')){
      let list = this.state.iList.interviewers;
      listElement = <InterviewersList iList={list} />
    }
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <header>
            <Navigation hamburgerClicked={this.hamburgerHandler} menuShown={this.state.mobileMenuShown} />
            <Switch>
              <Route path="/" exact render={ () => listElement } />
              <Route path="/register" render={ () => <Suspense fallback={<div>Loading...</div>}> <Register /> </Suspense> } />
              <Route path="/login" render={ () => <Suspense fallback={<div>Loading...</div>}> <Login /> </Suspense> } />
              <Route component={PageNotFound} />
            </Switch>
          </header>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
