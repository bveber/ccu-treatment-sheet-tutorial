const defaultInstructions = `
<h1>Front Page Instructional</h1>
<p>Click different sections to see more information</p>
`

const weightTracking = `
<h1>Weight Tracking</h1>
<ul>
    <li>Entry Weight</li>
    <li>Every patient in CCU weighed at least twice daily</li>
    <li>AM/PM weight recorded here</li>
    <li>Additional weight monitoring added in Therapeutics</li>
</ul>
`

const patientLabel = `
<h1>Patient Label</h1>
<ul>
    <li>Patient last name, first name</li>
    <li>Medical record number</li>
    <li>Signalment</li>
    <li>Client information</li>
    <li>rDVM information</li>
</ul>
`

const workingProblemsList = `
<h1>Working Problem List</h1>
<ul>
    <li><strong>UPDATE daily</strong></li>
    <li>Remove resolved problems</li>
    <li>Add new problems</li>
    <li>Lump problems when able</li>
</ul>
`

const foodWater = `
<h1>Food/Water</h1>
<ul>
    <li>Diet prescription information</li>
    <li>Information about when to offer/patient intake is found in center page flow sheet</li>
</ul>
`

const infusions = `
<h1>Infusions - Front Page</h1>
<ul>
    <li>Any continuous rate infusions</li>
    <ul>
        <li>Fluids</li>
        <li>Pain CRI’s (eg. ketamine, fentanyl)</li>
        <li>Pressors</li>
    </ul>
    <li>Infusion prescription information</li>
    <ul>
        <li>Additives</li>
        <li>Rate</li>
        <li>Comments: boluses, fluid plan</li>
    </ul>
    <li>Transcribed on center page in flow sheet section</li>

    <li>Diet prescription information</li>
    <li>Information about when to offer/patient intake is found in center page flow sheet</li>
</ul>
`

const catheters = `
<h1>Catheters/Tubes</h1>
<ul>
    <li>Information on when/what placed + removed</li>
    <li>IVC, central lines</li>
    <li>NG tubes</li>
    <li>Chest tubes</li>
    <li>JP drains</li>
    <li>Urinary catheters</li>
</ul>
`

const dateInformation = `
<h1>Date Information</h1>
<ul>
</ul>
`

const codeStatus = `
<h1>Code Status</h1>
<ul>
</ul>
`

const warnings = `
<h1>Warnings</h1>
<ul>
</ul>
`

const doctors = `
<h1>Doctors</h1>
<ul>
</ul>
`

const catheterFunctional = `
<h1>Catheter is not Functional</h1>
<ul>
</ul>
`

const procedures = `
<h1>Procedures Performed</h1>
<ul>
</ul>
`

const specialInstructions = `
<h1>Procedures Performed</h1>
<ul>
</ul>
`

boundaries = {
    defaultInstructions :{
        xMin: 5,
        xMax: 600,
        yMin: 0,
        yMax: 40 
    },
    dateInformation: {
        xMin: 34,
        xMax: 220,
        yMin: 45,
        yMax: 67
    },
    codeStatus: {
        xMin: 220,
        xMax: 355,
        yMin: 45,
        yMax: 105
    },
    warnings: {
        xMin: 220,
        xMax: 355,
        yMin: 105,
        yMax: 165
    },
    entryWeight: {
        xMin: 34,
        xMax: 220,
        yMin: 67,
        yMax: 95
    },
    doctors: {
        xMin: 34,
        xMax: 220,
        yMin: 95,
        yMax: 165
    },
    patientLabel: {
        xMin: 355,
        xMax: 605,
        yMin: 40,
        yMax: 205
    },
    workingProblemsList: {
        xMin: 34,
        xMax: 352,
        yMin: 163,
        yMax: 260
    },
    catheterFunctional: {
        xMin: 445,
        xMax: 600,
        yMin: 205,
        yMax: 260
    },
    procedures: {
        xMin: 34,
        xMax: 313,
        yMin: 259,
        yMax: 330
    },
    foodWater: {
        xMin: 313,
        xMax: 600,
        yMin: 259,
        yMax: 330
    },
    infusions: {
        xMin: 34,
        xMax: 600,
        yMin: 330,
        yMax: 500
    },
    catheters: {
        xMin: 34,
        xMax: 600,
        yMin: 500,
        yMax: 625
    },
    specialInstructions: {
        xMin: 34,
        xMax: 600,
        yMin: 625,
        yMax: 800
    }
}

infos = {
    defaultInstructions: defaultInstructions,
    dateInformation: dateInformation,
    entryWeight: weightTracking,
    codeStatus: codeStatus,
    warnings: warnings,
    doctors: doctors,
    patientLabel: patientLabel,
    workingProblemsList: workingProblemsList,
    catheterFunctional: catheterFunctional,
    procedures: procedures,
    foodWater: foodWater,
    infusions: infusions,
    catheters: catheters,
    specialInstructions: specialInstructions
}

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
    ctx.beginPath();
    let coords = boundaries[box]
    console.log('createInfo - coords: ',coords)
    ctx.rect(coords.xMin, coords.yMin, (coords.xMax-coords.xMin-1), (coords.yMax-coords.yMin-1));
    ctx.stroke();
}

function loadDefault() {
    createInfo("defaultInstructions")
}

function deleteInfo(reset) {       
    let elem = document.getElementById("infoContainer")
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 600, 800)
    if (elem) {
        elem.remove()
    }
    if (reset) {
        createInfo('defaultInstructions')
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
        // else if (existingElements.length > 0){
        //     console.log('existingElements.length > 0: ', existingElements[0].getAttribute("name"))
        //     if (existingElements[0].getAttribute("name") !== box) {
        //         console.log('element of different name exists: ', existingElements[0].getAttribute("name"), box)
        //         deleteInfo()
        //         createInfo(box)
        //     }
        // }
    }
    else {
        deleteInfo(true)
    }
}

function logXY() {
    console.log(window.event.pageX, window.event.pageY)
}

