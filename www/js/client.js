// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */

// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */

var main= function(){
    "use strict";

//Parents signin
$("#psignin-btn").on("click", function(){
    //event.preventDefault();
    var username, password;
    if($("#uname").val() === "" && $("#pword").val() === "" ){
        window.alert("please enter all fields");
    }

    else {
        username= $("#uname").val();
        password= $("#pword").val();
    }
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/parents?username"+username,
        //data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        success: function(){
            $.mobile.changePage("#page-parents");
            console.log("success");

        },
        error: function(){
            console.log("failure");
        }
    });

});
//Caregiver signin
$("#csignin-btn").on("click", function(){
    //event.preventDefault();
    var username, password;
    if($("#uname").val() === "" && $("#pword").val() === "" ){
        window.alert("please enter all fields");
    }

    else {
        username= $("#uname").val();
        password= $("#pword").val();
    }

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/parents?username"+username,
        //data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        success: function(){
            $.mobile.changePage("#page-caregivers");
            console.log("success");
        },
        error: function(){
            console.log("failure");
        }
    });

});
//Adding food information to db
$("#btn-food").on("click", function(){
    var date, time, food;
    console.log("food btn");

    if($("#cfood-popup #date").val() === ""){
        window.alert("please enter date");
    }else if($("#cfood-popup #time").val() === ""){
        window.alert("please enter time");
    }else if($("#cfood-popup #food").val() === ""){
        window.alert("please enter food");

    }else{
        date= $("#cfood-popup #date").val();
        time= $("#cfood-popup #time").val();
        food= $("#cfood-popup #food").val();
    }
    var data={
        "child_id":1,
        "date": date,
        "time": time,
        "food": food
    };
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/food",
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        success: function(){
            $.mobile.changePage("#page-caregivers");
            console.log("success");
            window.alert("food added succefuly");
        },
        error: function(){
            console.log("failure");
        }
    });

});
//Adding bathroom information to the db
$("#btn-bathroom").on("click", function(){
    var date, time, type;
    console.log("bathroom btn");

    if($("#cbathroom-popup #date").val() === ""){
        window.alert("please enter date");
    }else if($("#cbathroom-popup #time").val() === ""){
        window.alert("please enter time");
    }else if($("#btype :radio:checked").val() === ""){
        window.alert("please select a type");

    }else{
        date= $("#cbathroom-popup #date").val();
        time= $("#cbathroom-popup #time").val();
        type= $("#btype :radio:checked").val();
    }
    var data={
        "child_id":1,
        "date": date,
        "time": time,
        "type": type
    };
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/bathroom",
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        success: function(){
            $.mobile.changePage("#page-caregivers");
            console.log("success");
            window.alert("bathroom info added succefuly");
        },
        error: function(){
            console.log("failure");
        }
    });

});
//Adding nap information to the db
$("#btn-nap").on("click", function(){
    var date, from_time, to_time;
    console.log("nap btn");

    if($("#cnaps-popup #date").val() === ""){
        window.alert("please enter date");
    }else if($("#cnaps-popup #ftime").val() === ""){
        window.alert("please enter time");
    }else if($("#cnaps-popup #ttime").val() === ""){
        window.alert("please select a time");

    }else{
        date= $("#cnaps-popup #date").val();
        from_time= $("#cnaps-popup #ftime").val();
        to_time= $("#cnaps-popup #ttime").val();
    }
    var data={
        "child_id":1,
        "date": date,
        "from": from_time,
        "to": to_time
    };
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/nap",
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        success: function(){
            $.mobile.changePage("#page-caregivers");
            console.log("success");
            window.alert("nap info added succefuly");
        },
        error: function(){
            console.log("failure");
        }
    });

});
//Adding activity information to the db
$("#btn-activity").on("click", function(){
    var date, time, activity;
    console.log("activity btn");

    if($("#cactivities-popup #date").val() === ""){
        window.alert("please enter date");
    }else if($("#cactivities-popup #time").val() === ""){
        window.alert("please enter time");
    }else if($("#cactivities-popup #activity").val() === ""){
        window.alert("please enter an activity");

    }else{
        date= $("#cactivities-popup #date").val();
        time= $("#cactivities-popup #time").val();
        activity= $("#cactivities-popup #activity").val();
    }
    var data={
        "child_id":1,
        "date": date,
        "time": time,
        "activity": activity
    };
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/activity",
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        success: function(){
            $.mobile.changePage("#page-caregivers");
            console.log("success");
            window.alert("activity info added succefuly");
        },
        error: function(){
            console.log("failure");
        }
    });

});
//Adding note information to the db
$("#btn-note").on("click", function(){
    var date, time, note;
    console.log("note btn");

    if($("#cnotes-popup #date").val() === ""){
        window.alert("please enter date");
    }else if($("#cnotes-popup #time").val() === ""){
        window.alert("please enter time");
    }else if($("#cnotes-popup #note").val() === ""){
        window.alert("please enter a note");

    }else{
        date= $("#cnotes-popup #date").val();
        time= $("#cnotes-popup #time").val();
        note= $("#cnotes-popup #note").val();
    }
    var data={
        "child_id":1,
        "date": date,
        "time": time,
        "note": note
    };
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/note",
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        success: function(){
            $.mobile.changePage("#page-caregivers");
            console.log("success");
            window.alert("note info added succefuly");
        },
        error: function(){
            console.log("failure");
        }
    });

});
//Getting food information
$("#page-parents #food").on("click", function(){
    console.log("food");
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/food",
        //data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        success: function(food){
            //$.mobile.changePage("#page-parents");
            console.log("success");
            food.forEach(function(data){
                if (data.child_id === 1){
                    var $output= $("<p>").text("On: "+ data.date +" at: " +data.time+ " Adam ate: "+data.food);
                    $("#page-parents #pfood").append($output);
                }
            });
        },
        error: function(){
            console.log("failure");
        }
    });

});
//Getting bathroom information
$("#page-parents #bathroom").on("click", function(){
    console.log("bathroom");
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/bathroom",
        dataType: "json",
        contentType: "application/json",
        success: function(bathroom){
            console.log("success");
            bathroom.forEach(function(data){
                if (data.child_id === 1){
                    var $output= $("<p>").text("On: "+ data.date +" at: " +data.time+ " Adam had a/an: "+data.type +" diaper");
                    $("#page-parents #pbathroom").append($output);
                }
            });
        },
        error: function(){
            console.log("failure");
        }
    });

});
//Getting nap information
$("#page-parents #nap").on("click", function(){
    console.log("nap");
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/nap",
        dataType: "json",
        contentType: "application/json",
        success: function(nap){
            console.log("success");
            nap.forEach(function(data){
                if (data.child_id === 1){
                    var $output= $("<p>").text("On: "+ data.date +" Adam slept from: " +data.from+ " to: "+data.to);
                    $("#page-parents #pnap").append($output);
                }


            });
        },
        error: function(){
            console.log("failure");
        }
    });

});
//Getting activity information
$("#page-parents #activity").on("click", function(){
    console.log("activity");
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/activity",
        dataType: "json",
        contentType: "application/json",
        success: function(activity){
            console.log("success");
            activity.forEach(function(data){
                if (data.child_id === 1){
                    var $output= $("<p>").text("On: "+ data.date +" at: " +data.time+ " Adam : "+data.activity);
                    $("#page-parents #pactivity").append($output);
                }


            });
        },
        error: function(){
            console.log("failure");
        }
    });

});
//Getting note information
$("#page-parents #note").on("click", function(){
    console.log("note");
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/note",
        dataType: "json",
        contentType: "application/json",
        success: function(note){
            console.log("success");
            note.forEach(function(data){
                if (data.child_id === 1){
                    var $output= $("<p>").text("On: "+ data.date +" at: " +data.time+ "  "+data.note);
                    $("#page-parents #pnote").append($output);
                }


            });
        },
        error: function(){
            console.log("failure");
        }
    });

});
};
$(document).ready(main);
