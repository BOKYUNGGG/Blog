import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

const Post = ({post, theme}) => {
  return (
    <div>
        <ReactMarkdown 
          children={post} remarkPlugins={[remarkGfm]}
          components={{
            code({node, inline, className, children, ...props}){
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={theme}
                language={match[1]}
                PreTag="div"
                {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
          />
    </div>
  )
}

export default Post