var app= new Vue(
    {
        el:"#app",
        data:{
            cart:0,
            products:[{
                productcolor:'black',
                productid:001,
                productimage:'https://www.blacksocks.com/files/Wadensocken_schwarz.png'
            },
        {
            productcolor:'grey',
            productid:002,
            productimage:'https://www.rei.com/media/988c15a4-43a5-47d5-911b-96fe8d06edba?size=784x588'
        }]
            
        },
        methods: {addtocart (){
            this.cart+=1

        }
    } 
}
)