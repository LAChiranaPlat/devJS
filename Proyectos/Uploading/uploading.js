let index=0;

let contImages=[];

let fragment=document.createDocumentFragment();

export function up(controls){

	let { cArrastre, cImages, template, input, up } = controls;

	cArrastre.addEventListener("dragover",(e)=>{
		e.preventDefault();
		e.stopPropagation();

		e.dataTransfer.dropEffect="copy";

	});

	cArrastre.addEventListener("drop",(e)=>{
		e.preventDefault();
		e.stopPropagation();

		fillImage(
			{
				images:e.dataTransfer.files, 
				template:template, 
				contenedor:cImages
			});
		
	});


	cArrastre.addEventListener("click",()=>{
		input.click();
	});

	input.addEventListener("change",(e)=>{

		fillImage(
			{
			images:e.target.files, 
			template:template, 
			contenedor:cImages
		});

	});

	cImages.addEventListener("click",(e)=>{

		e.preventDefault();
		e.stopPropagation();

		if(e.target.classList.contains("dropImage")){

			let img=e.target.parentNode.querySelector("img");
			let index=img.getAttribute("class");
			e.target.parentNode.remove();		

			contImages.splice(index,1,"");

		}

	});

	up.addEventListener("click",(e)=>{
		e.preventDefault();
		e.stopPropagation();

	
		//FORMDATA
		/****************************************************************/
		let data=new FormData();

		contImages.forEach((e)=>{
			
			if(e!=""){
				data.append("images[]",e);
			}

		});

		/****************************************************************/		


		//AJAX
		let objAjax=new XMLHttpRequest;

		objAjax.addEventListener("progress",(e)=>{
			console.log(e);
		});

		objAjax.addEventListener("load",(e)=>{
		});

	
		objAjax.open("post","move.php");
		objAjax.send(data);

	});

}


function fillImage(obj){

	let {images, template, contenedor}= obj;

	for(let image of images ){

		contImages.push(image);
		
		let visor=new FileReader();

		visor.addEventListener("progress",(e)=>{
			console.log(e);
		});

		visor.addEventListener("load",()=>{

			let clon=template.cloneNode(true);

			clon.querySelector("img").src=visor.result;
			clon.querySelector(".label").textContent="File "+index+": "+image.name;
			clon.querySelector("img").setAttribute("class",index);
			
			//clon.querySelector("progress").value=;
			
			index++;
			fragment.appendChild(clon);
			contenedor.appendChild(fragment);

		});

		visor.readAsDataURL(image);

	}

}


