const title = document.getElementById(`title`)
const room = document.getElementById(`room`)
const categoryselect = document.getElementById(`categoryselect`)
const pbutton = document.getElementById(`pfzdrfbutton`)
const ticketList = document.getElementById(`ticketList`)
const message = document.getElementById('message')

const tickets = [
    {title:`Проектор не включается`, room:`203`, category:`Оборудование`, done: false},
    {title:`Не закрывается окно`, room:`105`, category:`Аудитория`, done: false},
    {title:`В коридоре не горит свет`, room: `Коридор, 2-й этаж`, category:`Другое`, done: true }
];

function rendertickets (){
    ticketList.innerHTML = '';

    tickets.forEach((ticket, index) => {

        const li = document.createElement('li') 
        let statusText; 
        if(ticket.done === true){
            statusText=`Выполена`
        }else{
            statusText =`Открыта`
        }

        li.textContent = `${ticket.title} · ${ticket.room} · ${ticket.category} · ${statusText}`;
       

        if(ticket.done === false){
            const doneButton = document.createElement('button');
            doneButton.textContent = 'Выполнить';
            doneButton.addEventListener('click', () => {
                tickets[index].done = true; 
                rendertickets(); 
            });
            li.append(doneButton);
        }
        
        const delButton = document.createElement('button');
        delButton.textContent = 'Удалить';
        delButton.addEventListener('click', () => {
            tickets.splice(index, 1); 
            rendertickets(); 
        });
        li.append(delButton);

        ticketList.append(li);


    });

}
rendertickets();


pbutton.addEventListener('click', () => {
    const titlevalue = title.value.trim();
    const roomvalue = room.value.trim();
    const categoryvalue = categoryselect.value.trim();
  
    if (!titlevalue) {
        message.textContent = 'Введите что случилось';
        return;
    }
    if (!roomvalue) {
        message.textContent = 'Введите где';
        return;
    }if (!categoryvalue) {
        message.textContent = 'Введите категорию';
        return;
    }
    message.textContent = ''

    tickets.push({ title: titlevalue, room: roomvalue, category: categoryvalue, done: false });
    rendertickets();

    title.value = '';
    room.value = '';
    categoryselect.value = '';
  });