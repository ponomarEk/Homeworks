function getRandomChinese(length){
	let i=0;
	let s ='';
	while(length>i){
		const b = new Promise(function(resolve){
			setTimeout(()=>{
				const k = String.fromCharCode(Date.now());
				resolve(k);
				},50);
				
		})
		.then((n)=>{
			s+=n;
		})
		i++;
	}

	setTimeout(()=>{
		console.log(s);
	},length*50);
};
getRandomChinese(4);