import "./All.css"
interface CardProps {
  data: { name: string; description: string; 'image-url': string }[]; // Define the type of 'data'
}
function Card({data}:CardProps){
    return (
        <>
    
        {/* {data.map((name, index) => (    */}
        {data.map((name: { name: string; description: string; 'image-url': string }, index:number) => (

     <div className="card"  style={{ width: '18rem' }} key={index}>
       <div className="image-container">
       <img className="card-img-top" src={name['image-url']} alt="Card image cap"/>

       </div>
        <div className="card-body">
          <h5 className="card-title name-text">{name.name}</h5>
          <p className="card-text work-container">{name.description}</p>
        </div>

        <div className="social-icon">
        <div className="aj-social-group">
         <a href="" className="aj-social--items">
               <div className="aj-social--icon">
                
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" aria-hidden="true"><g id="Facebook F1_layer"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" fill="#720de3"></path></g></svg>
                
              </div>
            </a>
            <a href="" className="aj-social--items">
<div className="aj-social--icon">
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><g id="Twitter4_layer"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" fill="#720de3"></path></g></svg>

</div>              
            </a>
            <a href="" className="aj-social--items">
               <div className="aj-social--icon">
                
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><g id="LinkedIn In3_layer"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" fill="#720de3"></path></g></svg>
                
              </div>
            </a>
          <a href="" className="aj-social--items">
               <div className="aj-social--icon">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" fill="#720de3"></path>
                  </svg>
                
              </div>
            </a>
          </div></div>
      </div>
     
      ))}
    </>
    )
}

export default Card;