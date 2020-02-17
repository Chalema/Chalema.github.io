Readme.txt (Panorama)

—————————————————————
Content:

1. Instructions to view panorama offline
2. panorama URL Options
3. Troubleshooting
4. Extracting the background mask from the .PNG file
5. Samsung GearVR (experimental)
6. Further information for Panorama’s



1. Instructions to view panorama offline
————————————————————————————————————————
All the files you need to view the panorama are contained in this zip file.
To get started:
1. Make sure you have unzipped the zip file so that you can see the ‘pano.html’ and jpg files
2. Double click on the pano.html
> This should open your ‘default’ browser and display the panorama.  We recommend Chrome (v33+), IE (v11+) and Firefox (v40+) 

You should now see the panorama offline.


————————————————————————————————————————
Hosting these files on your phone or on a webpage...
For Stereo:
 Copy the 5 files to your web server:
  pano.html
  twgl-dist.js
  image.jpg  (preview mono image)
  imageL.jpg (high res left eye)
  imageR.jpg (high res right eye)

For Mono:
The image files are slightly different, copy these two files:
 image_th.jpg (preview mono image)
 image.jpg    (high res mono image)

If you are using Dropbox, you can place these files into the dropbox public folder, then right click on pano.html and select ‘copy public link’ and paste the link into a browser or email to view.

 
2. Panorama URL Options
————————————————————————————————————————
URL Parameter options for the panorama player:

mono=<filename>   :name of ‘mono’ base image file (usually mono=image where the image file is image.jpg and the preview is image_th.jpg) 
url=<filename>    :name of ‘stereo’ base image file (ie. url=image with the left and right high-res files are imageL.jpg imageR.jpg)
distort=1   :adds barrel distortion correction for google-cardboard with iPhone
flipLR=1    :flips the left and right eye images. Used for testing stereo images using your laptop and crossing your eyes
stereo=1    :forces stereo mode
fov=80      :sets the initial horizontal ‘field of view’, default is 80 degrees
msaa=1      :change the multi-sampling to reduce aliasing artifacts, default is 1.9


3. Troubleshooting
————————————————————————————————————————
Viewing Offline:
 Q: When I open the pano.html file, I don’t see my panorama, I see a ‘gray spinning cube’ instead.  Why?
 A: The chrome browser, has a security setting in place, that may fail opening the panorama, due to file permissions.  To fix, set chrome browser’s security setting to allow ‘local files’ access - for example:
   Close all instances of chrome, then at the command line, or window’s short cut, start the browser like this:
  > chrome -—allow-file-access-from-files
   For other browsers and more details, refer to this link:
     https://github.com/mrdoob/three.js/wiki/How-to-run-things-locally


4. Extracting the background mask from the .PNG file
————————————————————————————————————————
The background mask can be useful for overlaying backgrounds.  The background mask is contained in the (lossless) image.PNG file’s alpha channel (image.png is found in the zip file).
Open the image.PNG file in a paint program, like Photoshop, and use the alpha channel as a mask layer to edit the background.

Saving and viewing:
Using the paint program, export three jpg files: image2L.jpg (top half), image2R.jpg (bottom half) and a preview image (1/8 down-sampled jpg, top half) as image2.jpg.  Use the existing files, imageL.jpg, imageR.jpg and image.jpg as a guide.
Now open the player offline with parameter ‘pano.html?url=image2’ instead of ‘pano.html?url=image’.


5. Viewing with Samsung Gear VR
————————————————————————————————————————
This is currently experimental (and temporary).
Here are the steps to view your stereo-panorama on a Samsung Gear VR.
1. Make sure you have rendered your stereo panorama at size “1536 cube”.
2. Run the following osx/linux script (requires ImageMagick installed)

  # create 12 tiles
  convert -crop 1536x1536 imageL.jpg L.png
  convert -crop 1536x1536 imageR.jpg R.png
  convert R-2.png R-0.png R-5.png R-4.png R-1.png R-3.png L-2.png L-0.png L-5.png L-4.png L-1.png L-3.png +append result.png
  echo ‘{ "title": “result.png”, "author": “anon”}’ > result.json

3. email or copy the ‘result.png’ and ‘result.json' files to your samsung phone
4. on your phone, save these two files to the ‘Media’ folder.
5. now open the ‘otoy media player’ and scroll to your stereo panorama image ‘result.png’


6. Further information for Panorama’s:
————————————————————————————————————————
Panorama Information: http://pano.autodesk.com
Forum / Community Help: http://forums.autodesk.com/t5/a360-rendering-general/stereo-panorama-rendering-now-available/td-p/5503731
Blog posts:   http://autodesk360rendering.typepad.com/blog/
Twitter Feed:   https://twitter.com/search?src=typd&q=autodesk%20cardboard
Main Rendering Portal:  https://rendering.360.autodesk.com

