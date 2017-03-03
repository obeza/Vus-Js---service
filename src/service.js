

export default  {
    init (context) {
      this.http = context.http
    },
    load: function(data){
      
      let url = 'http://localhost:8080/static/data.json'
      return this.http.get( url ).then(response => {
        // success callback
        //console.log("reponse : " + JSON.stringify( response.data ) )
        return response.data
        
      }, response => {
        // error callback
      });
      //return promise

    }

}