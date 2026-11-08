import fs from 'node:fs';
import path from 'node:path';
import * as icons from 'simple-icons';

// Original screenshots from the author's public projects; preserved as sources.
export function buildGraphics({ lettering: text, root, out }) {
  fs.copyFileSync(path.join(root,'node_modules/simple-icons/LICENSE.md'),path.join(out,'Simple-Icons-LICENSE.md'));
  const esc = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
  const svg = (w, h, title, body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title desc"><title id="title">${esc(title)}</title><desc id="desc">Diseño de Jesús Canicio Ruiz. Los diagramas explican capacidades del proyecto; las capturas proceden de sus repositorios públicos.</desc>${body}</svg>\n`;
  const rect = (x,y,w,h,fill,r=0) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"/>`;
  const line = (d,color,width=2) => `<path d="${d}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const icon = (name,x,y,size,color) => {
    const item = icons[name];
    if (!item) throw new Error(`Unknown technology icon: ${name}`);
    return `<path d="${item.path}" transform="translate(${x} ${y}) scale(${size/24})" fill="${color}"/>`;
  };
  const arrow = (x,y,color) => line(`M${x} ${y+18}h36m-14-14 14 14-14 14`,color,3);
  const shot = name => {
    const bytes = fs.readFileSync(path.join(out,'screenshots',name));
    return `data:image/${name.endsWith('.jpg')?'jpeg':'png'};base64,${bytes.toString('base64')}`;
  };
  const shots = { stockflow: shot('stockflow.jpg'), tiktok: shot('tiktok.png') };
  const projects = [
    {id:'stockflow',name:'StockFlow',subtitle:'Inventario conectado.',copy:['Compras, ventas y stock','entre distintas sedes.'],stack:'React · Laravel · MySQL',accent:'#8bb9ff',base:'#15243d',mark:'siLaravel'},
    {id:'ats',name:'ATS Resume',name2:'Optimizer',subtitle:'Del CV a la oportunidad.',copy:['Análisis de documentos','y compatibilidad con ofertas.'],stack:'React · FastAPI · Python',accent:'#ffc28c',base:'#34251e',mark:'siPython'},
    {id:'booking',name:'Resource',name2:'Booking API',subtitle:'Cada reserva, en su sitio.',copy:['Concurrencia, autenticación','y persistencia de datos.'],stack:'Java · Spring · PostgreSQL',accent:'#d6b6ff',base:'#2b233d',mark:'siSpringboot'},
    {id:'tiktok',name:'TikTok',name2:'Wrapped',subtitle:'Tus hábitos, a la vista.',copy:['Historias, analítica y tarjetas.','Procesado en el navegador.'],stack:'React · Vite · Web Audio',accent:'#ff96c9',base:'#341e30',mark:'siReact'},
  ];
  for (const p of projects) for (const mobile of [false,true]) {
    const w=mobile?720:1280,h=mobile?820:560;
    let b=rect(0,0,w,h,p.base);
    // Structural circles are cropped by the frame, never used as content masks.
    b+=`<circle cx="${mobile?720:1220}" cy="${mobile?680:460}" r="${mobile?280:340}" fill="none" stroke="${p.accent}" stroke-opacity=".16" stroke-width="2"/>`;
    b+=`<circle cx="${mobile?720:1220}" cy="${mobile?680:460}" r="${mobile?215:265}" fill="none" stroke="${p.accent}" stroke-opacity=".16" stroke-width="2"/>`;
    const left=mobile?40:56, size=mobile?64:68;
    b+=text(p.name,left,105,size,'#f3f4ec',800);
    if(p.name2)b+=text(p.name2,left,180,size,'#f3f4ec',800);
    const sy=p.name2?239:169;
    b+=text(p.subtitle,left,sy,mobile?30:29,p.accent,600);
    if(!mobile){b+=text(p.copy[0],left,sy+70,25,'#e3e8e1',400)+text(p.copy[1],left,sy+107,25,'#e3e8e1',400);}
    b+=text(p.stack,left,mobile?770:506,mobile?27:24,p.accent,600);
    const x=mobile?40:612,y=mobile?310:64,pw=mobile?640:612,ph=mobile?390:386;
    if(p.id==='stockflow'||p.id==='tiktok') {
      b+=rect(x,y,pw,ph,'#0d1117',12);
      b+=`<defs><clipPath id="screen"><rect x="${x+10}" y="${y+38}" width="${pw-20}" height="${ph-48}" rx="4"/></clipPath></defs>`;
      b+=`<circle cx="${x+22}" cy="${y+20}" r="4" fill="${p.accent}"/><circle cx="${x+38}" cy="${y+20}" r="4" fill="#6d7e76"/><circle cx="${x+54}" cy="${y+20}" r="4" fill="#6d7e76"/>`;
      b+=text('Vista del proyecto',x+80,y+26,16,'#b4c7bb',400);
      b+=`<image href="${shots[p.id]}" x="${x+10}" y="${y+38}" width="${pw-20}" height="${ph-48}" preserveAspectRatio="${p.id==='tiktok'?'xMidYMin slice':'xMidYMid meet'}" clip-path="url(#screen)"/>`;
      b+=text('Captura del proyecto · datos de demostración',x+8,y+ph+30,mobile?22:18,'#e3e8e1',400);
    } else if(p.id==='ats') {
      // A document-to-analysis diagram, not a fabricated application screenshot.
      b+=rect(x+18,y+4,252,310,'#f3f4ec',8);
      b+=text('CV',x+44,y+65,46,'#34251e',800);
      for(let i=0;i<5;i++)b+=rect(x+44,y+99+i*26,i%2?144:180,7,i===0?'#aa6332':'#bac0b5',3);
      b+=icon('siPython',x+44,y+252,34,'#34251e');
      b+=rect(x+330,y+94,245,220,'#4b3529',8);
      b+=text('Oferta',x+356,y+143,33,'#f3f4ec',700);
      for(let i=0;i<4;i++)b+=rect(x+356,y+170+i*26,i%2?120:180,7,p.accent,3);
      b+=arrow(x+282,y+175,p.accent);
      b+=line(`M${x+145} ${y+325}v32h303v-32`,p.accent,3);
      b+=text('Extraer · comparar · mejorar',x+90,y+400,mobile?29:27,p.accent,600);
    } else {
      b+=rect(x+12,y+10,pw-24,85,'#3b2f54',8);
      b+=text('POST /api/v1/reservations',x+36,y+65,27,'#f3f4ec',700);
      b+=line(`M${x+pw/2} ${y+95}v58m-156 0h312m-312 0v36m312-36v36`,p.accent,3);
      for(const [dx,label,mark] of [[18,'Spring Boot','siSpringboot'],[338,'PostgreSQL','siPostgresql']]){
        b+=rect(x+dx,y+189,256,128,'#3b2f54',8);
        b+=icon(mark,x+dx+18,y+211,36,p.accent);
        b+=text(label,x+dx+18,y+285,27,'#f3f4ec',600);
      }
      b+=text('JWT · @Version · OpenAPI',x+65,y+390,mobile?29:27,p.accent,600);
    }
    const name=`project-${p.id}${mobile?'-mobile':''}.svg`;
    fs.writeFileSync(path.join(out,name),svg(w,h,`${p.name} ${p.name2??''} — ${p.subtitle} ${p.stack}`,b));
  }

  const groups=[
    {title:'Frontend',color:'#8bb9ff',list:[['siReact','React'],['siTypescript','TypeScript'],['siJavascript','JavaScript'],['siTailwindcss','Tailwind']]},
    {title:'Backend',color:'#c1f17e',list:[['siLaravel','Laravel'],['siPhp','PHP'],['siPython','Python'],['siSpringboot','Spring Boot']]},
    {title:'Datos y entrega',color:'#d6b6ff',list:[['siMysql','MySQL'],['siPostgresql','PostgreSQL'],['siDocker','Docker'],['siGit','Git']]},
    {title:'Web y automatización',color:'#ffc28c',list:[['siWordpress','WordPress'],['siN8n','n8n'],['siFastapi','FastAPI'],['siLinux','Linux']]},
  ];
  for(const mobile of [false,true]) for(const dark of [true,false]) {
    const w=mobile?720:1280,h=mobile?1170:660,bg=dark?'#15221d':'#f3f4ec',ink=dark?'#f3f4ec':'#15221d',panel=dark?'#20332a':'#e0e8d8';
    let b=rect(0,0,w,h,bg);
    groups.forEach((g,i)=>{
      const x=mobile?32:32+(i%2)*624,y=mobile?28+i*286:28+Math.floor(i/2)*318,gw=mobile?656:592;
      b+=rect(x,y,gw,mobile?263:290,panel,12);
      b+=text(g.title,x+28,y+55,mobile?32:30,ink,700);
      g.list.forEach(([name,label],j)=>{
        const gx=x+30+j*(mobile?158:141),gy=y+92;
        b+=icon(name,gx+20,gy,mobile?70:68,dark?g.color:'#32611e');
        b+=text(label,gx,gy+(mobile?124:128),mobile?23:22,ink,600);
      });
    });
    fs.writeFileSync(path.join(out,`stack-${dark?'dark':'light'}${mobile?'-mobile':''}.svg`),svg(w,h,'Stack: React, TypeScript, JavaScript, Tailwind, Laravel, PHP, Python, Spring Boot, MySQL, PostgreSQL, Docker, Git, WordPress, n8n, FastAPI y Linux.',b));
  }

  for (const [id,label,brand] of [['portfolio','Ver portfolio','siReact'],['linkedin','LinkedIn',null],['email','Escríbeme',null]]) {
    let b=rect(0,0,400,112,'#c1f17e',12);
    if(brand)b+=icon(brand,22,34,42,'#15221d');
    else if(id==='email') b+=line('M24 36h46v38H24z M24 36l23 19 23-19','#15221d',3);
    else b+=text('in',26,76,42,'#15221d',800);
    b+=text(label,90,72,35,'#15221d',800)+arrow(340,40,'#15221d');
    fs.writeFileSync(path.join(out,`link-${id}.svg`),svg(400,112,label,b));
  }

  for(const mobile of [false,true]){
    const w=mobile?720:1280,h=mobile?320:240;
    let b=rect(0,0,w,h,'#c1f17e');
    b+=text('Construyamos',40,mobile?95:93,mobile?64:70,'#15221d',800);
    b+=text('lo siguiente.',40,mobile?177:179,mobile?64:70,'#15221d',800);
    if(mobile)b+=text('Hablemos de tu equipo.',40,264,31,'#32611e',600);
    else b+=text('Hablemos de tu equipo.',810,140,31,'#32611e',600);
    b+=arrow(w-102,h-93,'#15221d');
    fs.writeFileSync(path.join(out,`contact${mobile?'-mobile':''}.svg`),svg(w,h,'Construyamos lo siguiente. Hablemos de tu equipo. Contacta con Jesús Canicio Ruiz.',b));
  }
  console.log('Built project covers, technology atlas, contact links and closing artwork.');
}
