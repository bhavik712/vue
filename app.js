const vm = Vue.createApp({
    data(){
        return{
            firstName: 'Virat',
            lastName: 'Kohli',
            x:18
        }
    }
}).mount('#app');

vm.firstName = 'Rohit';


// Vue.createApp({
//     data(){
//         return{
//             firstName: 'Rohit',
//             lastName: 'Sharma',
//             x:45
//         }
//     }
// }).mount('#new-div')