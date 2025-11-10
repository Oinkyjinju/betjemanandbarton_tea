// cursor hover

const listingItem = document.querySelectorAll('.listing_item')
const cursor = document.createElement('div')
cursor.className = 'cursor_hover';
document.body.appendChild(cursor);

listingItem.forEach(function(item) {
    // show
    item.addEventListener('mouseenter', function(){
        const image = this.getAttribute('data-image');
        cursor.innerHTML = '<img src="' + image + '"> Discover <i class="fa-solid fa-arrow-right"></i>';
        cursor.classList.add('show');
    });
    // out
    item.addEventListener('mouseleave', function(){
        cursor.classList.remove('show');
    });
    // move with me
    item.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 15 + 'px';
        cursor.style.top = e.clientY + 15 + 'px';
    })
    //to link
    item.addEventListener('click', function(){
        const href = this.getAttribute('data-href');
        if (href){
            window.location.href = href;
        }
    })
})


//hover product 
const autumSelection = document.querySelectorAll('#autum_selection_img a');

autumSelection.forEach(function(item){
        const autumInfo = document.createElement('div');
        autumInfo.className = 'autum_info';
        item.appendChild(autumInfo);

        item.addEventListener('mouseenter', function(){
            const name = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');

            if (name && price) {
                autumInfo.innerHTML = '<div class="info_name">' + name + '</div><div class="info_price">' + price + '</div>';
                autumInfo.classList.add('show');
            }
        });
        item.addEventListener('mouseleave', function(){
            autumInfo.classList.remove('show');
        });
    });



