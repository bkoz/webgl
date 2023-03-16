// bgImg is the background image to be modified.
// fgImg is the foreground image.
// fgOpac is the opacity of the foreground image.
// fgPos is the position of the foreground image in pixels. It can be negative and (0,0) means the top-left pixels of the foreground and background are aligned.
function composite( bgImg, fgImg, fgOpac, fgPos )
{
	for ( var i=0; i<bgImg.data.length; i+=4 ) {
                                bgImg.data[i+0] = fgOpac * fgImg.data[i+0] + (1 - fgOpac) * bgImg.data[i+0];
                                bgImg.data[i+1] = fgOpac * fgImg.data[i+1] + (1 - fgOpac) * bgImg.data[i+1];
                                bgImg.data[i+2] = fgOpac * fgImg.data[i+2] + (1 - fgOpac) * bgImg.data[i+2];
                                bgImg.data[i+3] = fgOpac * fgImg.data[i+3] + (1 - fgOpac) * bgImg.data[i+3];
                        }

}
