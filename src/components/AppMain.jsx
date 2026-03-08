import { Fragment as Pippo } from 'react'; // giusto per ricordare come si chiama l elemento (Fragment) e l uso di as (ovvero dargli un nome)

export default function AppMain() {


    return (
        <Pippo>
            <main className="bg-black">
                <div className="container py-4">
                    <div className="row">
                        <div className="col text-white fs-1">
                            Content goes here
                        </div>
                    </div>
                </div>
            </main >
        </Pippo>
    )
}