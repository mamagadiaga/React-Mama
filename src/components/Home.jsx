import React from 'react'

const Home = () => {
    return (
    <section id='home' className='home'>
        <div className='container'>
            <h1 className='m-5 text-white'>WELCOME!</h1>
            <h6 className='text-start text-white'>100...</h6>
            <div className="row">
                <div className="col-md-3 bg-success p-5 text-white">
                    <h6 className='text-center'>SUCCESS</h6>
                </div>
                <div className="col-md-3 bg-warning text-white p-5">
                    <h6 className='text-center'>WARNING</h6>
                </div>
                <div className="col-md-3 bg-danger p-5 text-white">
                    <h6 className='text-center'>DANGER</h6>
                </div>
                <div className="col-md-3 bg-info p-5 text-white">
                    <h6 className='text-center'>INFO</h6>
                </div>
            </div>     
            <div className="row">
                <div className="col-md-3 bg-danger p-5 text-white">
                    <h6 className='text-center'>DANGER</h6>
                </div>
                <div className="col-md-3 bg-success p-5 text-white">
                    <h6 className='text-center'>SUCCESS</h6>
                </div>
                <div className="col-md-3 bg-info p-5 text-white">
                    <h6 className='text-center'>INFO</h6>
                </div>
                <div className="col-md-3 bg-warning text-white p-5">
                    <h6 className='text-center'>WARNING</h6>
                </div>
            </div>  
            <div className="row">
                <div className="col-md-3 bg-warning text-white p-5">
                    <h6 className='text-center'>WARNING</h6>
                </div>
                <div className="col-md-3 bg-info p-5 text-white">
                    <h6 className='text-center'>INFO</h6>
                </div>
                <div className="col-md-3 bg-success p-5 text-white">
                    <h6 className='text-center'>SUCCESS</h6>
                </div>
                <div className="col-md-3 bg-danger p-5 text-white">
                    <h6 className='text-center'>DANGER</h6>
                </div>
            </div>     
            <div className="row">
                <div className="col-md-3 bg-info p-5 text-white">
                    <h6 className='text-center'>INFO</h6>
                </div>
                <div className="col-md-3 bg-warning text-white p-5">
                    <h6 className='text-center'>WARNING</h6>
                </div>
                <div className="col-md-3 bg-danger p-5 text-white">
                    <h6 className='text-center'>DANGER</h6>
                </div>
                <div className="col-md-3 bg-success p-5 text-white">
                    <h6 className='text-center'>SUCCESS</h6>
                </div>
            </div>  
        </div>
    </section>
    
  )
}


export default Home


