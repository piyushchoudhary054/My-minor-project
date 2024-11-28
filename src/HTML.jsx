import React, {useState} from 'react'
import Editor from './components/Editor';

const HTML = (props) => {
    const [html, setHtml] = useState('');
    function handlechange(e){
        const value = e.target.value;
        setHtml(value);
        props.onChange(value);
    }
   return (
    <div>
        <div className='h-screen'>
            <Editor language="HTML" value={html} onChange={handlechange} />
        </div>
    </div>
  )
}

export default HTML
