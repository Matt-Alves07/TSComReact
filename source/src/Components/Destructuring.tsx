import * as React from 'react';

interface IDestructuringProps {
    title: string
    content: string
    commentsQty: number
    tags: string[]
}

//Old format
//const Destructuring = (props: IDestructuringProps) => {
//Destructuring example
const Destructuring = ({ title, content, commentsQty, tags } : IDestructuringProps) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Comments: {commentsQty}</p>
        <div>
            {tags.map(tag => (
                <span>#{tag + " "}</span>
            ))}
        </div>
    </div>
  );
};

export default Destructuring;