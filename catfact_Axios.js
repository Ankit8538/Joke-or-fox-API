let catlink="https://catfact.ninja/fact";
let gif="https://randomfox.ca/floof/";
let jokes="https://icanhazdadjoke.com/"

let butt=document.querySelector('button');
let para=document.querySelector('p');
let images=document.querySelector('img');
let small=document.querySelector('.mm');

butt.addEventListener('click',async ()=>
{
    catfact();
    let fox= await getgif();
    let comm= await getjoke();
    images.src=fox;
    small.innerText=comm;
})

async function catfact()
{
    try
    {
    let catinfo= await axios.get(catlink);
    console.log(catinfo);
    console.log(catinfo.data.fact);
    para.innerText=catinfo.data.fact;

    } catch (err)
    {
        console.log(err);
    }
}

async function getgif()
{
    try
    {
    let vid= await axios.get(gif);
    return(vid.data.image);
    } catch (err)
    {
        console.log(err);
    }
}


async function getjoke()
{
    try{
        const config={ headers:{Accept:"application/json"}};
    let comm= await axios.get(jokes,config);
    return(comm.data.joke);
    } catch (err)
    {
        console.log(err);
    }
}
