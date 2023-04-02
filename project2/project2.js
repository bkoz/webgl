// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The transformation first applies scale, then rotation, and finally translation.
// The given rotation value is in degrees.
//
// 
function GetTransform( positionX, positionY, rotation, scale )
{
	var deg2rads = (3.1459 / 180.0);
	var theta = rotation * deg2rads;
	// console.log("pos = ", positionX, positionY);
	// console.log("scale = ", scale);
	// console.log("theta = ", theta);
	return Array(
		         scale * Math.cos(theta), Math.sin(theta), 0,
                 -Math.sin(theta), scale * Math.cos(theta), 0,
				 positionX, positionY, 1
				 );
}

// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The arguments are transformation matrices in the same format.
// The returned transformation first applies trans1 and then trans2.
function ApplyTransform( t1, t2 )
{
	m = Array()
	m[0] = t1[0] * t2[0] + t1[1] * t2[3] + t1[2] * t2[6]
	m[1] = t1[0] * t2[1] + t1[1] * t2[4] + t1[2] * t2[7]
	m[2] = t1[0] * t2[2] + t1[1] * t2[5] + t1[2] * t2[8]
	m[3] = t1[3] * t2[0] + t1[4] * t2[3] + t1[5] * t2[6]
	m[4] = t1[3] * t2[1] + t1[4] * t2[4] + t1[5] * t2[7]
	m[5] = t1[3] * t2[2] + t1[4] * t2[5] + t1[5] * t2[8]
	m[6] = t1[6] * t2[0] + t1[7] * t2[3] + t1[8] * t2[6]
	m[7] = t1[6] * t2[1] + t1[7] * t2[4] + t1[8] * t2[7]
	m[8] = t1[6] * t2[2] + t1[7] * t2[5] + t1[8] * t2[8]
	return m
}

//
// t1      t2
//
// 0 1 2   0 1 2
// 3 4 5   3 4 5
// 6 7 8   6 7 8
//
// m
//
// m[0] = t1[0] * t2[0] + t1[1] * t2[3] + t1[2] * t2[6]
// m[1] = t1[0] * t2[1] + t1[1] * t2[4] + t1[2] * t2[7]
// m[2] = t1[0] * t2[2] + t1[1] * t2[5] + t1[2] * t2[8]
// m[3] = t1[3] * t2[0] + t1[4] * t2[3] + t1[5] * t2[6]
// m[4] = t1[3] * t2[1] + t1[4] * t2[4] + t1[5] * t2[7]
// m[5] = t1[3] * t2[2] + t1[4] * t2[5] + t1[5] * t2[8]
// m[6] = t1[6] * t2[0] + t1[7] * t2[3] + t1[8] * t2[6]
// m[7] = t1[6] * t2[1] + t1[7] * t2[4] + t1[8] * t2[7]
// m[8] = t1[6] * t2[2] + t1[7] * t2[5] + t1[8] * t2[8]
