// Abro o terminal e acesso a pasta atual -> usando path - usando o comando npm init -y dentro da pasta atual - ele é gerenciador de pacotes do node
// instalando npm i axios
const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod3');
const mod3 = require('./mod3');

/* axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch(e=> console.log(e)); // axios faz importação utilizado para node
 */

 const p1 = new Pessoa('João');
 console.log(mod3);
 console.log(p1);