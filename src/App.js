import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Box} from '@mui/material';
import {SearchFeed, Feed, VideoDetail, ChannelDetail, Navbar} from "./components";

export default function App() {
  return (
    <div>
        <BrowserRouter>
            <Box sx = {{backgroundColor:'#000'}}>
                <Navbar/> 
                <Routes>
                    <Route path ="/" exact element ={<Feed/>}/>
                    <Route path ="/video/:id"  element ={<VideoDetail/>} />
                    <Route path ="/channel/:id"element ={<ChannelDetail/>} />
                    <Route path ="/search/:searchTerm" element ={<SearchFeed/>} />
                   
                </Routes>
            </Box>
        </BrowserRouter>
    </div>
  )
}
