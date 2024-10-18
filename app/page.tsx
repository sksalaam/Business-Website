import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // For solid icons
import HomePage from './home/page';
library.add(fas); // Add the solid icons to the library




export default function Home() {
  return (
    <>
    
    <HomePage />
    </>
  
  );
}
