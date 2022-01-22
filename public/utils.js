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
    // let modalBody = document.getElementById('modalBody')
    // modalBody.setAttribute("name", box)
    // modalBody.innerHTML = infos[box]
    // document.getElementById('modal').appendChild(modalDiv)
    // let modalDiv = document.getElementById('modal')
    // modalDiv.modal("show")
    $('#modal').modal("show")
    console.log('showing...')
    var c = document.getElementById("myCanvas");
    console.log('createModal - getElement: ', c)
    var ctx = c.getContext("2d");
    // ctx.beginPath();
    let coords = boundaries[box]
    console.log('createModal - coords: ',coords)
    console.log(coords.xMin, coords.yMin, (coords.xMax-coords.xMin-1), (coords.yMax-coords.yMin-1))
    // ctx.strokeRect(10, 10, 10, 10)
    ctx.strokeStyle = "#FF0000";
    ctx.strokeRect(coords.xMin, coords.yMin, (coords.xMax-coords.xMin-1), (coords.yMax-coords.yMin-1));
    // ctx.stroke();
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
    // ctx.beginPath();
    let coords = boundaries[box]
    console.log('createInfo - coords: ',coords)
    console.log(coords.xMin, coords.yMin, (coords.xMax-coords.xMin-1), (coords.yMax-coords.yMin-1))
    // ctx.strokeRect(10, 10, 10, 10)
    ctx.strokeStyle = "#FF0000";
    ctx.strokeRect(coords.xMin, coords.yMin, (coords.xMax-coords.xMin-1), (coords.yMax-coords.yMin-1));
    // ctx.stroke();
}

function loadDefaultModal() {
    // console.log('loading')
    // console.log(img)
    // draw()
    createModal("defaultInstructions")
}

function loadDefault() {
    // console.log('loading')
    // console.log(img)
    // draw()
    createInfo("defaultInstructions")
}

function clearRect() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1200, 800)  
}

function deleteInfo(reset) {       
    let elem = document.getElementById("infoContainer")
    clearRect()
    // draw()
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

// $('#modal').on('hide.bs.modal', function (e) {
//     console.log("hide")
//     clearRect();
// })

document.addEventListener(
    "click",
    function(event) {
      // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
      if (
        event.target.matches(".button-close-modal") ||
        !event.target.closest(".modal")
      ) {
        closeModal()
      }
    },
    false
  )
  
  function closeModal() {
    // document.querySelector(".modal").style.display = "none"
    if ($('#modal').hasClass('show')) {
        console.log('clearing rect')
        clearRect();
    }
    $('#modal').modal("hide")
  }