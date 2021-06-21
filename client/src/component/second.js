
import { useSelector } from "react-redux"
export default function Second() {
    const Data = useSelector(state => state.user);
    return (
        <>
            <p>
             name :{Data.name ? Data.name : 'מלא שם'}
              old:{Data.age ? Data.age : 'גיל'} 
              city: {Data.city ? Data.city :  'עיר'} 
              adress:{Data.adress ? Data.adress :  'מגורים'} 
              phone:{Data.phone ?Data.phone: 'טלפון'}
            </p>
        </>
    )
}
