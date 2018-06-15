import React from 'react';

function Images(props){
	// Map through images
	const image_arr = props.image;
	console.log(image_arr);
	const imageComp = image_arr.map((images, index)=>{
		console.log(images);
		return (
			<img src={images} />
		)
	});
	console.log(imageComp);
	return (
		<div className="col-xs-12">
			{imageComp}
		</div>
	)
}

export default Images;