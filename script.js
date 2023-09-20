$(document).ready(function(){
    let arrayTarefas = []

    $('form').on('submit', function(e){
        e.preventDefault()

        let valTarefa = $('#inputTarefa').val()

        if($.inArray(valTarefa,arrayTarefas) !== -1)
            alert('Tarefa já adicionada!')
        else{
            arrayTarefas.push(valTarefa)

            let addTarefa = $(`<ul><li class="tarefas">${valTarefa}</li></ul>`)
            $(addTarefa).appendTo('div')
            $('.tarefas').click(function(){
                $(this).css({'text-decoration':'line-through'})
            })
    
            $('#inicial').css({'display':'none'})

            $('#inputTarefa').val('')
        }
    
    })  
})