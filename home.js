


var canvas = new fabric.Canvas('c',{containerClass: 'c'});
//document.getElementById('c').style.margin="80px";
//document.getElementById('c').style.border="2px solid whitesmoke";

canvas.setHeight(500);
canvas.setWidth(800);
canvas.setZoom(1.2);

   document.getElementById("inp").addEventListener("change", function(e) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.onload = function(f) {
         var data = f.target.result;
         fabric.Image.fromURL(data, function(img) {
            // add background image
            
            canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
               scaleX: canvas.width / img.width,
               scaleY: canvas.height / img.height,
               left:20,
               right:20,
               
              
               
            });
         });
  
         canvas.on('mouse:wheel', function(opt) {
           var delta = opt.e.deltaY;
           var zoom = canvas.getZoom();
           zoom *= 0.999 ** delta;
           if (zoom > 20) zoom = 20;
           if (zoom <=1.2) zoom = 1.2;
           canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
           
           opt.e.preventDefault();
           opt.e.stopPropagation();
      
        });
      
      
      };
      reader.readAsDataURL(file);
   });
  







 
   
     
 
 