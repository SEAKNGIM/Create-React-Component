import React, { useEffect, useState } from 'react'
import CardFeedBackComponent from './FeedbackComponent';

const FeedbackPage = () => {
    const [comments, setComments] = useState([]);
    const comment = async () => {
        const response = await fetch("https://dummyjson.com/comments");
        const data = await response.json();        
        setComments(data.comments);
    }
    useEffect(() => {
        comment();
    }, [])
    
    return (
        <CardFeedBackComponent comments={comments} />
    )
}

export default FeedbackPage