function t(t,n,a){a/=100;const r=(n/=100)*Math.min(a,1-a)+a;return[t,r?100*(2-2*a/r):0,100*r]}function n(t,n,a){const r=(a/=100)-a*(n/=100)/2,h=Math.min(r,1-r);return[t,h?(a-r)/h*100:0,100*r]}function a(t,n,a){n/=100,a/=100;let r=(r,h=(r+t/60)%6)=>a-a*n*Math.max(Math.min(h,4-h,1),0);return[255*r(5),255*r(3),255*r(1)]}function r(t,n,a){t/=255,n/=255,a/=255;let r=Math.max(t,n,a),h=r-Math.min(t,n,a),i=h&&(r==t?(n-a)/h:r==n?2+(a-t)/h:4+(t-n)/h);return[60*(i<0?i+6:i),r&&h/r*100,100*r]}function h(t,n,a){t/=255,n/=255,a/=255;let r=Math.max(t,n,a),h=r-Math.min(t,n,a),i=1-Math.abs(r+r-h-1),u=h&&(r==t?(n-a)/h:r==n?2+(a-t)/h:4+(t-n)/h);return[60*(u<0?u+6:u),i?h/i*100:0,50*(r+r-h)]}function i(t,n,a){a/=100;let r=(n/=100)*Math.min(a,1-a),h=(n,h=(n+t/30)%12)=>a-r*Math.max(Math.min(h-3,9-h,1),-1);return[255*h(0),255*h(8),255*h(4)]}export{i as a,n as b,a as c,r as d,t as h,h as r};
