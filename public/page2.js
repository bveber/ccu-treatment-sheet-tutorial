const therapeutics = `
<h1>Therapeutics</h1>
<p>In this section, information about the therapy prescribed is included. This section may include medications and treatments.</p>
    <li>For medications please include the medication name, total dose, route and frequency.</li>
    <li>Other treatments that may be recorded in this section include icing incisions, placing or checking fentanyl patches, additional weight monitoring, etc.</li>
    <li>When creating a new day's treatment sheet for a patient you take over on transfer, not all of the previous therapeutics need to be copied to the new treatment sheet. A common example of this is the sedation used in ER that was provided as a one time only treatment. Think about each therapeutic and decide if it needs to be continued.</li>
`

const weight = `
<h1>Additional Weight Monitoring</h1>
<p>Some patients benefit from more frequent than twice daily weight monitoring. If more frequent weight monitoring is needed, "weigh" is added as a line in the therapeutics section.</p>
    <li>If included, make sure to prescribe a frequency and include weight parameters.</li>
`

const waterFood = `
<h1>Food and Water Information</h1>
<p>In this section, when to offer food and water is highlighted. The specific food and water prescription orders can be referenced from the front of the CCU Treatment Sheet. Information about the patient's intake of food or water is the included in the highlighted box and noted in the Remarks section</p>
`

const infusions = `
<h1>Infusion Flow Sheet</h1>
<p>In this section, the name of the infusion is copied from the front of the CCU Treatment Sheet. This area is then used for tracking the infusions provided to the patient.</p>
    <li>Boluses (of fluids or pain medications) are indicated by writing the amount given in a set of brackets "[]".</li>
    <li>An open bracket is used to indicate when a specific infusion was started.</li>
    <li>A closed bracket is used to indicate that a specific infusion was stopped.</li>
    <li>Fluids are totaled every 4 hours. The total amount the fluid pump has delivered is recorded in the upper left of the divided box and a zero is recorded in the lower right of the divided box to indicate the fluid pump total has been reset. The set fluid rate is then recorded.</li>
`

const fluidOuts = `
<h1>Fluid Outs</h1>
<p>This section includes information about fluid losses such as vomiting/regurgitation, defecation and urination.</p>
    <li>Some clinicians prefer to highlight the urination/defecation boxes when they would like the patient taken outside. If it is important your patient be taken out more frequently, then these boxes should be highlighted. Otherwise, canine patients will be taken out for elimination as needed.</li>
    <li>If your patient has a urinary catheter, the urine box should be highlighted when you want the urine volume measured. It is then also important to circle "catheter" and provide "call clinician if" guidelines (call parameters).</li>
    <li>Urination and defecation are generally recorded on a "+" to "+++" scale. Additional details about elimination can be found in the "Remarks" section on the back of the CCU Treatment Sheet.</li>
`

{/* <a href="#" onclick="openBackPageRemarks()">back of the CCU Treatment Sheet</a> */}

const tpr = `
<h1>Patient Vitals</h1>
<p>Parameters that are routinely monitored as part of TPR and physical monitoring of the patient are included in this section of the treatment sheet. It is important to include "Call Clinician If" guidelines (call parameters) for all of these patient vitals.</p>
    <li>Make sure that call parameters are specific for your individual patients - if your patient is already febrile, do not set the call parameter the same as you would for a patient who has typically had a normal body temperature.</li>
    <li>How frequently each of the vitals are assess is indicated by highlighting the corresponding boxes along the flow sheet.</li>
    <li>Good TPR times include 8a/8a for q12 TPRs, 8a/4p/12a for q8 TPRs and 8a/2p/8p/2a for q6 TPRs.</li>
    <li>When making treatment sheets, please do not schedule any TPRs (unless critical) at 6a or 6p as this is when the CCU technicians round on the patients in the room. Non-critical TPRs scheduled for 6a/6p will likely get moved to a different treatment time.</li>
`

const pocMonitoring = `
<h1>Point of Care Monitoring</h1>
<p>Common parameters that are frequently monitored while the patient is in CCU are included here. Make sure to include "Call Clinician If" parameters for any of the patient monitoring that occurs!</p>
    <li>ECG Monitoring: Highlighting a single box means that an ECG will be connected to the patient and a single recording will be taken. When the patient is connected to telemetery (continuous ECG monitoring) this line is highlighted continuously. Each hour, the ECG rhythm is then recorded.</li>
    <li>Chest Tube/Drain: This line can be used for any type of continuous drain production including chest tubes, peritoneal drains, JP drains or NG tube gastric residual volumes. The box is highlighted when a measurement is due and the amount of fluid and air is then recorded.</li>
    <li>Cath Care: Urinary catheters or central venous catheters should be cleaned and assessed routinely. It is common for urinary catheters to be cleaned every 6-12 hours and central catheters to be unwrapped, cleaned/assessed and re-wrapped once daily.</li>
    <li>Oxygen Therapy: If a patient requires oxygen supplementation, the concentration (in L/min if connected to nasal oxygen or % if within the oxygen cage) should be ordered. The type of oxygen delivery should also be circled (Cage v. Nasal). This line can be highlighted at the time oxygen supplementation is started. Changes to the amount of oxygen supplementation can also be recorded at the time the change occurs, using an up or down arrown and then writing the new oxygen rate.</li>
    <li>Pulse Oximeter: Highlight this box when a SpO2 should be tested. You can include instructions to test both on oxygen supplementation and off oxygen supplementation if needed.</li>
    <li>Blood Pressure: Circle the type of blood pressure measurement (DOP,OSC or DIR) and highlight when a blood pressure measurement should be taken. Most stable patients do not need blood pressure measurements more than once daily. Patients with diseases that could alter the blood pressure or who are on medications that may change blood pressure should have more frequent blood pressure monitoring.</li>
`

const rotate = `
<h1>Point of Care Diagnostics and Nursing Care</h1>
<p>This section contains some point of care diagnostic testing that is frequently monitored while a patient is in CCU (glucose, PCV/TP) and a section to highlight for additional blood work that should be collected (eg. CBC, chemistry, other). Common nursing items, such as rotating patients that are recumbent and pain scoring are also included in this section.</p>
    <li>For "Blood Draws" the box is highlighted when the sample should be collected. The CCU technicians will collect the sample and bring it to the lab. The specific tests should be ordered in VetStar by the student or doctor on the case. In addition, if you know bloodwork is needed when you are performing your physical examination in the morning, samples can be collected in Med or Surg ward by the student and one of the service technicians.</li>
`

const completedTreatments1 = `
<h1>Completed Treatments</h1>
<p>A highlighted treatment that has been performed is initialed by the person who completed the treatment. This may be the CCU technicians/assistants or the student/doctor for that patient. Always remember to initial any treatments you perform. In addition, any comments about that treatment can be made in the "Remarks" section on the back of the CCU treatment sheet.</p>
`

const orderedTreatment1 = `
<h1>Ordered Treatments</h1>
<p>Treatments that have been ordered but not yet completed are highlighted.</p>
    <li>Good treatment times include 8a/8a for q12 treatments, 8a/4p/12a for q8 treatments and 8a/2p/8p/2a for q6 treatments.</li>
    <li>When making treatment sheets, please do not schedule any treatments (unless critical) at 6a or 6p as this is when the CCU technicians round on the patients in the room. Non-critical treatments scheduled for 6a/6p will likely get moved to a different treatment time.</li>
`

const waterFood1 = `
<h1>Water/Food Entry</h1>
<p>After a patient is offered food and water, brief information about their intake is included in this section.</p>
    <li>In the Water line: "Fresh" means that the water bowl was refilled. "Avail" means that clean water is available to the pet but no drinking was observed. If a patient drinks when you offer water, or you see a patient drinking while you are in CCU, plus signs are used to indicate water intake.</li>
    <li>In the Food line: "NI" means food was offered but the patient did not eat. Plus signs are used to indicate food intake. A small amount of intake (a few licks up to a few bites) is indicated with a single plus (+) while a patient that eats all the food offered would have a three plus (+++) written in this section.</li>
    <li>Additional notes about the type of food offered and the patient's intake should then be written as a remark on the back side of the treatment sheet for every time a patient is offered food or water.</li>
`

const infusions1 = `
<h1>Infusion Bolus</h1>
<p>A bolus of a fluid or medication that is provided to the patient is written in square brackets "[]". Since the infusion prescription is written on the front of the treatment sheet, only the total infusion bolus needs to be included while units (mL, mg, mcg) are not included.</p>
    <li>When reading a treatment sheet when a bolus has been given, you can refer to the front page of the CCU Treatment Sheet for that infusion to determine additional details about that bolus.</li>
`

const infusions2 = `
<h1>Start Infusion</h1>
<p>An open bracket "[" is used to indicate when a specific infusion was started.</li>
`

const infusions3 = `
<h1>Infusion Total</h1>
<p>Approximately every 4 hours, the fluids running as infusions are totaled. The total amount the fluid pump has delivered is recorded in the upper left of the divided box and a zero is recorded in the lower right of the divided box to indicate the fluid pump total has been reset. The set fluid rate is then recorded.</p>
<p>In this example "103/0 80"</p>
    <li>The pump delivered 103 mLs of plyte since the fluids were started.</li>
    <li>The fluid pump was then zeroed.</li>
    <li>The fluid pump continues to run at 80 mL/hr per the infusion prescription.</li>
`

const infusions4 = `
<h1>Infusion End</h>
<p>A closed bracket "]" is used to indicate that a specific infusion was stopped.</p>
`

const infusions5 = `
<h>Change to Infusion Type or Additives</h>
<p>Any time the type of fluid or the fluid additives (dextrose, KCl, Kphos) are changed, a new infusion should be prescribed on the front of the CCU Treatment Sheet and added as a new line in the infusions section of the flow sheet. Changing the fluid rate without changing the type or fluid or additives can be denoted on the same infusions line<p>
    <li>In this example, the previous infusion of plyte was stopped (indicated by a closed bracket) and a new infusion of plyte + 5% dextrose was started at 80 mL/hr.</li>
`

const infusions6 = `
<h1>Infusion Total</h1>
<p>Approximately every 4 hours, the fluids running as infusions are totaled. The total amount the fluid pump has delivered is recorded in the upper left of the divided box and a zero is recorded in the lower right of the divided box to indicate the fluid pump total has been reset. The set fluid rate is then recorded.</p>
<p>In this example "296/0 80"</p>
    <li>The pump delivered 296 mLs of plyte since the fluids were started. This can be compared to the expected fluid volume delivered - 80 ml/hr for 4 hours which should equal 320 mL. Less fluid is delivered than expected when a patient is disconnected to walk outside, if their fluid line or catheter is kinked or if the cateter is not flowing well.</li>
    <li>The fluid pump was then zeroed.</li>
    <li>The fluid pump continues to run at 80 mL/hr per the infusion prescription.</li>
`

const infusions7 = `
<h1>Change to Infusion Rate</h>
<p>Changing the fluid rate without changing the type or fluid or additives can be denoted on the same infusions line. An increase in rate is denoted with an up arrow and the new rate while a decrease in fluid rate is denoted by a down arrow and the new rate. This is in contrast to when the infusion type or additives are changed and a new prescription/new infusion line is needed.</p>
    <li>In this example, the fluid rate was decreased to 40 mL/hr. The fluid type (plyte) and additives (5% dextrose) remained unchanged.</li>
`

const tpr1 = `
<h1>TPR Entry</h1>
<p>The treatment sheet is highlighted when a full or partial TPR is ordered. Once the TPR has been performed by the CCU technicans, student or doctor the vitals are recorded. Additional information about the vitals, physical examination or changes made to the treatment sheet as a result of that TPR should be recorded in the "Remarks" section on the back of the CCU Treatment Sheet</p>
`

const tpr2 = `
<h1>TPR Entry</h1>
<p>The treatment sheet is highlighted when a full or partial TPR is ordered. Once the TPR has been performed by the CCU technicans, student or doctor the vitals are recorded. Additional information about the vitals, physical examination or changes made to the treatment sheet as a result of that TPR should be recorded in the "Remarks" section on the back of the CCU Treatment Sheet</p>
`

const tpr3 = `
<h1>TPR Entry</h1>
<p>The treatment sheet is highlighted when a full or partial TPR is ordered.</p>
`

const rotate1 = `
<h1>Point of Care Diagnostics</h1>
<p>In this example, a glucose and PCV/TP measurement were ordered for 2pm. The glucose measurement was below the "Call Clinician If" parameters. There should then be a comment in the "Remarks" section on the back of the CCU Treatment Sheet about this abnormality.</p>
`

boundaries = {
    therapeutics: {
        xMin: 5,
        xMax: 340,
        yMin: 5,
        yMax: 183
    },
    weight: {
        xMin: 5,
        xMax: 340,
        yMin: 198,
        yMax: 216
    },
    waterFood: {
        xMin: 5,
        xMax: 235,
        yMin: 225,
        yMax: 262
    },
    infusions: {
        xMin: 5,
        xMax: 235,
        yMin: 265,
        yMax: 395
    },
    fluidOuts: {
        xMin: 5,
        xMax: 1195,
        yMin: 410,
        yMax: 460
    },
    tpr: {
        xMin: 5,
        xMax: 340,
        yMin: 460,
        yMax: 595
    }, 
    pocMonitoring: {
        xMin: 5,
        xMax: 340,
        yMin: 595,
        yMax: 710
    },   
    rotate: {
        xMin: 5,
        xMax: 340,
        yMin: 710,
        yMax: 795
    },
    completedTreatments1: {
        xMin: 410,
        xMax: 445,
        yMin: 22,
        yMax: 55
    },
    completedTreatments2: {
        xMin: 620,
        xMax: 655,
        yMin: 37,
        yMax: 57
    },
    completedTreatments3: {
        xMin: 765,
        xMax: 800,
        yMin: 52,
        yMax: 70
    },
    orderedTreatment1: {
        xMin: 905,
        xMax: 943,
        yMin: 37,
        yMax: 57
    },
    waterFood1: {
        xMin: 550,
        xMax: 590,
        yMin: 226,
        yMax: 262
    },
    waterFood2: {
        xMin: 765,
        xMax: 800,
        yMin: 226,
        yMax: 262
    },
    waterFood3: {
        xMin: 905,
        xMax: 1195,
        yMin: 246,
        yMax: 262
    },
    infusions1: {
        xMin: 410,
        xMax: 430,
        yMin: 275,
        yMax: 295
    },
    infusions2: {
        xMin: 430,
        xMax: 445,
        yMin: 275,
        yMax: 295
    },
    infusions3: {
        xMin: 445,
        xMax: 515,
        yMin: 275,
        yMax: 295
    },
    infusions4: {
        xMin: 570,
        xMax: 600,
        yMin: 275,
        yMax: 295
    },
    infusions5: {
        xMin: 580,
        xMax: 610,
        yMin: 308,
        yMax: 328
    },
    infusions6: {
        xMin: 725,
        xMax: 798,
        yMin: 308,
        yMax: 328
    },
    infusions7: {
        xMin: 798,
        xMax: 834,
        yMin: 308,
        yMax: 328
    },
    tpr1: {
        xMin: 550,
        xMax: 590,
        yMin: 460,
        yMax: 595
    },
    tpr2: {
        xMin: 765,
        xMax: 800,
        yMin: 460,
        yMax: 595
    },
    tpr3: {
        xMin: 977,
        xMax: 1015,
        yMin: 460,
        yMax: 595
    },
    rotate1: {
        xMin: 550,
        xMax: 589,
        yMin: 725,
        yMax: 761
    },
}

infos = {
    therapeutics: therapeutics,
    weight: weight,
    waterFood: waterFood,
    infusions: infusions,
    fluidOuts: fluidOuts,
    tpr: tpr,
    pocMonitoring: pocMonitoring,
    rotate: rotate,
    completedTreatments1: completedTreatments1,
    completedTreatments2: completedTreatments1,
    completedTreatments3: completedTreatments1,
    orderedTreatment1: orderedTreatment1,
    waterFood1: waterFood1,
    waterFood2: waterFood1,
    waterFood3: waterFood1,
    infusions1: infusions1,
    infusions2: infusions1,
    infusions3: infusions1,
    infusions4: infusions1,
    infusions5: infusions1,
    infusions6: infusions1,
    infusions7: infusions1,
    tpr1: tpr1,
    tpr2: tpr1,
    tpr3: tpr1,
    rotate1: rotate1,
}