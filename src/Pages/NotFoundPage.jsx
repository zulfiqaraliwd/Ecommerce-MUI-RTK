import React from 'react'

function NotFoundPage() {

    const errorMsg = {  
  display: "inline"
 } 
  return (
    <div>
        <h1>404</h1>
  <h3 style={{display:"inline"}}>Error:</h3>
  <p style={{display:"inline"}}> page not found , please follow the right path</p>
</div>
  )
}

export default NotFoundPage
