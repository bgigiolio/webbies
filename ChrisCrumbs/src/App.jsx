import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import gif from './assets/IMG_3205.gif'

function App() {
  const [count, setCount] = useState(0)
  // const baseURL = 'http://localhost:5000'
  let letters = [{url: "https://ia601205.us.archive.org/31/items/newsletter-dia-de-la-tierra-elegante-verde/Newsletter%20d%C3%ADa%20de%20la%20tierra%20elegante%20verde.pdf", date: "April 2025"}]
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
        </div>
        <img id="baggle" src={gif}/>
      </div>
      

    </>
  )
}

export default App
