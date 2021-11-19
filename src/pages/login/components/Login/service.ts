import {request,history} from 'umi'

export const accountLogin = async (params:any) => {
  const {username, password} = params
  const data = {username,password}
  return await request("http://localhost:4001/login", {
    method: 'POST',
    data,
  }).then(function(response) {
    return response
  })
    .catch(function(error) {
      alert("用户名或者密码错误")
      console.error(error)
    });
}

export const welcome = async (value: any) => {
  return await request('http://localhost:4001/welcome', {
    method: 'post',
    data: {
      token:value.token || value
    },
  }).then((response)=>{
    localStorage.setItem('name',response[0].name)
    localStorage.setItem('token',response[0].token)
    return response
  }).catch(err=>{
    if (err.response.status=== 403){
      localStorage.removeItem("token");
      history.push('/login');
    }
  })

};
