const allBasketsAvailable = document.getElementById('allBasketsAvailable')
const allBasketsSegregated = document.getElementById('allBasketSegregated')


axios.get('https://front-project-slb.onrender.com/basket')
    .then(baskets => {
        
        const responseBaskets = baskets.data.basketAvailable
        const basketsAvailable = responseBaskets.filter(basket => basket.basketState === 'y')
        const basketsSegregated = responseBaskets.filter(basket => basket.basketState === 'n')
        

        basketsAvailable.forEach(basketAvailable => {
            const item = document.createElement('li')

            item.setAttribute('data-id', basketAvailable.id)
            item.setAttribute('data-serial-number', basketAvailable.basket)
            item.classList.add('basket')


            item.innerHTML = `
                                SNº: <span class="serial_number">${basketAvailable.basket}</span>
                                <button id='btnDelete' class='btnDelete type='button'>Delete</button>
                                <button id='btnUpdate' class='btnUpdate'>Update</button>
                                                                                                        `

            allBasketsAvailable.appendChild(item)
            
        })
        
        
        basketsSegregated.forEach(basketSegregated => {
            const item = document.createElement('li')

            item.setAttribute('data-id', basketSegregated.id)
            item.setAttribute('data-serial-number', basketSegregated.basket)
            item.classList.add('basket')

            item.innerHTML = `
                                SNº: <span class="serial_number">${basketSegregated.basket}</span>
                                <button id='btnDelete' class='btnDelete'>Delete</button>
                                <button id='btnUpdate' class='btnUpdate'>Update</button>
                                                                                                    `

            allBasketsSegregated.appendChild(item)

        })

        
        const btnDelete = document.querySelectorAll('#btnDelete')
        
        btnDelete.forEach((event) => {
            event.addEventListener('click', (e) => {
                const target = e.target.parentNode
                const id = target.getAttribute('data-id')
      
                setTimeout(() => {
                    location.reload()
                }, 1000)
                
                axios.delete('https://project-slb.onrender.com/basket/' + id)
                
                
            })
        })

        const btnUpdate = document.querySelectorAll('#btnUpdate')
        
        btnUpdate.forEach((event) => {
            event.addEventListener('click', (e) => {
                e.preventDefault()
                const target = e.target.parentNode
                const id = target.getAttribute('data-id')
      
                setTimeout(() => {
                    location.reload()
                }, 1000)
                
                axios.patch('https://project-slb.onrender.com/basket/' + id)
        
                    
            })
        })
        
    
    })


