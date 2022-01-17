// import { loadDefault,  } from './utils'

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
        xMin: 10,
        xMax: 600,
        yMin: 30,
        yMax: 70 
    },
    dateInformation: {
        xMin: 22,
        xMax: 208,
        yMin: 70,
        yMax: 95
    },
    codeStatus: {
        xMin: 208,
        xMax: 335,
        yMin: 70,
        yMax: 130
    },
    warnings: {
        xMin: 208,
        xMax: 335,
        yMin: 130,
        yMax: 190
    },
    entryWeight: {
        xMin: 22,
        xMax: 208,
        yMin: 95,
        yMax: 120
    },
    doctors: {
        xMin: 22,
        xMax: 208,
        yMin: 120,
        yMax: 185
    },
    patientLabel: {
        xMin: 335,
        xMax: 575,
        yMin: 70,
        yMax: 225
    },
    workingProblemsList: {
        xMin: 24,
        xMax: 340,
        yMin: 185,
        yMax: 280
    },
    catheterFunctional: {
        xMin: 425,
        xMax: 575,
        yMin: 225,
        yMax: 285
    },
    procedures: {
        xMin: 25,
        xMax: 300,
        yMin: 280,
        yMax: 350
    },
    foodWater: {
        xMin: 300,
        xMax: 575,
        yMin: 280,
        yMax: 352
    },
    infusions: {
        xMin: 25,
        xMax: 575,
        yMin: 350,
        yMax: 515
    },
    catheters: {
        xMin: 26,
        xMax: 575,
        yMin: 515,
        yMax: 635
    },
    specialInstructions: {
        xMin: 26,
        xMax: 575,
        yMin: 635,
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
