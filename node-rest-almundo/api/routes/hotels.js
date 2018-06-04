
const express = require('express');
const router = express.Router();
const dataHotel = require('../../data/data.json');
const where = require("lodash.where");
const filter = require("lodash.filter");

router.get('/',(req,res,next)=>{

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

  res.status(200).json(
  dataHotel
  );
});

router.post('/',(req,res,next)=>{
  res.status(200).json({
    message:'handling post request to hotels'
  });
});

router.get('/:name/:stars',(req,res,next)=>{
  const name = req.params.name.toLowerCase();
	const stars= req.params.stars.split(',');

	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	res.setHeader('Access-Control-Allow-Credentials', true);

	//var filtered = where(dataHotel, {"name": name});
	var filtered = filter(dataHotel, function(item){
		if(name!="@" || stars!="0"){
		if(stars.length==1){

      if(stars!="0" && name!="@"){
			     return item.stars==stars && item.name.toLowerCase().match(name);
      }
      else{
          return item.stars==stars || item.name.toLowerCase().match(name);
      }

		}else{
			for(i=0;i<stars.length;i++){
        if(name!="@"){
          if(item.stars==stars[i] && item.name.toLowerCase().match(name)){
  				      return item.stars==stars[i] && item.name.toLowerCase().match(name);
  			   }
        }else{
          if(item.stars==stars[i] || item.name.toLowerCase().match(name)){
  				      return item.stars==stars[i] || item.name.toLowerCase().match(name);
  			   }
        }

	     }

		}
	}else{
		return item;
	}
	});


  res.status(200).json(filtered);
	//res.status(200).json({a:name,b:stars});
});

module.exports = router;
