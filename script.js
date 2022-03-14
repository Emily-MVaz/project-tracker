var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
var savebutton = $("#add");
var nameField = $("#name-of");
var nameInput = $("#name-input");
function renderLastRegistered(event){
    event.preventDefault();
    var name = $('input[name="name-input"]').val();
    if(!name){
        console.log('no name input');
        return;
    }
   nameField.append("<li>" + name + "</li>");
   $('input[name="name-input"]').val('');
};
savebutton.on("click", renderLastRegistered);








