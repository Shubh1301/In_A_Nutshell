import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { getNews } from "../service/api";
import Article from "./Article";


const Articles = () => {

    const BASE_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=98ef5ab996b2452a99bfa235f6476b83";

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch(BASE_URL);
            const obj = await response.json();
            const data = obj.articles;
            setPosts(data);
            console.log(data);
        }
        
        fetchNews();
    }, []);
    
    return (
        <Box>
            {
                posts.map( (data) => (
                    <Article data={data} />
                ))
            }
        </Box>
    )
}

export default Articles;