let list = []
while (true){
    let userInput = prompt("add: Yangi vazifa qo'shish\nlist: Barcha vazifalarni ko'rsatish\ndelete: Vazifani o'chirish\nexit: Dasturdan chiqish")
    
    if (userInput == "add"){
        let add = prompt("Yangi vazifani nomini yozing")
        list.push(add)
    }else if (userInput == "list") {
        let temp = ""
        for (let i = 0; i < list.length; i++) {
            temp += `${i+1} - ${list[i]}\n`
        }
        alert(temp)
    } else if (userInput == "delete") {
        let temp = ""
        for (let i = 0; i < list.length; i++) {
            temp += `${i+1} - ${list[i]}\n`
        }
        let del = prompt(`${temp}\nqaysi birini o'chirmoqchi siz`)
        if (del > 0) {
            list.splice(del-1,1)
        }
    }else if (userInput == "exit"){
        break
    }
}