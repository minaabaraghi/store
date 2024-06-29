import React from 'react'

export default function NotFound() {
  return (
    <div
      className=" errorPageImage"
      style={{
        backgroundImage: `url("/images/errorBG.jpg")`
      }}
    >
      <div style={{textAlign:"left",marginLeft:"100px"}}>
        <h1
          className="font-size-sm-100 font-weight-boldest text-dark-75 mt-15"
          style={{ fontSize: "150px" }}
        >
          404
        </h1>
        <p className="font-size-h3 font-weight-light">
          صفحه مورد نظر یافت نشد.
        </p>
      </div>
    </div>
  )
}
