import './App.css';
import Headline from './Components/Headline/Headline';
import Countdown from './Components/Countdown/Countdown';
import Button from './Components/Button/Button';
import Carousel from './Components/Carousel/Carousel';
import Feedback from './Components/Feedback/Feedback';
import Promise from './Components/Promise/Promise';
import WhatYouWillReceive from './Components/WhatYouWillReceive/WhatYouWillReceive';
import Advantages from './Components/Advantages/Advantages';
import Offer from './Components/Offer/Offer';
import Faq from './Components/Faq/Faq';
import Guarantee from './Components/Guarantee/Guarantee';

function App() {

  return (
    <>
    <Countdown />
    <Headline />
    <Button margin="0 auto 30px">
      sim eu quero meus manuais agora!
    </Button>
    <Carousel />
    <Feedback />
    <Promise />
    <WhatYouWillReceive />
    <Advantages />
    <Offer />
    <Guarantee />
    <Faq />
    </>
  )
}

export default App;
