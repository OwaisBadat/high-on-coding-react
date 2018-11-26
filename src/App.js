import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Review from './components/Review'
import Hello from './components/Hello'

class App extends Component {

  constructor(props) {
    super(props)

  }


  render() {
    return (
      <div>
        <Header />
        <Review />
        <Hello title="Hello WatchKit" content="Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch." comments="12 comments" likes="124 likes"/>
        <Hello title="Introduction to Swift" content="Swift is a modern programming language developed by Apple to Create the next generation of iOS and OSX applicaitons. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you cna get started." comments="15 comments" likes="45 likes"/>
    </div>
    );
  }
}

export default App;
