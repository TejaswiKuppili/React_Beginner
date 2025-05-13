//import logo from './logo.svg';
import './App.css';

function App() {
  const pets = [
    { name: 'Fluffy', 
      type: 'Cat',
      image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg'
    },
    { name: 'Fido',
      type: 'Dog',
      image: 'https://rukminim2.flixcart.com/image/850/1000/l071d3k0/poster/q/u/k/medium-cute-dogs-cute-puppies-pomeranian-fulffy-dog-golden-original-imagcf8wgyxqkeuf.jpeg?q=20&crop=false'},
    { name: 'Goldie',
      type: 'Fish',
      image: 'https://5.imimg.com/data5/ANDROID/Default/2021/4/BO/NU/AQ/12128902/product-jpeg.jpg'},
  ];
  return (
    <div className="App">
      <h1>My Pets</h1>
      <ul className="container">
        {pets.map((pet, index) => {
          return(
            <li key={index}>
              <h1>{pet.name}</h1>
              <h2>{pet.type}</h2>
              <img src={pet.image} alt={pet.name} width="200px" height="200px"/>
          </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
