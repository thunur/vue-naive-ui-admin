let e=[];const n=new WeakMap;function t(){e.forEach((e=>e(...n.get(e)))),e=[]}function a(a,...o){n.set(a,o),e.includes(a)||1===e.push(a)&&requestAnimationFrame(t)}export{a as b};
