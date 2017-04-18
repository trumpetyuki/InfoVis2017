Vec3=function(x,y,z)
{
    this.x =x;
    this.y =y;
    this.z =z;
}

Vec3.prototype.add =function(v)
{
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
}

Vec3.prototype.sum=function()
{
    return this.x + this.y + this.z;
}

Vec3.prototype.min=function()
{
    if(this.x>this.y){
	if(this.y>this.z){
	    return this.z;
	}else{
	    return this.y;
	}
    }else{
	if(this.x>this.z){
	    return this.z;
	}else{
	    return this.x;
	}
    }
}
Vec3.prototype.mid=function()
{
    var min,max;
    
    if(this.x>this.y){
	if(this.y>this.z){
	    min= this.z;
	}else{
	    min= this.y;
	}
    }else{
	if(this.x>this.z){
	    min= this.z;
	}else{
	    min= this.x;
	}
    }
    
    if(this.x>this.y){
	if(this.x>this.z){
	    max= this.x;
	}else{
	    max= this.z;
	}
    }else{
	if(this.y>this.z){
	    max= this.y;
	}else{
	    max= this.z;
	}
    }
    return this.x+this.y+this.z-min-max;
}
Vec3.prototype.max=function()
{
   if(this.x>this.y){
	if(this.x>this.z){
	    return this.x;
	}else{
	    return this.z;
	}
    }else{
	if(this.y>this.z){
	    return this.y;
	}else{
	    return this.z;
	}
    } 
}

function AreaOfTriangle(v0,v1,v2)
{
    var s,a,b,c;
    a=Math.sqrt(Math.pow(v0.x-v1.x,2)+Math.pow(v0.y-v1.y,2)+Math.pow(v0.z-v1.z,2));
    b=Math.sqrt(Math.pow(v1.x-v2.x,2)+Math.pow(v1.y-v2.y,2)+Math.pow(v1.z-v2.z,2));
    c=Math.sqrt(Math.pow(v2.x-v0.x,2)+Math.pow(v2.y-v0.y,2)+Math.pow(v2.z-v0.z,2));
    s=(a+b+c)/2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}
