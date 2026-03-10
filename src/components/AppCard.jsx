export default function Card(props) {
    // console.log(props);
    
    return (

            <div className="col text-white fs-1">
                <div className="card text-center text-white bg-black">
                    <img style={{ minHeight: '18rem' }} src={props.props.thumb} className="card-img-top img-fluid object-fit-cover" alt={props.props.series} />
                    <div className="card-body">
                        <h5 className="card-title">{props.props.title}</h5>
                    </div>
                </div>
            </div>
        )
}