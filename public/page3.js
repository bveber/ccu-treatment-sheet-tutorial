const defaultInstructions = `
<h1>Back Page Instructional</h1>
<p></p>
`

const remarks1 = `
<h1>Remarks</h1>
<p>This is some information</p>
`

const names = `
<h1>Names</h1>
<p>This is some information</p>
`

boundaries = {
    defaultInstructions :{
        xMin: 5,
        xMax: 595,
        yMin: 3,
        yMax: 20 
    },
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
    defaultInstructions: defaultInstructions,
    remarks1: remarks1,
    names: names
}