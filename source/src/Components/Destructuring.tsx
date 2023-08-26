import * as React from 'react';

interface IDestructuringProps {
    title: string
    content: string
    commentsQty: number
    tags: string[]
    //ENUM
    category: Category
}

export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  CS = "C#",
  PY = "Python"
}

//Old format
//const Destructuring = (props: IDestructuringProps) => {
//Destructuring example
const Destructuring = ({ title, content, commentsQty, tags, category } : IDestructuringProps) => {
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
        <h4>Category: {category}</h4>
    </div>
  );
};

export default Destructuring;