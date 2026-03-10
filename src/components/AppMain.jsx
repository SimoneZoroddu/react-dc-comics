import { Fragment as Pippo } from 'react'; // giusto per ricordare come si chiama l elemento (Fragment) e l uso di as (ovvero dargli un nome)
import AppCard from './AppCard'
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
                                <AppCard key={comic.id} comics={comic} />
                            ))
                        }
                    </div>
                    <button className='btn btn-primary rounded-0 px-5'>LOAD MORE</button>
                </div>
            </main >
        </Pippo>
    )
}