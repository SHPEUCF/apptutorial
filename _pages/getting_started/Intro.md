---
permalink: /intro
title: "Intro"
classes: wide
---

React Native is a mobile development framework created by Facebook and maintained by community developers. It is built off of the React JavaScript library, which allows developers to make responsive and REACTive UIs. With the power of React under the hood, React Native aims to allow developers to create UI rich applications for both iOS and android using the same source code for both platforms.

The languages at the center of React Native are JavaScript/JSX. With the help of Node.js, a runtime environment for Javascript, Javascript forms the basis of our mobile application. However, JSX is the syntax used by React and React Native to combine HTML with our Javascript code, and consequently large portions of our code are using JSX to actually create the UIs our shpe members interact with. The rest is pretty much standard Javascript. 

At its core, React (and by extension React Native) is creating visual components. These visual components take the form of Javascript functions or classes. Every component returns some JSX to detail its visual content but class components can hold more complex functionality besides simply returning visual content. They can hold something called States, whereas functional components are known to be Stateless components.

States along with Props are two of the most important concepts for React components. To understand the purpose of props, its good to see React applications as trees of parent and children components, where children components are components that are called inside of another component. Data flows between parents and children in the form of props, basically variables you pass on down the component tree. On the other hand, States describe how a component itself changes throughout the lifetime of an application. Whenever a component's state changes, React knows it's time for that specific component to re-render. 

In this way, States allow our components to REACT to changes and allow React to selectively re-render parts of the application. This is basically what React is all about.

Thanks for coming to our Ted Talk.