/*
   New Perspectives on HTML and CSS
   Tutorial 6
   Case Problem 3

   Author:   Anna Lopez  
   Date:     3/1/2014

   Filename: rundemo.js

   Purpose: The purpose of this program is to update the
            appearance of the rendered text based on the styles
            selected by the user from the form.


*/

function updatePreview() {
   formStyles=document.forms[0];
   inputtext=formStyles.sampletext.value;

   previewobject=document.getElementById("output");
   previewobject.innerHTML=inputtext.replace(/\n/g,"<br />");
   

   ffi=formStyles.fontfamily.selectedIndex;
   previewobject.style.fontFamily=formStyles.fontfamily.options[ffi].text;

   fsi=formStyles.fontstyle.selectedIndex;
   previewobject.style.fontStyle=formStyles.fontstyle.options[fsi].text;

   fwi=formStyles.fontweight.selectedIndex;
   previewobject.style.fontWeight=formStyles.fontweight.options[fwi].text;

   tdi=formStyles.textdecoration.selectedIndex;
   previewobject.style.textDecoration=formStyles.textdecoration.options[tdi].text;

   tti=formStyles.texttransform.selectedIndex;
   previewobject.style.textTransform=formStyles.texttransform.options[tti].text;
 
   fvi=formStyles.fontvariant.selectedIndex;
   previewobject.style.fontVariant=formStyles.fontvariant.options[fvi].text;  

   previewobject.style.color=formStyles.color.value;
   previewobject.style.backgroundColor=formStyles.backgroundcolor.value;

   previewobject.style.fontSize=formStyles.fontsize.value + "px";
   previewobject.style.letterSpacing=formStyles.letterspacing.value+"px";
   previewobject.style.wordSpacing=formStyles.wordspacing.value+"px";
   previewobject.style.lineHeight=formStyles.lineheight.value+"em";
   previewobject.style.textIndent=formStyles.textindent.value+"px"; 
}

window.onload=function() {
   formStyles=document.forms[0];

   formStyles.fontfamily.onchange=updatePreview;
   formStyles.fontstyle.onchange=updatePreview;
   formStyles.fontweight.onchange=updatePreview;
   formStyles.textdecoration.onchange=updatePreview;
   formStyles.texttransform.onchange=updatePreview;
   formStyles.fontvariant.onchange=updatePreview;
   formStyles.color.onchange=updatePreview;
   formStyles.backgroundcolor.onchange=updatePreview;
   formStyles.fontsize.onchange=updatePreview;
   formStyles.letterspacing.onchange=updatePreview;
   formStyles.wordspacing.onchange=updatePreview;
   formStyles.lineheight.onchange=updatePreview;
   formStyles.textindent.onchange=updatePreview;
   formStyles.textstring.onchange=updatePreview;

   document.getElementById("removestyles").onclick = redo;
}

function redo() {
   window.location.reload();
}