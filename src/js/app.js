// console.log('wat')
import { githubApiKey } from '../../secrets.js'
// console.log(githubApiKey);
import $ from 'jquery'

$.getJSON('https://api.github.com/users/t3patterson?access_token=4c9db64304527b11846e4c28bbf5d26be5700853').then(function(serverRes){
    console.log(serverRes);
})
