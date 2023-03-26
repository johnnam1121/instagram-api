import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Feed from './Feed'

const InstagramCalls = (props) => {
  const [feeds, setFeedsData] = useState([])
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://localhost:8000/insta'
    }
    async function fetchInstagramPost() {

      axios
        .request(options)
        .then((response) => {
          console.log(response.data)
          setFeedsData(response.data)
        }).catch((error) => {
          console.log('error', error)
        })
    }
    fetchInstagramPost();
  }, [])
  // }, [props.limit])

  return (
    <div className="container">
      {feeds.data?.map((data, _index) => (
        <div key={_index}>
          <Feed key={data.id} feed={data} />
        </div>))}
    </div>
  );
}

export default InstagramCalls