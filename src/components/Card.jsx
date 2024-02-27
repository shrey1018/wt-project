import React from 'react'

const Card = () => {
  return (

      <div className="card bordered w-96 bg-white shadow-xl rounded-lg overflow-hidden">
        <figure>
          <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure>
        <div className="card-body p-4 text-gray-600">
          <h2 className="card-title text-center mb-3">
            Shoes!
          </h2>
          <p className="mb-3 text-left">If a dog chews shoes whose shoes does he choose?</p>
          <div className='flex gap-2'>
          <div className="badge badge-secondary">Fashion</div> 
          <div className="badge badge-primary">Products</div>
          <div className="badge badge-acent">Nike</div> 
          <div className="badge badge-primary">Sport</div>
          </div>
          <div className="justify-end card-actions">
            <button className="btn btn-outline btn-circle mr-2">👍</button>
            <button className="btn btn-outline btn-circle">👎</button>
          </div>
        </div>
      </div>

  )
}

export default Card