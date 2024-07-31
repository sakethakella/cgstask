const Item2 = ({data}) => {
    return ( 
    <>
    <div className="gamesdetail1">
        <div className="gamesdetail11"><img src={data.img} alt='' className="img_3"/></div>
        <div className="gamesdetail11">
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <h6>Type:{data.tag}</h6>
            <h6>Game ID: {data.gameid}</h6>
            <a href={data.download} target="_blank"><button className="but_1">Download</button></a>
        </div>
        
    </div>
    </> );
}
 
export default Item2;