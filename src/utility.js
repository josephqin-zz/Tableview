
export var tranSlate = (x,y)=>'translate('+x+','+y+')';
export var drawCircle = (radius) => 'M '+(0-radius)+' '+0+' a '+radius+' '+radius+', 0, 1, 0, '+(radius*2)+' '+0+' '+'a '+radius+' '+radius+', 0, 1, 0, '+(-radius*2)+' '+0;
export var drawRect = (width,height) => 'M'+(0-width/2)+','+(0-height/2)+' h '+width+' v '+height+' h '+(0-width)+' Z ';
export var drawLine = (range,direction) => 'M 0,0 '+direction+' '+Math.abs(range[1]-range[0]);