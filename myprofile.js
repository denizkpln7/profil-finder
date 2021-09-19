class Profile{
    constructor(){
        this.clientid = '',
        this.clientSecret =''
    }

   async getProfile(text){
       
    const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${text}`);
    const profile=await profileResponse.json();
    return {
        profile
    }
   } 

}
