// // console.log("aaa");

// const object = {
//     key:"value",
//     key2:"リンゴ",
//     age: 18,
// }

// console.log(object.key2)

const APIURL = "https://dog.ceo/api/breeds/image/random"

document.getElementById("dogButton").addEventListener("click",loadImg);

onload = () => {
    loadImg();
}

async function loadImg(){
    const res = await fetch(APIURL);
    // console.log(res);

    const dogData = await res.json();

    // console.log(dogData)

    const dogImgURL = dogData.message;

    // console.log(dogImageURL)

    document.getElementById("dogImg").src = dogImgURL;
}

