export default function PlaceImg({item,index=0,className=null}){ 
    if (!item.photos?.length)
    return '';
    if(!className) className='object-cover'
    return( 
            <img className={className} src={'https://campus-trade-server.onrender.com/uploads/'+item.photos[index]} alt=""/>  
    )
}

