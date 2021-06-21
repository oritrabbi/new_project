import actions from '../redux/action'
export const middelUser = (store) => (next) => (action) => {
    if (action.type == 'ADD_ONE_USER') {
        debugger
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": action.payLoad.name,
            "age":action.payLoad.age,
            "city":action.payLoad.city,
            "adress": action.payLoad.adress,
            "mail": action.payLoad.mail,
            "phone": action.payLoad.phone
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("http://localhost:3000/addUser", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                debugger
                store.dispatch(actions.UserOneAdd(result))
            })
            .catch(error => console.log('error', error));
    }

    if (action.type == 'GET_ALL_USER') {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:3000/getAllUser", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                store.dispatch(actions.allUser(result))
            })
            .catch(error => console.log('error', error));

    }

    return next(action)
}
