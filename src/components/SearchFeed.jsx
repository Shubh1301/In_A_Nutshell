import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Article from "./Article";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
    console.log("this function is running")
    const [posts, setPosts] = useState([]);
    const { searchTerm } = useParams();

    const BASE_URL = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=98ef5ab996b2452a99bfa235f6476b83`;

    

    useEffect( () => {
        
        const fetchParticularNews = async () => {
            const response = await fetch(BASE_URL)
            const obj = await response.json();
            const data = obj.articles;
            setPosts(data);
            console.log(data);
        }
        fetchParticularNews();
    }, [])

    return(
        <Box>
        {
            posts.map( (data) => (
                <Article data={data} />
            ))
        }
    </Box>
    )

}

export default SearchFeed;