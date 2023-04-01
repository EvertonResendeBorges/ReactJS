import './style.css'

function Grid(){
    return(
      <>
         <div className="container">

            <div className="row">
               <div className="col col-md">
                  One of three columns
               </div>
               <div className="col col-md">
                  One of three columns
               </div>
               <div className="col col-md">
                  One of three columns
               </div>
            </div>

            <div className="row">
               <div className="col col-md">
                  One of three columns
               </div>
               <div className="col col-md">
                  One of three columns
               </div>
               <div className="col col-md">
                  One of three columns
               </div>
            </div>
         </div>

         <div className='container'>

               <div className="row">
                  <div className="col col-md-6">Coluna 1</div>
                  <div className="col col-md-6">Coluna 2</div>
               </div>

               <div className="row">
                  <div className="col col-md-6">Coluna 1</div>
                  <div className="col col-md-6">Coluna 2</div>
               </div>
         </div>

         <div className='container'>
            <div className="row">
               <div className="col col-md-4">Coluna 1</div>
               <div className="col col-md-4 offset-md-1">Coluna 2</div>
               <div className="col col-md-3">Coluna 3</div>
            </div>
            <div className="row">
               <div className="col col-md-4">Coluna 1</div>
               <div className="col col-md-4 offset-md-1">Coluna 2</div>
               <div className="col col-md-3">Coluna 3</div>
            </div>
         </div>

         <div className="container">

            <div className="row">
               <div className="col">
                  1 of 2
               </div>
               <div className="col">
                  2 of 2
               </div>
            </div>

            <div className="row">
               <div className="col">
                  1 of 1
               </div>
            </div>

            <div className='row'>
               <div className='col'>  1 of 4 </div>
               <div className='col'>  2 of 4 </div> 
               <div className='col'>  3 of 4 </div>
               <div className='col'>  4 of 4 </div> 
            </div>

         </div>

         <img src="./car-header.png" alt="" />
      </>
    )
}

export default Grid