import logo from './logo.svg';
import './App.css';
import SliderComponent from './components/slider.component';


function App() {
  const homeWinners = [
    {
      winnerImg:'https://images.pexels.com/photos/12733781/pexels-photo-12733781.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      itemImg:'https://images.pexels.com/photos/12733781/pexels-photo-12733781.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      winnerName:'Person With Long Name',
      driveName:'Cool Charity Drive',
      itemName:'Millions of Dollars'
    }]
  return (
    <>
        <SliderComponent data={homeWinners}/>
    </>
  );
}

export default App;
