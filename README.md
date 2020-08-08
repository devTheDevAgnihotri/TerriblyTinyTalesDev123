# TerriblyTinyTalesDev123

This WebApp is build using React as client side and Node.js express framework as server side.

# This App is deployed at heroku.com its link is http://terriblytales.herokuapp.com/

Server side is having simple logic using pure javascript to fetch the top most frequently used words in whole file and the client side sends how many words it wants to render
Using a input box which on submit makes a  fetch request to server side asking the number of most frequent words which it passes using parameter in its url

The server sends a response in the form of a json object which we utilize to render the words and frequency on client side

Test case for a call of 10 elements
{"I":27,"a":24,"to":22,"can":15,"at":15,"the":15,"and":13,"of":13,"us":12,"you":11} 

Server side description and Dependencies used =>

Cors for cross origin request management

http-erros for displaying erros on console

morgan for getting the request made GET,POST,PUT,DELETE details

fs(file-system) for file system management provided by node.js

Server side consists of simple route named talesApi which handles the calculation and the code involved for frequency computation no prebuild module is used to get the computation done


Dependencies used in React-Client-side
react

react-dom

react-popper

react-router

react-router-dom

react-scripts

reactstrap 
.
