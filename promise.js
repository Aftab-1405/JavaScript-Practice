fetch("https://www.google.com/")
.then((response) => {
    return response;
})
.then((newRes)=>{
    console.log(newRes);
    
})
.catch((error) => {
    console.log(error);
});
