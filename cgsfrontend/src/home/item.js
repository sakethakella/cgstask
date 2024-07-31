import './home.css';

const Item = ({data}) => {
    let s='Login Not Required';
    
    if(data.loginrequired){
        s='Login Required';
    }

    return ( 
            <div className="itemel">
            <img src={data.img} alt='' className='img_2'/>
            <h3>{data.name}</h3>
            <p>{s}</p>
            </div>
     );
}
 
export default Item;