import axios from 'axios'
import { useEffect, useState } from 'react';
import './AxiosGetStyle.css'

const AxiosGet = () => {
  const [data, setData] = useState([])
  console.log(data);
  const url = 'https://jsonplaceholder.typicode.com/comments'

  useEffect(() => {
    axios(url)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err)) 
  }, [])
    
  return (
    <div className='container'>
      <h1 className='title'>Comments</h1>
      {data.map((comment) => (
        <div key={comment.id}>
          <li className='comment'>{comment.body}</li>
        </div>
      ))}
    </div>
  )
}

export default AxiosGet