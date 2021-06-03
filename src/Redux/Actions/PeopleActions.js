import axios from 'axios'
import { PeopleReducer } from '../Reducers/reducers'

export const PeopleAction=(data)=>{
    return {
        type:"PEOPLE_ACTION",
        records: data
    }
}
export const callPeopleApi=  ()=>{
     return async (dispatch)=>{
            try{
             let response = await axios.get('http://localhost:4000/people')
              dispatch(PeopleAction(response.data))
            }
            catch(e){
              dispatch(PeopleReducer([]))
            }
     }
}

export const storePeopleApi=  (id,name,city)=>{
    return async (dispatch)=>{
           try{
            await axios.post('http://localhost:4000/people',
            {id:id,name:name,city:city})
             dispatch(callPeopleApi())
           }
           catch(e){
             console.log(e);
             alert("Something went wrong")
           }
    }
}