export default function Card({comics}) {
    //console.log(props);
    
    return (
            <div className="col text-white fs-1" key={comics.id}>
                <div className="card text-center text-white bg-black">
                    <img style={{ minHeight: '18rem' }} src={comics.thumb} className="card-img-top img-fluid object-fit-cover" alt={comics.series} />
                    <div className="card-body">
                        <h5 className="card-title">{comics.title}</h5>
                    </div>
                </div>
            </div>
        )
}