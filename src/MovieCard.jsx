


const Card = ({movie}) => {
   return (
      <div className="movie">
         {movie.Year >= 1995 && 
         <div className="featured-movies">
            <h4>Featured</h4>
         </div>
         }
         {movie.Year <= 1995 &&  
         <div className="featured-movies-unrated">
            <h4>WebDl</h4>
         </div>}
         <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
         </div>

         <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title} ({movie.Year})</h3>
            {/* <h3>{movie.Rating}</h3> */}
         </div>
      </div>
   )
}

export default Card