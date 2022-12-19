const somethingWillHappen= () =>{
    return new Promise ((resolve, reject) =>{
        if(true){
            resolve("Viva lo logramos");
        }else{
            reject("Nop, algo salio mal");
        }
    })
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () =>{
    return new Promise((resolve, reject)=>{
        if(true) {
            setTimeout (() =>{
                resolve ('True');
            },2000)
        }else{
            const error =new Error ('Mal, algo falla');
            reject(error);
        }
    });
}
somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

    Promise.all([somethingWillHappen(),somethingWillHappen2])
        .then(response =>{
            console.log('Arrays of results',response);
        } )
        .catch(err =>{
            console.error(err);
        })