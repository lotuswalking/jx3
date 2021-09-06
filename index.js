
var playList=[];
var videos = [];
$(document).ready(function(){
    var vid = document.getElementById("guofengVideo");
    videos = document.getElementsByClassName("btn");
    vid.play();
    // console.log(videos);
    Array.from(videos).forEach(element => {
        // console.log(element.id);
        playList.push("./video/"+element.id+".mp4");
    });
 
    $(".btn").hover(function(event){
        var target = event.target || event.srcElement;
        var id = target.id
        playId=vid.attributes.playId.value;
        // console.log(id)
        vid.pause();
        vid.src ="./video/"+id+".mp4";
        vid.setAttribute("playId",target.attributes.index.value);
        videos[playId].focus();
        vid.load();
        // vid.play();
        // $("#guofengVideo").load("/video/"+id+".mp4");
        // $("#guofengVideo").play();
        // console.log(target.id);
    });
    vid.addEventListener("ended",(e)=>{
        playId=e.target.attributes.playId.value;
        // console.log(playList.length)
        if(playId===(playList.length-1).toString())
        {
            playId=0
        }else{
            playId++;
        }
        
        vid.src=playList[playId];
        vid.setAttribute("playId",playId);
        // console.log(videos[playId]);
        // videos[playId].focus();
        
        // e.target.attributes.playId = playId;
        // vid.playId=playId;
        // vid.load();
    });
    vid.addEventListener("load",(e)=>{
        // vid.muted=false;
        vid.play();
    });
    vid.addEventListener("play",(e)=>{
         playId=e.target.attributes.playId.value;
        //  videos[playId].style.background-position = -368px;
        className = videos[playId].attributes.class.value;
        // console.log(className);
        Array.from(videos).forEach(el => {
            if(el.attributes.class.value.includes("active"))
            {
                TempClassName=el.attributes.class.value.split(" active")[0];
                // console.log(TempClassName);
                el.setAttribute("class",TempClassName);
                // el.className -=TempClassName.split(":")[0];
            }
            // console.log(el.attributes.class.value);
            // el.className-=":hover";
        });
        videos[playId].setAttribute("class",className+" active");

    });


    });