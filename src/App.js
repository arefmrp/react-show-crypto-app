import React , {useEffect,useState} from "react";
import './App.css';
import axios from "axios";
import CoinItem from "./Components/CoinItem";

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false


function App() {
    const [coins , setCoins] = useState([]);
    const [search ,setSearch] = useState('');

    useEffect(()=>{
       axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
           .then(res=> {
               setCoins(res.data)
               console.log(coins)

           })
           .catch(err=>alert('error to fetch data'));

    },[])

    const handleChange = (e) => {
     setSearch(e.target.value)
    }
    const filterData = coins.filter(coin => {
       return  coin.name.toLowerCase().includes(search.toLowerCase())
    })


  return (
    <div className="App">
    <div className="coin-section">
     <div className={'coin-section-header'}>
         <form>
             <input placeholder={'Search coin ...'} onChange={handleChange}></input>
         </form>

     </div>
     <div className={'coin-section-body'}>
         {
             console.log(coins)
         }
         {
          filterData.map((item)=>{
              return (<CoinItem key={item.id} name={item.name} image={item.image} symbol={item.symbol} volume={item.market_cap} price={item.current_price} price_change={item.market_cap_change_percentage_24h}>1</CoinItem>)
          })
         }
     </div>
    </div>
    </div>
  );
}

export default App;
