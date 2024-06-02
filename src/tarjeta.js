export default function Tarjeta (props){

    const item =props.item;

    return(
        <div className="card">
            <div className="card-header">
                {item.place}
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    {item.title}
                </h5>
                <p className="card-text">
                    <div>{item.price}</div>
                    <div>{item.rating}</div>
                    {<img src={item.img_link} width="60px" height="60px"/>}
                
                </p>
                <a href={item.link}>
                    <button>
                        click aqui
                    </button>

                </a>


            </div>
            </div>

    )

}


