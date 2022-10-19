import React from "react";
import "./RowPost.css";
import axios from "axios";
import { useEffect , useState} from "react";
import YouTube from "react-youtube";
import { imageUrl,API_KEY } from "../constants/constant";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import { response } from "express";
function RowPost(props) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovie(response.data.results)
      }).catch(err =>{
        // alert('error');
      })
  }, []);

  const opts = {
    height:"380",
    width:"100%",
    playerVars:{
      autoplay:0
    }
  }
  const handleMovie = (id) =>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then(response => {
      console.log(response.data);
    })
  }
  return (
    <div className="row">
      <h2>{props.title}</h2>

       <div className="posters">
        { movie.map((obj) => 
           <img onClick={()=>handleMovie(obj.id) }
           className={props.isSmall ?'smallPoster':"poster"}
           alt="poster"
           src={`${imageUrl+obj.backdrop_path}`}
         />
        )}
      </div>

      <YouTube opts={opts} videoId="ucr9puXoizY&t"/>
    </div>
  );
}

export default RowPost;
