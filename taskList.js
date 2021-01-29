(() => {
    const criarTarefa = (evento) => {
    
        evento.preventDefault();
        const input = document.querySelector("[data-form-input]");
        const valor = input.value;
        console.log(valor);
        input.value="";
    }
    
    const novaTarefa = document.querySelector("[data-form-btn]");
    novaTarefa.addEventListener("click", criarTarefa);
});