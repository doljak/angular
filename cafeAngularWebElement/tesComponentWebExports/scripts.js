const letterPicker = document.querySelector('app-vowel-picker')

console.log(letterPicker)

letterPicker.addEventListener('letterSelected', function(e){
    console.log(`letter with addEventListener:${e.detail}`)
})