# Rock-Paper-Scissors<br/>

update 27/05/2022<br/><br/>

<br />
<br />

<h4>Page Preview</h4>
<br />

![Alt Text](images/rockPaperScissorsScreenshot.png?raw=true "Rock Paper Scissors screenshot")
<br />

<ul>
<li>Added clickable buttons with sound affects (from www.freesound.org) and images for buttons (from www.clipartmax.com) along with a background image (from www.wallpaperaccess.com)</li>
  <ul>
  <li>Rock sound by gregorquendel</li>
  <li>PAper sound by xtyl33</li>
  <li>Scissors sound by mxve</li>
  <li>Win sound by mrrap4food</li>
  <li>Lose sound by rocotilos</li>
  </ul>
<li>Disabled buttons that let player continue playing even when score was met / enable button when player clicks reset</li>
<li>setAttribute to reflect color of text if you win/lose/draw</li>
<li>made a few visual changes (box-shadow, transitions, transform scale when click etc.) </li>
<li>Added a couple of @media queries for mobile and mobile/landscape</li>
<li>Simplified if player beats computer now that there is only clickable choices</li>

</ul>
<br/><br/><br/>*****************************************************<br/><br/><br/>
FOLLOWING INFO IS OUT OF DATE (left it there to know what i've changed)<br/><br/><br/>
function computerPlay <br/> Creates random number from 0-2 and returns Rock(0), Paper(1) and Scissors(2) <br/>Note: Made sure to put first letter upper case for user readability appearance.<br/><br/><br/>
function playRound <br/>Plays one game, and returns if you draw/win/lose and why in a string.<br/><br/><br/>
function playerPrompt <br/>Prompts player to input rock/paper/scissors then converts it to lowercase before changing the first character to upper case to match computer.<br/><br/><br/>
function game <br/>Uses a for loop to play until one player tallies 5 points, each round returns the current score and who won that round and why.<br/><br/><br/>
NOTE: currently have to play through devTools (Ctrl + Shift + i) by typing in console game(); (will add html and css in future for playability)<br/><br/><br/>
