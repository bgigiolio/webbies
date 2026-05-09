import { useEffect, useState } from 'react';
import './App.css';
// import axios from 'axios';
import gif from './assets/IMG_3205.gif'

function App() {
  const [count, setCount] = useState(0)
  // const baseURL = 'http://localhost:5000'
  let letter = [
    {url: "https://ia601205.us.archive.org/31/items/newsletter-dia-de-la-tierra-elegante-verde/Newsletter%20d%C3%ADa%20de%20la%20tierra%20elegante%20verde.pdf", date: "April 2025"},
    {url: "https://ia600903.us.archive.org/28/items/green-minimalist-company-newsletter_202506/Green%20Minimalist%20Company%20Newsletter.pdf", date: "May 2025"},
    {url: "https://ia600901.us.archive.org/14/items/jujfadu/jujfadu.pdf", date: "June 2025"},
    {url: "https://ia600905.us.archive.org/6/items/chrisletter-july/ChrisletterJuly.pdf", date: "July 2025"},
    {url: "https://ia601002.us.archive.org/2/items/guppy-test-5/guppy%20test%205.pdf", date: "August 2025"},
    {url: "https://ia600205.us.archive.org/28/items/papageegee/papageegee.pdf", date: "September 2025"},
    {url: "https://ia803404.us.archive.org/34/items/october-newsletter/October%20Newsletter.pdf", date: "October 2025"},
    {url: "https://ia601608.us.archive.org/12/items/november-newsletter_202601/November%20Newsletter.pdf", date: "November 2025"},
    {url: "https://ia600407.us.archive.org/2/items/december-newsletter/December%20Newsletter.pdf", date: "December 2025"},
    {url: "https://ia903106.us.archive.org/15/items/january-newsletter/January%20Newsletter.pdf", date: "January 2026"},
    {url: "https://ia801906.us.archive.org/8/items/feb-news-letter-feb-news-letter-feb-news-letter/Feb%20News%20LetterFeb%20News%20Letter%20-%20Feb%20News%20Letter.pdf", date: "February 2026"},
    {url: "https://ia600904.us.archive.org/25/items/march-newsletter/March%20Newsletter.pdf", date: "March 2026"}
  ]
  let letters = letter.reverse();
  // useEffect(() => {
  //   axios.get(baseURL + "/")
  // })
  return (
    <>
      <div id="main">
        <div id="header">
          <div id="content">
            <ul>
              {letters.map((newsletter, i) => (
                <li> <a href={newsletter.url}>{newsletter.date}</a></li>
              ))}
            </ul>
          </div>
          <div id="baggleBox">
            <img id="baggle" src={gif}/>
          </div>

        </div>
  
      </div>
      

    </>
  )
}

export default App
