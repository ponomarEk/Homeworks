async function getRandomChinese(length){
	let i=0;
	let temp ='';
	 while(length>i){
		await new Promise(function(resolve){
			setTimeout(()=>{
				let dataLast = +(Date.now().toString().slice(this.length-5,));
				const sign = String.fromCharCode(dataLast);
				resolve(sign);
				},50);
		})
		.then(n=>{
			temp+=n;
		});
		i++;
	}
	return temp;
};
getRandomChinese(4).then((b)=>{
	console.log(b);
});
<<<<<<< HEAD
setTimeout(()=>console.log("jgj"),250);
=======
>>>>>>> 0dc7b72fcbd8223da8a8088977fcef508be93785
