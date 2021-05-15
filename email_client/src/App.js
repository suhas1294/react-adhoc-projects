import { Component } from 'react';
import styles from './App.module.css';
import axios from 'axios';
import EmailCard from './EmailCard';
import EmailDetail from './EmailDetail';

class App extends Component {
  state = {
    allMails: [],
    currentMail: {}
  }

  componentDidMount(){
    const allMailUrl = `https://flipkart-email-mock.now.sh`;
    axios
      .get(allMailUrl)
      .then(response => this.setState({allMails: response.data.list}))
      .catch(err => console.error(err));
  }

  getDetail = (emailDetail) => {
    console.log(emailDetail);
    axios
      .get("https://flipkart-email-mock.now.sh", { params: { id:  emailDetail.id} })
      .then(response => {
        let email = {...emailDetail, body: response.data.body };
        this.setState({currentMail: email})
      })
      .catch(err => console.error(err));
  }

  render(){
    let emailCardList;

    if(this.state.allMails){
      emailCardList = this.state.allMails.map(email => <EmailCard key={email.id} detail={email} getDetail={this.getDetail} /> )
    }

    return (
      <div className="App">
        <h1 style={{padding: '2%', marginLeft: '2%'}}>Flipkart Email client</h1>
        <ul id={styles.NavBar}>
          <li><button className={styles.NavBtn}>Read</button></li>
          <li><button className={styles.NavBtn}>Unread</button></li>
          <li><button className={[styles.NavBtn, styles.Active].join(' ')}>Favorite</button></li>
        </ul>
  
        <div id={styles.Container}>
          
          {/* email list */}
          <div id={styles.MailList}>
            {emailCardList ? emailCardList : "Loading..."}
          </div>
          
          {/* email detail */}
          {
            this.state.currentMail.body 
            ?
              <div id={styles.EmailDetail}>
                <EmailDetail detail={this.state.currentMail} />
              </div>
            :
            null
          }
          

        </div>
      </div>
    );
  }
}

export default App;
