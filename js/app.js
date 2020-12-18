///////////////////////////////////
// PULL AND RENDER DATA FROM GOOGLE SHEET
///////////////////////////

$.ajax("https://spreadsheets.google.com/feeds/list/1tSERjF-TPALO8AjbdHQqM29mWfqyZpJyYBT--PKZGkA/1/public/full?alt=json")
.then((data) => {
    // Checking My Data
    console.log(data)

    //put our projects in a variable
    const rawProjects = data.feed.entry

    //log our projects
    console.log(rawProjects)

    //prettify our projects array
    const projects = rawProjects.map((project) => {
        return {
            name: project.gsx$name.$t,
            img: project.gsx$img.$t,
            description: project.gsx$description.$t,
            live: project.gsx$live.$t,
            github: project.gsx$github.$t
        }
    })

    console.log(projects)

    //////////////////////////////////
    //USE JQUERY TO RENDER PROJECTS TO PAGE
    //////////////////////////////////



    //////////////////////////////////

})



/////////////////////////////
// Pull Data from Blog from Headless CMS
/////////////////////////////