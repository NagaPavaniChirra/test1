
	var products=
		[
			{
				name:"laptop",
				price:"300$",
				manufacturer:"samsung"
				
				
			},
			{
				name:"TV",
				price:"350$",
				manufacturer:"LG"
				
				
			
			},
			{
				name:"Watch",
				price:"400$",
				manufacturer:"Titan"
		
				
				
			},
			{
				name:"laptop",
				price:"300$",
				manufacturer:"Lenovo"
				
				
			
			},
		];
		function loadProductDetails(productsdetails){
			var divElement=document.createElement("div");
			 	divElement.setAttribute("id","demo");
				divElement.setAttribute("class","block");
			    var divElement1=document.createElement("div");
				spanElement=document.createElement("span");
			    spanElement.setAttribute("class","color");
			    spanElement.innerHTML="Name    :";
	            divElement1.appendChild(spanElement);
				spanElement1=document.createElement("span");
				spanElement1.setAttribute("class","color1");
				spanElement1.innerHTML=productsdetails.name;
				divElement1.appendChild(spanElement1);
				divElement2=document.createElement("div");
				spanElement2=document.createElement("span");
				spanElement2.innerHTML="price:";
				spanElement2.setAttribute("class","color");
				divElement2.appendChild(spanElement2);
				spanElement3=document.createElement("span");
				spanElement3.setAttribute("class","color1");
				spanElement3.innerHTML=productsdetails.price;
				
				divElement2.appendChild(spanElement3);
				divElement1.appendChild(divElement2);
				spanElement4=document.createElement("span");
				spanElement4.innerHTML="manufacturer:";
				spanElement4.setAttribute("class","color");
				divElement1.appendChild(spanElement4);
				spanElement5=document.createElement("span");
				spanElement5.setAttribute("class","color1");
				spanElement5.innerHTML=productsdetails.manufacturer;
				divElement1.appendChild(spanElement5);
				divElement.appendChild(divElement1);
				document.getElementById("demo").appendChild(divElement);

		}
		for(var i=0;i<products.length;i++){
			loadProductDetails(products[i]);
		}

