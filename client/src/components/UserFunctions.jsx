import axios from 'axios'

export const companyregister = newUser => {
    return axios
        .post('users/companyregister',{
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            mobile:newUser.mobile,
            email: newUser.email,
            password: newUser.password,
        })
        .then(res =>{
            console.log('Registered')
        }
    )
}


export const companylogin = user => {
    return axios
        .post('users/companylogin',{
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken',res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        }
    )
}


export const logisticsregister = newUser => {
    return axios
        .post('users/logisticsregister',{
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            mobile:newUser.mobile,
            email: newUser.email,
            password: newUser.password,
        })
        .then(res =>{
            console.log('Registered')
        }
    )
}


export const logisticslogin = user => {
    return axios
        .post('users/logisticslogin',{
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken',res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        }
    )
}


export const truckerregister = newUser => {
    return axios
        .post('users/truckerregister',{
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            mobile:newUser.mobile,
            email: newUser.email,
            password: newUser.password,
        })
        .then(res =>{
            console.log('Registered')
        }
    )
}


export const truckerlogin = user => {
    return axios
        .post('users/truckerlogin',{
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken',res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        }
    )
}


