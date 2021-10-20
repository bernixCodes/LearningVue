const Quizlet ={
    data(){
        return{
            deckName: 'Vue Js Fundamentals Quiz',
            cards: cards,
            flipped: false,
            index: 0
        }
    },
    methods:{
       move(changeDirection){
           if(this.cards[this.index + changeDirection]){
               this.index = this.index + changeDirection;
               this.flipped = false
           }
       }
    
    }
}
Vue.createApp(Quizlet).mount('#app');