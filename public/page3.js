const remarks1 = `
<h1>Remarks</h1>
<p>The back page of the CCU Treatment Sheet is the Remarks section. This is an area where additional details for any patient interaction can be found. This is used frequently by the CCU technicians and often contains important details about how a patient did overnight or changes that were made about the patient throughout the day or night.</p> 
<p>Any time you interact with your patient and need to record specific details, you should write a remark in this section. This includes:</p>
    <li>When you perform the 8a TPR/treatments on a patient that you took on transfer or have been caring for on any service</li>
    <li>When a change to the treatment sheet is made based on patient assessment.</li>
    <li>When you offer food or water.</li>
    <li>When you take a patient out to elimiate.</li>
`

const names = `
<h1>Names</h1>
<p>As the CCU Treatment Sheet is a legal medical document, any person who marks on the sheet needs to record their initials, printed name and shift.</p>
`

boundaries = {
    remarks1 :{
        xMin: 10,
        xMax: 595,
        yMin: 20,
        yMax: 400
    },
    names: {
        xMin: 10,
        xMax: 595,
        yMin: 700,
        yMax: 775  
    }
}

infos = {
    remarks1: remarks1,
    names: names
}