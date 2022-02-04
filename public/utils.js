function checkBoundary(x, y, box) {
    return (
    (
        (x>box.xMin&&x<box.xMax) && 
        (y>box.yMin&&y<box.yMax) 
    ) ?
    true :
    false
    )
}

function findBox(x ,y, boundaries) {
    for (box in boundaries) {
        if (checkBoundary(x, y, boundaries[box])) {
            return box
        }
    }
}

function createModal(box) {
    let modalBody = document.getElementById('modalBody')
    modalBody.setAttribute("name", box)
    modalBody.innerHTML = infos[box]
    $('#modal').modal("show")
    console.log('showing...')
    var c = document.getElementById("myCanvas");
    console.log('createModal - getElement: ', c)
    var ctx = c.getContext("2d");
    let coords = boundaries[box]
    console.log('createModal - coords: ',coords)
    console.log(coords.xMin, coords.yMin, (coords.xMax-coords.xMin-1), (coords.yMax-coords.yMin-1))
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.strokeRect(coords.xMin, coords.yMin, (coords.xMax-coords.xMin-1), (coords.yMax-coords.yMin-1));
}

function createInfo(box) {
    let infoDiv = document.createElement('div')
    infoDiv.setAttribute("id", "infoContainer")
    infoDiv.setAttribute("name", box)
    infoDiv.innerHTML = infos[box]
    console.log('createInfo: ', infoDiv)
    document.getElementById('info').appendChild(infoDiv)
    var c = document.getElementById("myCanvas");
    console.log('createInfo - getElement: ', c)
    var ctx = c.getContext("2d");
    let coords = boundaries[box]
    console.log('createInfo - coords: ',coords)
    console.log(coords.xMin, coords.yMin, (coords.xMax-coords.xMin-1), (coords.yMax-coords.yMin-1))
    ctx.strokeStyle = "#FF0000";
    ctx.strokeRect(coords.xMin, coords.yMin, (coords.xMax-coords.xMin-1), (coords.yMax-coords.yMin-1));
}

function loadDefaultModal() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams)
    if (urlParams.has('x') & urlParams.has('y')) {
        box = findBox(urlParams.get('x'), urlParams.get('y'), boundaries)
        console.log(box)
        createModal(box)
    }
    else {
        createModal("defaultInstructions")
    }
}

function loadDefault() {
    createInfo("defaultInstructions")
}

function loadLink() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams.get('x'))
    closeModal();
    clearRect();
    
    if (urlParams.has('x') & urlParams.has('y')) {
        box = findBox(urlParams.get('x'), urlParams.get('y'), boundaries)
        console.log(box)
        createModal(box)
    }
}

function clearRect() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1200, 800)  
}

function deleteInfo(reset) {       
    let elem = document.getElementById("infoContainer")
    clearRect()
    if (elem) {
        elem.remove()
    }
    if (reset) {
        createInfo('defaultInstructions')
    }
}

function getDetailsModal(){
    hoverX = window.event.pageX;
    hoverY = window.event.pageY;
    console.log('general mouseover', window.event.pageX, window.event.pageY)
    box = findBox(hoverX, hoverY, boundaries)
    existingElement = document.getElementById("infoContainer")
    console.log('existing Elements: ', existingElement)
    if (box) {
        createModal(box)
    } 
}

function getDetails(){
    hoverX = window.event.pageX;
    hoverY = window.event.pageY;
    console.log('general mouseover', window.event.pageX, window.event.pageY)
    box = findBox(hoverX, hoverY, boundaries)
    existingElement = document.getElementById("infoContainer")
    console.log('existing Elements: ', existingElement)
    if (box) {
        console.log('box exists - box name: ', box)
        if (!document.getElementById("infoContainer")) {
            createInfo(box)
        }
        else if (existingElement && existingElement.getAttribute("name")===box) {
            deleteInfo(true)
        }
        else {
            deleteInfo(false)
            createInfo(box) 
        }
    }
    else {
        deleteInfo(true)
    }
}

function logXY() {
    console.log(window.event.pageX, window.event.pageY)
}

function openBackPageRemarks() {
    console.log('openbackpage')
    location.href="./page3.html";
    box = findBox(300, 200, boundaries)
    console.log(box)
    createInfo(box)
}

document.addEventListener(
    "click",
    function(event) {
      // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
      if (
            (
                event.target.matches(".button-close-modal") ||
                !event.target.closest(".modal")
            ) & 
            ($('.modal').hasClass('show'))
      ) {
        console.log('click')
        closeModal()
      }
    },
    false
  )
  
  function closeModal() {
        console.log('clearing rect')
        clearRect();
        $('.modal').modal("hide")
        var url= document.location.href;
        window.history.pushState({}, "", url.split("?")[0]);
  }
