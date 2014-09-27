Numerologically
===============

A numerology chart generator. This is built for my upcoming site, numerologically.com, which will have this code at its core.

<h2>To Do</h2>
<ul>
  <li>Clean up code further, condense basic string creation functions or put it into a jQuery (and keep the pure JS for archival purposes)</li>
  <li>Improve the reduce() function to accurately reduce over a recurring loop, check which numbers need to be reduced and add notes to the doc below</li>
  <li>Add further calculations listed below</li>
  <li>Fix to allow for one line for name (separate and calculate)</li>
  <li>Support for accents and different languages</li>
  <li>What is a good way to find out if the Y is being used as a vowel or a consonant?</li>
</ul>

<h2>What's Coming?</h2>
<p>Some notes are within the numerologically.js file that provide instructions on coming additions.</p>
<ul>
  <li>Chart additions</li>
    <ul>
      <li>Essence (transits all added together)</li>
      <li>Personal year</li>
      <li>Karmic debt</li>
      <li>Period Cycle</li>
    </ul>
  <li>Adding a Facebook login to grab name and birth day and auto calculate</li>
  <li>Feeding results nicely into a social media share button</li>
  <li>Adding sidecomment system for results comments and feedback</li>
  <li>Adding rating system (for accuracy)</li>
  <li>Gather results for statistics</li>
  <li>Personalized results</li>
     <ul>
      <li>Get picture of overall spread of numbers (many, few, balanced, stand outs)</li>
      <li>Note any recurrences in the major numbers and point out</li>
      <li>Present statistics of how many users are your number and others (geolocate too?)</li>
    </ul>
</ul>

<h2>What's Included?</h2>
<p>Included is the generation of the following numbers:</p>
<ul>
  <li>Birth day</li>
  <li>Birth month</li>
  <li>Birth year</li>
  <li>First name</li>
  <li>Middle name</li>
  <li>Last name</li>
  <li>Full name</li>
  <li>Life Path (Birth day + month + year)</li>
  <li>Expression/Destiny (Full name)</li>
  <li>Heart's Desire (vowels in full name)</li>
  <li>Personality (consonants in full name)</li>
  <li>Balance (first letter of each name)</li>
  <li>Maturity (Life Path + Expression)</li>
  <li>Subsconcious Self (number of different numbers represented in your name)</li>
  <li>Rational Thought (first name + birth day)</li>
  <li>4 Challenge Numbers</li>
    <ul>
      <li>Birth day - birth month</li>
      <li>Birth day - birth year</li>
      <li>Challenge 1 - challenge 2</li>
      <li>Birth year - birth month</li>
    </ul>
  <li>4 Pinnacle Numbers</li>
    <ul>
      <li>Birth day + birth month</li>
      <li>Birth day + birth year</li>
      <li>Challenge 1 + challenge 2</li>
      <li>Birth year + birth month</li>
    </ul>
  <li>Special Letters</li>
    <ul>
      <li>Cornerstone (first letter of name)</li>
      <li>Capstone (final letter of first name)</li>
      <li>Special vowel (first vowel of name)</li>
    </ul>
  <li>Life chart (spans 100 years by default)</li>
    <ul>
      <li>Physical Transit (letters of first name, each given their own value)</li>
      <li>Mental Transit (letters of middle name, each given their own value)</li>
      <li>Spiritual Transit (letters of last name, each given their own value)</li>
    </ul>
</ul>

<h2>How does it work?</h2>
<p>Well, I don't really know, but this program runs on Javascript. Otherwise, here's the number key for understanding how each letter gets its value:</p>
<table>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
  </tr>
  <tr>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
    <td>G</td>
    <td>H</td>
    <td>I</td>
  </tr>
  <tr>
    <td>J</td>
    <td>K</td>
    <td>L</td>
    <td>M</td>
    <td>N</td>
    <td>O</td>
    <td>P</td>
    <td>Q</td>
    <td>R</td>
  </tr>
  <tr>
    <td>S</td>
    <td>T</td>
    <td>U</td>
    <td>V</td>
    <td>W</td>
    <td>X</td>
    <td>Y</td>
    <td>Z</td>
    <td></td>
  </tr>
</table>


