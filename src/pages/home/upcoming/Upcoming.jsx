import React,{useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitcTabs from '../../../components/switchtabs/SwitcTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

function Upcoming() {
   const[endpoint,setEndpoint] =useState("movie/upcoming");
   const {data,loading} =useFetch(`/${endpoint}`);

    const onTabChange=(tab)=>{
      setEndpoint(tab ==="Movies" ? "movie/upcoming":"tv/on_the_air");
    };

  return (
    <div className='carouselSection'>
    <ContentWrapper>
        <span className='carouselTitle'>Upcoming</span>
        <SwitcTabs data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
    </ContentWrapper>
      <Carousel data={data?.results} loading ={loading} endpoint={endpoint}/>
    </div>
  )
}

export default Upcoming;
