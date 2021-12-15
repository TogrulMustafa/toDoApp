const yeniVezife = document.querySelector('.input-vezife')
const yeniVezifeElaveBtn = document.querySelector('.btn-vezife-elaveet')


// Todo-larin oldugu siyahini secmek
const vezifeSiyahisi = document.querySelector('.vezife-siyahisi')
yeniVezifeElaveBtn.addEventListener('click', vezifeElaveet)
vezifeSiyahisi.addEventListener('click', vezifeTamamlaSil)

/* 
   vezifeSiyahisi-ni ona gore klikleyirik ki,onun icinde kliklenecek iki child var.
   Ayri-ayri kliklenme hadisesi yazmaqdansa,bir dene yaziriq onu da her ikisinin valideyni olan ucun yaziriq.
*/

// toggle(),parentElement,appendChild,classlist,contains,value,

function vezifeTamamlaSil(e) {
    const kliklenenElement = e.target
    // ?
    if(kliklenenElement.classList.contains('vezife-btn-tamamlandi')) {
        kliklenenElement.parentElement.classList.toggle('vezife-tamamlandi')
    }
    if(kliklenenElement.classList.contains('vezife-btn-sil')) {
        kliklenenElement.parentElement.classList.toggle('reddol')
    }
}
function vezifeElaveet() {
    const vezifeDiv = document.createElement('div')
    vezifeDiv.classList.add('vezife-item')
    const vezifeLi = document.createElement('li')
    vezifeLi.classList.add('vezife-tanitim')
    vezifeLi.textContent = yeniVezife.value
    vezifeDiv.appendChild(vezifeLi)
    const vezifeTamamlandiBtn = document.createElement('button')
    vezifeTamamlandiBtn.classList.add('vezife-btn')
    vezifeTamamlandiBtn.classList.add('vezife-btn-tamamlandi')
    vezifeTamamlandiBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
    vezifeDiv.appendChild(vezifeTamamlandiBtn)
    const vezifeSilBtn = document.createElement('button')
    vezifeSilBtn.classList.add('vezife-btn')
    vezifeSilBtn.classList.add('vezife-btn-sil')
    vezifeSilBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
    vezifeDiv.appendChild(vezifeSilBtn)
    vezifeSiyahisi.appendChild(vezifeDiv)
    yeniVezife.value = ''
}
