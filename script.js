$(document).ready(function() {
    $("#hide").click(function() {
        $("li").hide()
    });

    $("#show").click(function() {
        $("li").show()
    })
})


// select by tag name
$(document).ready(function() {
    $("p").append("Hello World")
})

// Select By Id

$(document).ready(function() {
    $("#first").append("This is a paragraph with id")
})

// select by class name

$(document).ready(function() {
    $('.second').append("THis is a paragraph with class")
})



$(document).ready(function() {
    $("#click").click(function(eventObj){
        alert("Button Clicked By The User")
    })
})


$(document).ready(function() {
    $("#click1").click(function() {
        $(this).text("CLiked")
    })
})




$(document).ready(function() {
    $("#third").click(function() {
        $("p").removeClass("italicText")
        $("p").addClass("boldText")
    })
})



$(document).ready(function() {
    $("p").hover(function() {
        $("p").css("color", "red")
    },
    function() {
        $("p").css('color', 'blue')
    })
})


$(document).ready(function() {
    $("#changeText").click(function() {
        $("span").text("New Text")
    })

    $("#changeHTML").click(function() {
        $("p").html("<span class='boldText'>New Html span</span>")
    })

    $("#changeValue").click(function() {
        $("input").val("New input value")
    })
})
// creating a new element

// $(document).ready(function() {
//     var newDiv = $("<div>") // create an empty div
//     var newListItem = $("<li>Hello adil</li>") // create list element with content
// })