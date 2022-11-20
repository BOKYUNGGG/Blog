import React, {useState} from 'react'
import Post from './Post'
import {oneDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import axios from 'axios'

const PostContainer = () => {
    const [post, setPost] = useState('')
    const [theme, setTheme] = ustState(oneDark)
    
    return (
        <div>PostContainer
            <Post post={post} theme={theme}></Post>
        </div>
    )
}

export default PostContainer