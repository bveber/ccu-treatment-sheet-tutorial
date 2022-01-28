// import { loadDefault,  } from './utils'

const defaultInstructions = `
<h1>CCU Treatment Sheet "Green Sheet"</h1>
<p>The website has been created as a tutorial for new users to gain experience with the CCU Green sheet.</p>
<p>After viewing all of the information contained in this tutorial, users should be able to:</p>
    <li>Create a new treatment sheet for a patient being set up in CCU after admission</li>
    <li>Create an updated treatment sheet for a patient being transferred to a new service</li>
    <li>Know where to find important information about how your patient is doing while hospitalized in CCU</li>
<p>To use this tutorial, click anywhere on the page to see the front page of the CCU Green Sheet. Click on different areas of the treatment sheet to find more information about what information is found in this section and tips for successfully setting up and reading the treatment sheet.</p>
<p>To flip pages, click the forward or back arrows in the upper right of the website.</p>
`

const weightTracking = `
<h1>Weight Tracking</h1>
<ul>
    <li>Every patient in CCU should be weighed at least twice daily with their morning and evening TPR.</li>
    <li>The AM and PM weights are recorded here</li>
    <li>For easier weight tracking, the weight at patient intake is also recorded and copied to each new treatment sheet.<li>
    <li>If more frequent weight monitoring is needed, "weigh" is added as a line in Therapeutics. Click Here to See How</li>
</ul>
`

const patientLabel = `
<h1>Patient Label</h1>
<ul>
    <li>An HLabel should be printed and placed on every treatment sheet.</li>
    <li>This sticker contains information about the patient - including the name, species, breed, date of birth and neuter status.</li>
    <li>This sticker also contains informatoin about the owner, including address and phone numbers, and primary veterinarian, including the clinic name, phone/fax numbers and email</li>
</ul>
`

const workingProblemsList = `
<h1>Working Problem List</h1>
<ul>
    <li>The working problem list section is a very important section of the treatment sheet. This section should be updated as often as needed to ensure the critical care team - the resident/faculty and nurses - have the most up to date information about what the patient is hospitalized for.</li>
    <li>A working problem list is created at admission for every patient. When new information is available, such as after diagnostics are completed, the working problem list should be updated.</li>
    <li>In addition, each morning, the working problem list should be evaluated every morning when the new treatment sheet is created and the problem list refined - lumping problems together when needed, adding new problems if they arise and resolving old problems that are no longer active.</li>
</ul>
`

const foodWater = `
<h1>Food/Water Prescription Information</h1>
<ul>
    <li>This section contains information about food and water orders for the patient.</li>
    <li>Each patient should have diet orders including a specific food type, amount and frequency. Make sure to ask owners about the patient's at home diet or food allergieson admission or on transfer if that information has yet to be collected.</li>
    <li>Each patient should also have water orders. Free choice means water is available ad lib at all hours. If water should be restricted, "free choice" should be circled no and more specific orders about how much water can be offered should then be included. Some examples of patients that might need specific water orders include patients with regurgitation or hypernatremia<li>
    <li>Information about exactly when to offer food/water and the patient's food and water intake is found in the flow section of the treatment sheet. Click Here to See</li>
</ul>
`

const infusions = `
<h1>Infusions</h1>
<ul>
    <li>This section contains information about any fluids or liquids that are running continuously into the patient.Examples of infusions include:</li>
    <ul>
        <li>Fluids (plyte, 0.45% NaCl, plasma (FP/FFP), packed red blood cells (pRBC)</li>
        <li>Pain CRI's (ketamine, fentanyl)</li>
        <li>Sedation (midazolam, butorphanol, dexmedetomidine)
        <li>Pressors (norepinephrine, dobutamine, vasopressin)</li>
        <li>Liquid nutrition via NG tubes</li>
    </ul>
    <li>The front of the treatment sheet contains the information about the infusion prescription, such as the</li>
    <ul>
        <li>Additives (KCl, KPhos, dextrose)</li>
        <li>Starting rate</li>
        <li>And comments - the comments section may include a starting bolus rate, or how the fluid rate compares to the patients maintenance rate (eg. maintenance + 5% dehydration over 24 hours)</li>
    </ul>
    <li>The name of the infusion is then transcribed on the center page in the flow section of the treatment sheet. The flow section is where infusion rates are tracked. Click Here to See</li>
</ul>
`

const catheters = `
<h1>Catheters/Tubes</h1>
<ul>
    <li>In this section, information on what type and size of catheter is placed is recorded. It is also important to record when these catheters are removed in this section. Different catheter types that should be included in this section include:</li>
    <li>Peripheral IV catheters, central catheters, sampling catheters</li>
    <li>NG tubes</li>
    <li>Chest tubes</li>
    <li>JP drains</li>
    <li>Urinary catheters</li>
</ul>
`

const dateInformation = `
<h1>Date Information</h1>
<ul>
    <li>This section contains both the date the patient entered CCU and the date of the current treatment sheet.</li>
    <li>The date the patient entered CCU is included to more easily track patients over time. This information should be transferred to all treatment sheets for a patient until they are discharged.</li>
</ul>
`

const codeStatus = `
<h1>Code Status</h1>
<ul>
    <li>Every patient hospitalized in CCU needs to have a code status so that the CCU team knows the owner's wishes should their patient arrest.</li>
    <li>Code statuses include DNR (do not resuscitate), closed (meaning intubation, closed chest CPR and drugs/defibrillation as indicated) or open (meaning intubation, open chest CPR if indicated and drugs/debfibrillation as indicated).</li>
</ul>
`

const warnings = `
<h1>Warnings</h1>
<ul>
    <li>This is an open section to include important pieces of information about the patient. Warnings may include:
    <li>Food or medication allergies</li>
    <li>Aggresion towards humans or other animals</li>
    <li>Owner belongings</li>
</ul>
`

const doctors = `
<h1>Primary Care Team</h1>
<ul>
    <li>Included in this section is the information on who is primarily taking care of each patient. THe clinician who is primarily taking care of the patient is written in the top box while the student information is written in the bottom box.</li>
    <li>Due to the hospital's use of the Vocera Text Paging system, you do not need to include contact information unless there is an anticipated issue with the Vocera system.</li>
</ul>
`

const catheterFunctional = `
<h1>If catheter is not functional</h1>
<ul>
    <li>This section should be filled out so that the CCU technicians know how to proceed if a patient's catheter is no longer functional. Please try to discuss this ahead of time - if your patient is no longer on IV medications and is likely to go home the same day, they may not need the IV catheter replaced. If the patient is staying additional nights in CCU and has a code status of open or closed, it is recommended they have a patent IV catheter even if they are not receiving IV medications.</li>
</ul>
`

const procedures = `
<h1>Procedures Performed</h1>
<ul>
    <li> This section should be started on the day of admission and then updated at least daily with the major diagnostics and treatments provided to the patient.</li>
    <li> Examples of diagnostics include point of care tests performed in ER (ABL, PCV/TP, FAST scan, ECG, BP), blood work (CBC, chemistry, T4, baseline cortisol, GI panel, infectious disease testing, etc.), urine testing (UA, urine culture, blasto antigen, lepto) or imaging (x-rays, ultrasound, CT).</li>
    <li>Examples of treatments included in this section include procedures such as endoscopy or surgeries.</li>
</ul>
`

const specialInstructions = `
<h1>Procedures Performed</h1>
<ul>
    <li>This section is where more detailed instructions can be included for anything involving patient care or treatments.</li>
    <li>Common items to include in this area include: seizure orders, E-tube feeding information, information about client belongings or orders for treatments if a specific parameter changes.</li>
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
