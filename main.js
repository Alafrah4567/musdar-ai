
const api = "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";
const inp = document.getElementById('input');
const images = document.querySelector('.images')

const getImage = async () => {
    const methods ={
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization":`Bearer ${api}`

        },
        body:JSON.stringify(
            {
                "prompt":inp.value,
                "n":3,
                "size":"256x256"
            }
        )
    }
    const res = await fetch(" https://api.openai.com/v1/images/generations", methods)  
   
    //pares the response as josn//
    const data = await res.json()
    console.log(data)

    const listImages = data.data;
    images.innerHTML = ''
    inp.innerHTML = ''
    listImages.map(photo =>{
       
        const container = document.createElement("div")
        images.append(container)
        const img = document.createElement("img")
        container.append(img)
        img.src = photo.url
    })
   
   
    
}

