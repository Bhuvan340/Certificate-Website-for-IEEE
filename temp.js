function DispCertificate2(){
    var canvas = document.getElementById("myCanvas2");
    let image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
    var pic = document.getElementById("CERIMG2");
    pic.src = image;
    // var link = document.getElementById("Download");
    // link.download = "my-image.png";
    // link.href = image;
  }
  
  function FindData2(){
      var data = undefined;

      let key = document.getElementById("email-input2").value;
      key = key.toLowerCase();
      var c = document.getElementById("myCanvas2");
      var ctx = c.getContext("2d");
      var img = document.getElementById("certificate2");
      ctx.drawImage(img, 0, 0);

      get(child(ref(db), "Webinar2/"+key.replaceAll(".","dot")))
      .then((snapshot)=>{
          if(snapshot.exists()){
              data = snapshot.val().Name;
              // var data = FindData(key);
              // alert(data);
              // var myFont = new FontFace('Great Vibes', "url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap')");
              ctx.font = "130px Great Vibes";
              ctx.fillStyle = "black";
              ctx.textAlign = "center";
              ctx.fillText(data,874,730);

              if(data != undefined){
                DispCertificate2();
                document.getElementById("Preview122").style.display = "block";
                document.getElementById("Preview122").scrollIntoView();
                // alert("Done");
                // DWN2();
              }
          }
          else{
              alert("Ops Looks Like You Didnt Attend Devfest 2022 Please Be sure for the next event");
          }
      })
      .catch((error)=>{
          alert(error);
      })
      return name;
  }

  function FindData12(){
      var data = undefined;

      let key = document.getElementById("email-input2").value;
      var c = document.getElementById("myCanvas2");
      var ctx = c.getContext("2d");
      var img = document.getElementById("certificate2");
      ctx.drawImage(img, 0, 0);

      get(child(ref(db), "Webinar1/"+key.replaceAll(".","dot")))
      .then((snapshot)=>{
          if(snapshot.exists()){
              data = snapshot.val().Name;
              // var data = FindData(key);
              // alert(data);
              // var myFont = new FontFace('Great Vibes', "url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap')");
              ctx.font = "130px Great Vibes";
              ctx.fillStyle = "black";
              ctx.textAlign = "center";
              ctx.fillText(data,874,730);

              if(data != undefined){
                DispCertificate2();
                FindData2();
                // document.getElementById("Preview12").style.display = "block";
                // docum  ent.getElementById("Preview12").scrollIntoView();
                // alert("Done");
                // DWN2();
              }
          }
          else{
              alert("Ops Looks Like The Given Email Is Invalid, Try Writing The Email In Lowercas");
          }
      })
      .catch((error)=>{
          alert(error);
      })
      return name;
  }

  function DWN2(){
    var canvas = document.getElementById("myCanvas2");
    let image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
    var link = document.createElement('a');
    link.download = "certificate.png";
    link.href = image;
    link.click();
  }
