import React, {useState} from 'react'
import Editor from './components/Editor';

const JS = (props) => {
    const [js, setJs] = useState('');
    function handlechange(e){
        const value = e.target.value;
        setJs(value);
        props.onChange(value);
    }
  return (
    <div>
        <div className='flex flex-col h-screen'>
            <Editor language="JavaScript" value={js} onChange={handlechange} />
        </div>
    </div>
  )
}

export default JS
