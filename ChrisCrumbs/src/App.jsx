import { useEffect, useState } from 'react';
import './App.css';
// import axios from 'axios';
import gif from './assets/IMG_3205.gif'

function App() {
  const [count, setCount] = useState(0)
  // const baseURL = 'http://localhost:5000'
  let letters = [
    {url: "https://ia601205.us.archive.org/31/items/newsletter-dia-de-la-tierra-elegante-verde/Newsletter%20d%C3%ADa%20de%20la%20tierra%20elegante%20verde.pdf", date: "April 2025"},
    {url: "https://ia600903.us.archive.org/28/items/green-minimalist-company-newsletter_202506/Green%20Minimalist%20Company%20Newsletter.pdf", date: "May 2025"},
    {url: "https://ia600901.us.archive.org/14/items/jujfadu/jujfadu.pdf", date: "June 2025"},
    {url: "https://ia600905.us.archive.org/6/items/chrisletter-july/ChrisletterJuly.pdf", date: "July 2025"},
    {url: "https://ia601002.us.archive.org/2/items/guppy-test-5/guppy%20test%205.pdf", date: "August 2025"},
    {url: "https://ia600205.us.archive.org/28/items/papageegee/papageegee.pdf", date: "September 2025"}
  ]
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
