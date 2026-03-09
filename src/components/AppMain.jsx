import { Fragment as Pippo } from 'react'; // giusto per ricordare come si chiama l elemento (Fragment) e l uso di as (ovvero dargli un nome)
import comicsObject from '../assets/comics'



export default function AppMain() {


    return (
        <Pippo>
            <div className='firstBg'></div>
            <main className="bg-black p-3">
                <div className="container py-4 text-center position-relative">
                    <div className='text-white current_series'>CURRENT SERIES</div>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6">
                        {
                            comicsObject.map(comic => (
                                <div className="col text-white fs-1" key={comic.id}>
                                    <div className="card text-center text-white bg-black">
                                        <img style={{ minHeight: '18rem' }} src={comic.thumb} className="card-img-top img-fluid object-fit-cover" alt={comic.series} />
                                        <div className="card-body">
                                            <h5 className="card-title">{comic.title}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <button className='btn btn-primary rounded-0 px-5'>LOAD MORE</button>
                </div>
            </main >
        </Pippo>
    )
}