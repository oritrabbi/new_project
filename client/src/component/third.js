import React, { useEffect, useRef } from 'react'
export default function Third() {
    const Data = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(action.getAllUSer())
    }, [])
    return (
        <>
            {
                Data.arrAllUser.length ?
                    Data.arrAllUser.map(item =>
                        <h1> {item.name}</h1>,
                        <h1> {item.mail}</h1>
                    )
                    : null}
        </>
    )
}

