const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


// select tab content item 
function selectItem(e) {
    // remove all selected classes from items
    removeBorder();
    removeShow();
    // add the selected class to clicked element
    this.classList.add('tab-border');
    
    // grab conent item form dom
    let contentItem = document.getElementById(`${this.id}-content`);

    // add show class
    contentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    // remove the show class
    tabContentItems.forEach(item => item.classList.remove('show'));
}




// Listen for tab click 
tabItems.forEach(item => item.addEventListener('click',selectItem));
