# The Gusseing game - Let's check who have a better luck you or the android 
## Overview:- 
Before going into the details about the project or what exactly this mobile app is a little bit about how I achieved to build this app in 24hrs -
1. My area of expertise includes Flutter, React-JS, Node-JS, Java, AWS, Python.
2. It was a challenge to learn and deliver result in 24 hrs.
4. It was challenging at times but eventually, I was able to deliver project which is very accurate and handles all the edge cases.

A little bit about me -
1. Currently interning with AMAZON, ex Intern with Standard Chartered Bank,
2. Keen to learn new tech-stacks.
3. Keen interest in trading and hence trying to get oppurtunity in realted MNCs/Start-ups.

## App Overview:-
A React-Native based Mobile Application which is more like a guessing game where user will be asked to enter a number between 0-9. Post giving a correct entry he/she will be shown 9 buttons having some ID associated with 0-9. User will get 3 chance to guess which button does have their chosen number, if they are able to do so they will receive a congratulations alert and game will be over. If they are not able to do so then after three retries they will receive a "You Loose" kind of Alery post which they need to restart the game. So let's walk you through more details.

## Technology/Tool Stack:- 

1. React-Native
2. AVD

## Working:-

1. **Initial Step:-** A screen showing a messgae making user understand what game is and how it will be played.<br>
2. **Showing buttons to guess :-** After basic checks regarding number is in 0-9 range only, we pass request to child Component to display the tiles. Here the catch is we straight forward cannot map 0-9 to buttons we need to be smart enough so that user cannot guess the patter. For the same I've used random number with a shuffling logic which will give you almost different array everytime.
##### _Development of new feature can be done related to appearance and better user experience like just providing numbers only in keyboard so user don't put letter in input etc._

## Important Concepts covered
1. While implemented this project, w.r.t to time contrain I've explored about states, react-hooks and props.
2. Created different classes as Parent and child component and at same time didn't made it complex for front-end with nvigation rather used hiding and showing concept through state.
3. Followed best coding practises as much as possible. 

## Screenshots
Here are some screenshots of the app demonstrating some core features.

<h3>Initial Message first glance</h3><br>
<img src="https://i.imgur.com/iNGJog1.png" width=250 height=500>
<br>

<h3>Toast to display wrong input</h3><br>
<img src="https://i.imgur.com/bi1e100.png" width=250 height=500>
<br>

<h3>Sending valid number for further step</h3><br>
<img src="https://i.imgur.com/4e22WBj.png" width=250 height=500>
<br>
<h3>Child component showing 9 buttons to guess, at left in CMD you can find shuffeled array and two numbers</h3><br>
<img src="https://i.imgur.com/uTNl8y2.png" width=700 height=500>
<br>
<h3>In CMD out of 2 left number is the one which user choose and right is correspons to button clicked, If it doesn't match button will be disabled.</h3><br>
<img src="https://i.imgur.com/lfgiz7Z.png" width=700 height=500>
<br>
<h3>If in three tries user is not able to guess correct, he/she will receive alert msg of "You loose"</h3><br>
<img src="https://i.imgur.com/NC6BE8P.png" width=700 height=500>
<br>
<h3>Similiarly if User guessed correctly before 3 tries he/she will receive a luck master title</h3><br>
<img src="https://i.imgur.com/ru7oC7u.png" width=700 height=500>
<br>
