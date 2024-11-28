import React, {useState} from 'react'
import Editor from './components/Editor';

const CSS = (props) => {
    const [css, setCss] = useState('');
    function handlechange(e){
        const value = e.target.value;
        setCss(value);
        props.onChange(value);
    }
  return (
    <div>
        <div className='flex flex-col h-screen'>
            <Editor language="CSS" value={css} onChange={handlechange} />
        </div>
    </div>
  )
}

export default CSS
