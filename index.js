const title = document.getElementById(`title`)
const room = document.getElementById(`room`)
const category = document.getElementById(`category`)
const pbutton = document.getElementById(`pfzdrfbutton`)
const ticketList = document.getElementById(`ticketList`)
const message = document.getElementById('message')

const tickets = [
    {title:`Проектор не включается`, room:`203`, category:`Оборудование`, done: false},
    {title:`Не закрывается окно`, room:`105`, category:`Аудитория`, done: false},
    {title:`В коридоре не горит свет`, room: `Коридор, 2-й этаж`, category:`Другое`, done: true }
]

