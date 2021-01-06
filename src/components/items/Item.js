const Item = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.Poster} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.Title}</h1>
          <div className="year">{item.Year}</div>
          <div className="rating">
            <strong>Rating:</strong> {item.imdbRating}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item