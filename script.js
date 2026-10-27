// Storing localstorage data in data variable if data present in localstorage  or create the empty array
let data = JSON.parse(localStorage.getItem("data")) || []

// Displaying the task count
$.fn.LoadingCount = function () {
    let count = data.length;
    $(this).text(count);
}

// event trigger after the submitting the form
$("#taskForm").on("submit", function (e) {
    e.preventDefault()
    let inputVal=$("#taskInput").val()
    if(inputVal.trim() === ""){
        $("#message").text("input cannot be empty!")
    }else{
        $("#message").text("")
        let title=[]
          $.each(data,function(index,obj){
            title.push(obj.title)
          })
          let count=title.filter(item=>item.toLowerCase() === inputVal.toLowerCase()).length
          if(count>=1){
              $("#message").text("task is already present in task list !")
          }
         else{
            $("#message").text("")
        data.push({
            "title":inputVal,
            "status":false
        })
        localStorage.setItem("data",JSON.stringify(data))
        $("#taskForm").DisplayData()
        $("#taskInput").val("")
         }
    }
})

// deleting the individual task
$("#taskList").on("click", ".delete", function () {
    let textValue = $(this).closest("li").find(".title").text()
    let index = data.findIndex(function(obj){
        return obj.title === textValue;
    })
    if (index === -1) {
        return
    } else {
        data.splice(index, 1)
        localStorage.setItem("data", JSON.stringify(data))
        $(this).closest("li").remove();
        $("#taskCount").LoadingCount()
    }
})

// Marking the complete the task
$("#taskList").on("click", ".complete", function () {
    let textValue=$(this).closest("li").find(".title").text()
    let DataIndex=data.findIndex(function(obj){
        return obj.title === textValue;
    })
    if(DataIndex === -1){
        return;
    }else{
        $(this).closest("li").find(".title").toggleClass("completed",!data[DataIndex].status);
    data[DataIndex].status=!data[DataIndex].status;
    localStorage.setItem("data",JSON.stringify(data)) 
    }   
})

// Clearing the all task for form 
$("#clearBtn").on("click", function () {
    $("#taskList").empty()
    data = []
    localStorage.setItem("data", JSON.stringify(data))
    $("#taskCount").LoadingCount()
})

// DIsplaying the data present in localstorage
$.fn.DisplayData = function () {
    $("#taskList").html("")
    $("#taskInput").val("")
    $("#taskCount").LoadingCount()
    $.each(data, function (index, obj) {
        let dataStatus=obj.status
        if(dataStatus === false){
        $("#taskList").append(
            $("<li>").append(
                $("<span>").html('<i class="ri-circle-line complete"></i>'),
                $("<span>").text(obj.title).attr("class", "title"),
                $("<span>").html('<i class="ri-delete-bin-6-line  delete"></i>')
            )
        )
    }else{
         $("#taskList").append(
            $("<li>").append(
                $("<span>").html('<i class="ri-circle-line complete"></i>'),
                $("<span>").text(obj.title).attr("class", "title completed"),
                $("<span>").html('<i class="ri-delete-bin-6-line  delete"></i>')
            )
        )
    }
    
    })
}


// displaying the the task when windows get reload
$(function(){
    $("#taskForm").DisplayData()
})





