import '../styles/global.css'

import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext'
import { useState } from 'react';
//reaproveitar coisas que se repetem, ficam por volta da aplicação
function MyApp({ Component, pageProps }) {
  
  return (
    <ChallengesProvider>
      <Component {...pageProps} />       
    </ChallengesProvider>
      
    
  )  
}

export default MyApp
