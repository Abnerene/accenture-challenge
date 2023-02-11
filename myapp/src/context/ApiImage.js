
async function ApiImageUrl(){
//     try {
//         const response = await fetch('https://source.unsplash.com/random/1920x1080/?wallpaper,landscape');
//         const imagen = await response.blob();
//         console.log(imagen)
//         return imagen;
//       } catch (error) {
//         console.log(error);
//       }

const apiURL = "https://source.unsplash.com/random/1920x1080/?wallpaper,landscape"

    return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      
      return data
   });
}

console.log(ApiImageUrl())

 
// }