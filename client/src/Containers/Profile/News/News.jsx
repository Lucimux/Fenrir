import React, { Component } from 'react'
import axios from 'axios'
import Header from '../../../Components/Header/Header'
import Footer from '../../../Components/Footer/Footer'
import Card from '../../../Components/Card/Card'
import './News.css'
class NewsFeed extends Component {
    state = {
        news: []
    }

    componentDidMount(){
        axios.get('http://localhost:3000/api/news')
             .then((response) => {
                this.setState({
                    news: response.data.data
                })                            
             })
             
    }

    render() {
        return(
            <section>
                <Header auth={true}/>
                    <section className="news-grid">
                        {
                            this.state.news.map((item, index) => (
                                <Card 
                                    key={index}
                                    image={item.preview} 
                                    title={item.cardTitle} 
                                    text={item.cardText} 
                                    score={item.score} 
                                    subreddit={item.subreddit} 
                                    url={item.url}
                                />
                            ))
                        }
                    </section>                    
                <Footer/>
            </section>
            
        )
    }
}

export default NewsFeed