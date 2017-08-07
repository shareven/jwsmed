var myFun = {
    ajax: function(url, fn){
        var xml =new XMLHttpRequest();
        xml.onreadystatechange= function(){
            if(xml.readyState==4&&xml.status==200){
                // fn&&fn(xml.responseText)
                document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
            }else{
                console.log("wrong!");
            }
        };
        xml.open("GET",url,true);
        xml.send();
    },
    aa:function(){
        alert(3);
    }
}
export default{
    myFun
}