$("#gradeForm").submit(function (event) {

    assignments = $("#inputAssignments").val()
    quizzes = $("#inputQuizzes").val()
    intex = $("#inputIntex").val()
    ec = $("#inputEC").val()


    assignments = assignments * 0.4367
    quizzes = quizzes * 0.131
    intex = intex * 0.4323
    ec = ec * 0.022


    grade = assignments + quizzes + intex + ec
    gradeS = ""

    if (grade < 60) {
        gradeS = "E"
    } else if (grade < 63) {
        gradeS = "D-"
    } else if (grade < 67) {
        gradeS = "D"
    } else if (grade < 70) {
        gradeS = "D+"
    } else if (grade < 73) {
        gradeS = "C-"
    } else if (grade < 77) {
        gradeS = "C"
    } else if (grade < 80) {
        gradeS = "C+"
    } else if (grade < 83) {
        gradeS = "B-"
    } else if (grade < 87) {
        gradeS = "B"
    } else if (grade < 90) {
        gradeS = "B+"
    } else if (grade < 93) {
        gradeS = "A-"
    } else {
        gradeS = "A"
    }
    

    

    gradeMsg = "Your Grade: " + gradeS +" ("+ grade.toFixed(2) + "%)"

    $("#grade").html(gradeMsg)
   event.preventDefault()
}
    )