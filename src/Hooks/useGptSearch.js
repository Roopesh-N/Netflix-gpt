import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import openAI from "../utils/openAI";
import { addGptMovies } from "../utils/GptSlice";

const useGptSearch = () => {
    const dispatch=useDispatch();

    const searchMovieTmdb=async (movie)=>{
        const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_options);
        const json=data.json();
        return json;
        }
    
      const gptsearch= async (searchtext)=>{
    
        const query="Act as a movie recommendation system and suggest some movies for the query :" + searchtext+". Only give me movie names separated by comma as show in example:Fighter,Dunki,War,Golmal,Gadar. If search for single movie, return only its name."
    
          const gptresults = await openAI.chat.completions.create({
            messages: [{ role: 'user', content: query }],
            model: 'gpt-3.5-turbo',
          });
        
          if(!gptresults.choices){
            // error page(movies didn't find)
          }
          const moviesList=gptresults.choices?.[0]?.message?.content.split(",");
          // for each movie I have to search in tmdb
    
          const promiseArray=moviesList.map((movie)=>searchMovieTmdb(movie));
          // this returns promies for each but not results bcuz, continuous api calls has been made in searchmovietmbd function, 
          // even before we got results of first api call, next ones were called. so promise is returned
    
          const tmdbresults= await Promise.all(promiseArray);
    
          // console.log(tmdbresults);
          dispatch(addGptMovies({movieresults:tmdbresults,movienames:moviesList}));
      };

      return {gptsearch};


}

export default useGptSearch