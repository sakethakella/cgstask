const Item3 = ({data}) => {
    return ( 
        <>
        
        <div className="comel">
        <p><span className="ert">User: </span>{data.user_name}</p>
        <p><span className="ert">Game Name: </span>{data.gamename}</p>
        <p><span className="ert">Comment: </span>{data.comment}</p>
        </div>
        </>
     );
}
 
export default Item3;