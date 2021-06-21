import produce from 'immer'
import excHandler from './reducerUtill'
const inisialState = {
  name: '',
  age: '',
  city: '',
  adress:'',
   mail:'' , 
   phone:'',
   arrAllUser: null,
}
const user = {
  UserOneAdd(state, action) {
    state.name.push(action.payLoad.name)
    state.age.push(action.payLoad.age)
    state.city.push(action.payLoad.city)
    state.adress.push(action.payLoad.adress)
    state.city.mail(action.payLoad.mail)
    state.city.phone(action.payLoad.phone)

  },
  allUser(state, action) {
    state.arrAllUser = action.payLoad
  }

}
export default produce((state, action) => {
  excHandler(state, action, user)
}, inisialState)
