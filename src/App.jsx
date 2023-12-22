import { useState,useEffect } from 'react'
import { fetchDataFromApi } from './utils/api'
import {useSelector,useDispatch} from 'react-redux'
import {BrowserRouter,Route,createBrowserRouter,Routes} from "react-router-dom"
import {getApiConfiguration,getGenres} from './store/homeSlice'

//pages import 
import Searchresult from './pages/searchresult/Searchresult'
import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Details from './pages/details/Details'
import Pagenotfound from './pages/404/Pagenotfound'
import Header from './components/header/Header'
import Footer from  './components/footer/Footer'


function App() {
  const dispatch =useDispatch();
  const url =useSelector((state)=>state.home);
  
  useEffect(()=>{
    apitest();
    genresCall();
   },[]);

  const apitest =()=>{
      fetchDataFromApi('/configuration').then((res)=>{
        // console.log(res)
        const url ={
          backdrop:res.images.secure_base_url + "original",
          poster:res.images.secure_base_url + "original",
          profile:res.images.secure_base_url + "original",

        }
        dispatch(getApiConfiguration(url));
      }) ; 
  } ; 

  const genresCall =async()=>{
    let promises =[];
    let endPoints =["tv,movie"];
    let allGenres ={};

    endPoints.forEach((url)=>{
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    });

    const data =await Promise.all(promises);
    data.map(({genres}) =>{
      return genres?.map((item)=>(allGenres[item.id]=item));
      });
    
     dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/:mediaType/:id' element={<Details/>}/>
      <Route path='/search/:query' element={<Searchresult/>}/>
      <Route path='/explore/:mediaType' element={<Explore/>}/>
      <Route path='*' element={<Pagenotfound/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
