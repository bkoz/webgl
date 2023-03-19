//
// Composite (alpha blend) the foreground image with the background image.
//
// bgImg is the background image to be modified.
// fgImg is the foreground image.
// fgOpac is the opacity of the foreground image.
// fgPos is the position of the foreground image in pixels. It can be negative and (0,0) means the top-left pixels of the foreground and background are aligned.
//
// Bob Kozdemba - bkozdemba@gmail.com
//
// float fgOpac - From UI.
// 
function composite(bgImg, fgImg, fgOpac, fgPos) {
        for (var i = 0; i < bgImg.data.length; i += 4) {
                mask = fgImg.data[i + 3] * fgOpac;
                bgImg.data[i] = mask / 255 * fgImg.data[i] + (1 - mask / 255) * bgImg.data[i];
                bgImg.data[i + 1] = mask / 255 * fgImg.data[i + 1] + (1 - mask / 255) * bgImg.data[i + 1];
                bgImg.data[i + 2] = mask / 255 * fgImg.data[i + 2] + (1 - mask / 255) * bgImg.data[i + 2];
                bgImg.data[i + 3] = mask / 255 * fgImg.data[i + 3] + (1 - mask / 255) * bgImg.data[i + 3];
        }
}
