function generarParrafo(id, texto){
    return `
    <p id="${id}">
        ${texto}
    </p>
    `
}

const mainContentHtml = `
<h1 id="my-title">Mi página Web</h1>
<p id="my-paragraph">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Beatae, unde praesentium impedit fugit in labore suscipit, 
    tempora incidunt totam, ratione voluptatum recusandae quasi 
    tempore consequuntur sequi amet. Quos, consectetur esse.
</p>
<p >
    Mi segundo parrafo
</p>
`;

const mainContentElement = document.getElementById("main-content");
mainContentElement.innerHTML = mainContentHtml;

