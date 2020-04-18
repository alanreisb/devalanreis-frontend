const axios = require('axios');
require('dotenv').config();

<<<<<<< HEAD
export function EnviarEmail (nome, email, mensagem) {
  console.log(`${process.env.REACT_APP_API_URL}`)
  axios
    .post(`${process.env.REACT_APP_API_URL}`, {
      nome: nome,
      email: email,
      mensagem: mensagem
    })
    .then(function (response) {
      if (response.status === 200) {
        window.alert('Obrigado pelo contato. \n Mensagem foi enviada!')
      }
    })
    .catch(function (error) {
      window.alert(
        'Desculpe, ocorreu um erro. \n Por favor tente outra forma de contato.'
      )
      console.log(error.message)
    })
}
=======
export function EnviarEmail(nome,email,mensagem) {
    axios.post(`${process.env.REACT_APP_API_URL}`, {
        nome: nome,
        email: email,
        mensagem: mensagem
    })
        .then(function (response) {
            if(response.status === 200){
                window.alert('Obrigado pelo contato. \n Mensagem foi enviada!');
            }
           
        })
        .catch(function (error) {
            window.alert('Desculpe, ocorreu um erro. \n Por favor tente outra forma de contato.')
               console.log(error);
        });
};
>>>>>>> parent of aaf7cc4... aa
