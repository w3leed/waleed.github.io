window.onload=function(){
    let params = new URLSearchParams(location.search);
    let img=params.get('img');
    let vid=params.get('vid');
    let question=params.get('question');
    let answer=params.get('answer');
    let questionElement=document.getElementById('question')
    let answerElement=document.getElementById('answer')
    let imageElement=document.getElementById('image')
    let videoElement = document.getElementById("video");
    questionElement.innerHTML=question
    answerElement.innerHTML=answer
    imageElement.setAttribute('src',img)
    videoElement.setAttribute("src", vid);
    console.log();
}