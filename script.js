
const taskButton = document.querySelector('.task-btn')
const wrapper = document.querySelector('.wrapper')
const form = document.querySelector('form')
const changeLang = document.querySelector('.language')
const sortButtonsWrapper = document.querySelector('.show-butns')



const inputTitle = document.querySelector('#title')
const inputBody = document.querySelector('#body')
const inputDate = document.querySelector('#date')

let currentSort = 'All'
changeColor(document.getElementById('all'))

const taskInfoBlock = {
    title: '',
    body: '',
    date: ''
}

const rusLang = {
    name: 'Задачник',
    firstInput: 'Придумайте название вашей задаче',
    secondInput: 'Распишите суть вашей задачи',
    buttonText: 'Создать задачу',
    timerTitle: 'Осталось до дедлайна',
    days: 'Дни:',
    hours: 'Часы:',
    minutes: 'Минуты:',
    seconds: 'Секунды:',
    newDate: 'Укажите новую дату',
    done: 'Выполнено', 
    timerEnd: 'Время вышло',
    sucBtn: 'Выполненные',
    allBtn: 'Все задачи',
    notSucBtn: 'Невыполненные'
}

const engLang = {
    name: 'To do list',
    firstInput: 'Come up with a name for your task',
    secondInput: 'Describe the nature of your task',
    buttonText: 'Create a task',
    timerTitle: 'Time Remaining',
    days: 'Days:',
    hours: 'Hours:',
    minutes: 'Minutes:',
    seconds: 'Seconds:',
    newDate: 'Enter new date',
    done: 'Done',
    timerEnd: "Time's up",
    sucBtn: 'Successed',
    allBtn: 'All tasks',
    notSucBtn: 'Not Successed'
}


changeLang.addEventListener('change', (event) => {
    const textsContent = document.querySelectorAll('[data-text]')
    if(event.target.value === 'rus') {
        textsContent.forEach(el => {
            if(el.tagName === 'H1') {
                el.innerHTML = rusLang.name
            }
            if(el.tagName === 'BUTTON') {
                if(el.getAttribute('id') === 'create-task'){
                    el.innerHTML = rusLang.buttonText
                }
                if(el.getAttribute('id') === 'suc'){
                    el.innerHTML = rusLang.sucBtn
                }
                if(el.getAttribute('id') === 'all'){
                    el.innerHTML = rusLang.allBtn
                }
                if(el.getAttribute('id') === 'not-suc'){
                    el.innerHTML = rusLang.notSucBtn
                }
            }
            if(el.tagName === 'INPUT') {
                if(el === document.getElementById('title')) {
                    el.setAttribute('placeholder', rusLang.firstInput)
                } else {
                    el.setAttribute('placeholder', rusLang.secondInput)
                }
            }
            if(el.tagName === 'SPAN') {
                if(el.getAttribute('id') === 'remaining') {
                    el.innerHTML = rusLang.timerTitle
                }
                if(el.getAttribute('id') === 'days') {
                    el.innerHTML = rusLang.days
                }
                if(el.getAttribute('id') === 'hours') {
                    el.innerHTML = rusLang.hours
                }
                if(el.getAttribute('id') === 'minutes') {
                    el.innerHTML = rusLang.minutes
                }
                if(el.getAttribute('id') === 'seconds') {
                    el.innerHTML = rusLang.seconds
                } 
                if(el.getAttribute('id') === 'new-date') {
                    el.innerHTML = rusLang.newDate
                }
                if(el.getAttribute('id') === 'done') {
                    el.innerHTML = rusLang.done
                }
                if(el.getAttribute('id') === 'time-end') {
                    el.innerHTML = rusLang.timerEnd
                }
            }
        })
    } else {
        textsContent.forEach(el => {
            if(el.tagName === 'H1') {
                el.innerHTML = engLang.name
            }
            if(el.tagName === 'BUTTON') {
                if(el.getAttribute('id') === 'create-task'){
                    el.innerHTML = engLang.buttonText
                }
                if(el.getAttribute('id') === 'suc'){
                    el.innerHTML = engLang.sucBtn
                }
                if(el.getAttribute('id') === 'all'){
                    el.innerHTML = engLang.allBtn
                }
                if(el.getAttribute('id') === 'not-suc'){
                    el.innerHTML = engLang.notSucBtn
                }
            }
            if(el.tagName === 'INPUT') {
                if(el === document.getElementById('title')) {
                    el.setAttribute('placeholder', engLang.firstInput)
                } else {
                    el.setAttribute('placeholder', engLang.secondInput)
                }
            }
            if(el.tagName === 'SPAN') {
                if(el.getAttribute('id') === 'remaining') {
                    el.innerHTML = engLang.timerTitle
                }
                if(el.getAttribute('id') === 'days') {
                    el.innerHTML = engLang.days
                }
                if(el.getAttribute('id') === 'hours') {
                    el.innerHTML = engLang.hours
                }
                if(el.getAttribute('id') === 'minutes') {
                    el.innerHTML = engLang.minutes
                }
                if(el.getAttribute('id') === 'seconds') {
                    el.innerHTML = engLang.seconds
                }
                if(el.getAttribute('id') === 'new-date') {
                    el.innerHTML = engLang.newDate
                }
                if(el.getAttribute('id') === 'done') {
                    el.innerHTML = engLang.done
                }
                if(el.getAttribute('id') === 'time-end') {
                    el.innerHTML = engLang.timerEnd
                }
            }
        })
    }
})


inputTitle.addEventListener('input', (event) => {
    taskInfoBlock.title = event.target.value 
})

inputBody.addEventListener('input', (event) => {
    taskInfoBlock.body = event.target.value
})

inputDate.addEventListener('input', (event) => {
    taskInfoBlock.date = event.target.value
    
})


sortButtonsWrapper.addEventListener('click', (event) => {
    if (event.target === document.getElementById('suc')) {
        currentSort = 'Success'
        changeColor(event.target)
        changeColorBack(document.getElementById('all'))
        changeColorBack(document.getElementById('not-suc'))
        for (const wrapChild of Object.values(wrapper.children)) {
            for (taskChild of Object.values(wrapChild.children)) {
                if (taskChild.classList.contains('circle')) {
                    if (!taskChild.lastElementChild) {
                        wrapChild.style.display = 'none'
                    } else {
                        wrapChild.style.display = ''
                    }
                }
            }
        }
    }
    if (event.target === document.getElementById('all')) {
        currentSort = 'All'
        changeColor(event.target)
        changeColorBack(document.getElementById('suc'))
        changeColorBack(document.getElementById('not-suc'))
        for (const wrapChild of Object.values(wrapper.children)) {
            wrapChild.style.display = ''
        }
    }
    if (event.target === document.getElementById('not-suc')) {
        currentSort = 'notSuc'
        changeColor(event.target)
        changeColorBack(document.getElementById('all'))
        changeColorBack(document.getElementById('suc'))
        for (const wrapChild of Object.values(wrapper.children)) {
            for (taskChild of Object.values(wrapChild.children)) {
                if (taskChild.classList.contains('circle')) {
                    if (taskChild.lastElementChild) {
                        wrapChild.style.display = 'none'
                    } else {
                        wrapChild.style.display = ''
                    }
                }
            }
        }
    }
})



taskButton.addEventListener('click', (event) => {
    event.preventDefault()
    if(taskInfoBlock.title === '' ||  taskInfoBlock.body  === '' || taskInfoBlock.date  === '') {
        if(!form.lastElementChild.classList.contains('attention')) {
            const attention = document.createElement('div') 

            if(changeLang.value === 'rus') {
                attention.textContent = 'Введите необходимые данные'
            } else {
                attention.textContent = 'Enter the required data'
            }
            
            attention.classList.add('attention')
            taskButton.insertAdjacentElement('afterend', attention)
            setTimeout(function () {
                form.removeChild(form.lastElementChild)
            }, 2000)
        }
        changeColor(inputBody)
        changeColor(inputDate)
        changeColor(inputTitle)

        setTimeout(function() {
            changeColorBack(inputBody)
            changeColorBack(inputDate)
            changeColorBack(inputTitle)
        }, 100)
        return
    }
    const task = document.createElement('div')
    task.classList.add('task-wrapper')

    if(changeLang.value === 'eng') {
        task.innerHTML = `
 
        <h2 class="task-name">${taskInfoBlock.title}</h2>
   
    <div class="task-body">
        ${taskInfoBlock.body}
    </div>
    <div class="circle"></div>
    <button class="delete">&times</button>
    <div class="timer">
        <span data-text id="remaining">Time Remaining</span> |
       <span data-text id="days"> Days: </span> <span class="days"></span> |
        <span data-text id="hours"> Hours: </span> <span class="hours"></span> |
        <span data-text id="minutes"> Minutes: </span> <span class="minutes"></span> |
        <span data-text id="seconds"> Seconds: </span> <span class="seconds"></span> 
    </div>
    <img class="edit" src="./img/editIcon.png"></img>
    `
    } else {

        task.innerHTML = `
 
        <h2 class="task-name">${taskInfoBlock.title}</h2>
   
    <div class="task-body">
        ${taskInfoBlock.body}
    </div>
    <div class="circle"></div>
    <button class="delete">&times</button>
    <div class="timer">
        <span data-text id="remaining">Осталось до дедлайна</span> |
       <span data-text id="days"> Дни: </span> <span class="days"></span> |
        <span data-text id="hours"> Часы: </span> <span class="hours"></span> |
        <span data-text id="minutes"> Минуты: </span> <span class="minutes"></span> |
        <span data-text id="seconds"> Секунды: </span> <span class="seconds"></span> 
    </div>
    <img class="edit" src="./ToDoList/img/editIcon.png"></img>
    `
    }
   
    if(currentSort === 'Success') {
        task.style.display = 'none'
    }
    wrapper.append(task)

    
    for (const element of Object.values(task.children)){
        if(element.classList.contains('timer')) {
            setTime(element)
        }
    }
    for (const child of Object.values(form.children)) {
        if (child.classList.contains('input')) {
            child.value = ''
        }
    }
    for (const value in taskInfoBlock) {
        taskInfoBlock[value] = ''
    }
   
})





taskButton.addEventListener('mouseenter', () => {
        taskButton.style.backgroundColor = 'cadetblue'
        taskButton.style.border = '1px solid cornsilk'
})
taskButton.addEventListener('mouseleave', () => {
    taskButton.style.backgroundColor = 'cornsilk'
    taskButton.style.border = '1px solid cadetblue'
})

// WRAPPER PAGE CHANGE

wrapper.addEventListener('click', (event) => {
    if(event.target.classList.contains('circle')) {

        const success = document.createElement('img')
        success.classList.add('success')
        const path = './ToDoList/img/icons8-галочка-80.png'
        success.setAttribute('src', path)
        event.target.append(success) 


        if(currentSort === 'notSuc') {
            event.target.parentNode.style.display = 'none'
        }

        changeElememts(event.target.parentNode.children, 'task-body', 'finished-task')

        for (const value of Object.values(event.target.parentNode.children)) {
            if(value.classList.contains('delete')) {
                continue;
            } 
            if(value.classList.contains('edit')) {
                value.style.pointerEvents = 'none'
            }
            value.style.opacity = '0.5'
        }

        changeElememts(event.target.parentNode.children, 'timer', 'timer-success')
    }
})

wrapper.addEventListener('click', (event) => {
    if(event.target.classList.contains('success')){
        const near = event.target.closest('div')
        near.removeChild(near.firstChild)
        changeElememts(near.parentNode.children, 'finished-task', 'task-body')
        for (const value of Object.values(near.parentNode.children)) {
            if(value.classList.contains('edit')) {
                value.style.pointerEvents = '' 
            }
            value.style.opacity = '1'
        }

        if(currentSort === 'Success') {
            near.parentNode.style.display = 'none'
        }
        changeElememts(near.parentNode.children, 'timer-success', 'timer')
    } 
})

wrapper.addEventListener('click', (event) => {
    if(event.target.classList.contains('edit')) {
        for (const value of Object.values(event.target.parentNode.children)) {
            if(value.classList.contains('timer')) {
                newInputFunction(value)
            }
            if(value.classList.contains('task-body')) {
                addEditInput('task-input', value)
            }
            if(value.classList.contains('task-name')){
                addEditInput('name-input', value)
            }
        }
    }
})

wrapper.addEventListener('click', (event) => {
    if(event.target.classList.contains('delete-mouse')){
        event.target.closest('.task-wrapper').remove()
    }
})





// WRAPPER STYLE CHANGE


wrapper.addEventListener('mouseover', (event) => {
    if(event.target.classList.contains('edit')) {
        event.target.style.filter = 'invert(100%)'
    }
})
wrapper.addEventListener('mouseout', (event) => {
    if(event.target.classList.contains('edit')){
        event.target.style.filter = ''
    }
})


wrapper.addEventListener('mouseover', (event) => {
    if(event.target.classList.contains('delete')) {
        event.target.classList.add('delete-mouse')
        event.target.classList.remove('delete')
    }
})

wrapper.addEventListener('mouseout', (event) => {
    if(event.target.classList.contains('delete-mouse')) {
        event.target.classList.add('delete')
        event.target.classList.remove('delete-mouse')
    }
})


wrapper.addEventListener('mouseover', (event) => {
    if(event.target.classList.contains('circle')) {
        changeColor(event.target)
    }
})

wrapper.addEventListener('mouseout', (event) => {
    if(event.target.classList.contains('circle')) {
        changeColorBack(event.target)
    }
})




// Timer
function setTime(timeBlock) {
    const deadline = new Date(taskInfoBlock.date);
    const daysEl = timeBlock.querySelector('.days')
    const hoursEl = timeBlock.querySelector('.hours')
    const minutesEl = timeBlock.querySelector('.minutes')
    const secondsEl = timeBlock.querySelector('.seconds')
    
    startTime()
    
    function startTime() {
       
        const timeRemaining = deadline - new Date()
        if (timeRemaining <= 0) {
            if(changeLang.value === 'rus') {
                timeBlock.innerHTML = `
                <span data-text id="time-end"> Время вышло </span>` 
            } else {
                timeBlock.innerHTML = `
                <span data-text id="time-end"> Time's up </span>` 
            }
            
            return
        }
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
        const seconds = Math.floor((timeRemaining / 1000) % 60);
    
        daysEl.innerHTML = getZero(days);
        hoursEl.innerHTML = getZero(hours);
        minutesEl.innerHTML = getZero(minutes);
        secondsEl.innerHTML = getZero(seconds);
        setTimeout(startTime, 1000)
    }
    
}

function getZero(number) {
    if (number < 10) {
        number = `0${number}`
    }
    return number
}



// CHANGE COLORS
function changeColor(input) {
    input.style.backgroundColor = 'cadetblue'
    input.style.border = '1px solid cornsilk'
}

function changeColorBack(input) {
    input.style.backgroundColor = ''
    input.style.border = ''
}
//


function changeElememts(object, deleteSelector, addSelector) {
    for (const value of Object.values(object)) {
        if(value.classList.contains(deleteSelector)) {
            if(deleteSelector === 'timer') {

                if(changeLang.value === 'rus') {
                    value.innerHTML = `
                    <span data-text id="done"> Выполнено </span>`
                } else {
                    value.innerHTML = `
                    <span data-text id="done"> Done </span>`
                }
                
            }

            if(deleteSelector === 'timer-success') {
                newInputFunction(value)
            }

            value.classList.remove(deleteSelector)
            value.classList.add(addSelector)
        }  
    }
}

function newInputFunction(value) {
    const newDateInput = document.createElement('input')
    newDateInput.setAttribute('type', 'datetime-local')
    newDateInput.classList.add('new-input')

    if(changeLang.value === 'rus') {
        value.innerHTML = `
        <span data-text id="new-date"> Укажите новую дату </span>`
    } else {
        value.innerHTML = `
        <span data-text id="new-date"> Enter new date </span>`
    }
    
    value.append(newDateInput)
    newDateInput.addEventListener('change', () => {
        taskInfoBlock.date = newDateInput.value
        if(changeLang.value === 'rus') {
            value.innerHTML = `
                <span data-text id="remaining">Осталось до дедлайна</span> |
                <span data-text id="days"> Дни: </span> <span class="days"></span> |
                <span data-text id="hours"> Часы: </span> <span class="hours"></span> |
                <span data-text id="minutes"> Минуты: </span> <span class="minutes"></span> |
                <span data-text id="seconds"> Секунды: </span> <span class="seconds"></span> 
            `
        } else {
            value.innerHTML = `
            <span data-text id="remaining">Time Remaining</span> |
            <span data-text id="days"> Days: </span> <span class="days"></span> |
            <span data-text id="hours"> Hours: </span> <span class="hours"></span> |
            <span data-text id="minutes"> Minutes: </span> <span class="minutes"></span> |
            <span data-text id="seconds"> Seconds: </span> <span class="seconds"></span> 
            `
        }
        
                    
        setTime(value)
    })
}


function addEditInput(selector, value) {
    const newTaskInput = document.createElement('input')
    newTaskInput.classList.add(selector)
    value.innerHTML = ''
    value.append(newTaskInput)
    newTaskInput.addEventListener('change', () => {
        value.innerHTML = newTaskInput.value;
        newTaskInput.remove()
    })
}

