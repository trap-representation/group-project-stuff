let order_array_thingy=["Pulao", "Kasha mangsha", "Rui macher kalia", "Shorshe illish", "Shorshe pabda", "Dab chingri", "Luchi", "Kachuri", "Veg manchurian", "Hakka noodles", "Mixed fried rice", "Chilli chicked", "Chicken soup with noodles", "Chicken momo", "French fries", "Hash browns", "Saesar salad", "Roast lamb salad", "Broccoli baked", "Chicken pie"];

let prices=[100,200,300,250,300,200,100,150,80,190,170,130,200,250,200,250,140,100,90,100];

let org_prices=[150,200,300,250,300,200,100,150,180,190,170,130,200,250,200,260,140,100,90,190];

function check_valid_items(){
    let ord=document.getElementById("this-textarea");
    let order_s=ord.value;
    let order_split=order_s.split(/\r?\n/);
    let order_len=order_split.length;
    let i,j;
    let matches_all;
    let discount="";
    let price=0;
    let actual_price=0;
    for(i=0;i<order_len;i++){
	matches_all=false;
	for(j=0;j<order_array_thingy.length;j++){
	    if(order_split[i]===""){
		matches_all=true;
		break;
	    }
	    else if(order_split[i].toLowerCase()===order_array_thingy[j].toLowerCase()){
		matches_all=true;
		if(prices[j]<org_prices[j]){
		    if(discount===""){
			discount=order_split[i];
		    }
		    else{
			discount+=" " + order_split[i];
		    }
		}
		price+=prices[j];
		actual_price+=org_prices[j];
		break;
	    }
	}
	if(!matches_all){
	    price="invalid";
	    break;
	}
    }
    let para;
    if(price==="invalid"){
	para=document.getElementById("final-price");
	para.innerHTML="We're sorry, we do not serve " + order_split[i] + "!";
    }
    else{
	para=document.getElementById("final-price");
	para.innerHTML="You'll have to pay Rs. " + price.toString();
	if(discount!=""){
	    const d=actual_price-price;
	    para.innerHTML+=" (You saved Rs. ";
	    para.innerHTML+=d.toString();
	    para.innerHTML+=")";
	}
    }
}
	

